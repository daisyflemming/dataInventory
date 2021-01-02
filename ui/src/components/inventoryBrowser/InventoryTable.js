import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MDBBtn, MDBContainer, MDBDataTable, MDBModal, MDBModalBody, MDBModalFooter} from 'mdbreact';
import DatasetModal from "./DatasetModal";

const data = {
  columns: [
    {
      label: "Id",
      field: "id",
      sort: "asc",
      searchable: true
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      searchable: true
    },
    {
      label: "Type",
      field: "data_type",
      sort: "asc",
      searchable: true
    },
    {
      label: "Source",
      field: "source_from",
      sort: "asc",
      searchable: true
    },
    {
      label: "Version",
      field: "version",
      sort: "asc",
      searchable: true
    },
    {
      label: "Date Added",
      field: "date_added",
      sort: "asc",
      searchable: true
    }
  ]
}

class InventoryTable extends Component {
  state = {
    showPopup: false
  };

  toggle = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  showModal = (selectedDataset) => {
    this.setState({
      showPopup: !this.state.showPopup,
      selectedDataset
    });
  };

  render() {
    const {datasets} = this.props;
    datasets.map(s => {
      s['clickEvent'] = () => {
        this.showModal(s);
      };
      return s;
    });
    data['rows'] = datasets;

    return (
      <div>
        <MDBContainer >
          <MDBModal isOpen={this.state.showPopup} toggle={this.toggle}>
            <MDBModalBody>
              <DatasetModal dataset={this.state.selectedDataset}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBDataTable
            data={data}
            order={['id', 'asc', 'name', 'asc']}
          />
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    datasets: state.rootReducer.datasets,
  }
};

export default connect(mapStateToProps)(InventoryTable)
