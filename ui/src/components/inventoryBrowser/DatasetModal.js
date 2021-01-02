import React from 'react';
import {create_UUID} from "../utils/commons";

const toArray =(obj) =>{
  let array = [];
  for (let key in obj) {
    let value = obj[key];
    array.push({key: key, value: value});
  }
  return array;
}
const DatasetModal = (props) => {
  const {dataset} = props;
  const descriptionItems = toArray(dataset['description']);
  return (
    <div >
        <div id={create_UUID} className={'modal-content'}>
          <div>
            <b>{dataset['name']}</b> {dataset['version']}
          </div>
          {descriptionItems.map(s => <div>{s.key}: {s.value}</div>)}
        </div>
    </div>
  )
};

export default DatasetModal;
