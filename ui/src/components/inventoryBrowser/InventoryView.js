import React from "react";
import InventoryTable from "./InventoryTable";

class InventoryView extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <InventoryTable />
      </div>
    )
  }
}

export default InventoryView