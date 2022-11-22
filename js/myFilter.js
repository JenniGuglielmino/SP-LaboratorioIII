import {updateTable} from "./dynamicTable.js";
import {myCheckBox, myAverage, temporalListAds} from "./script.js";

const filterAddsHandler = (e, filteredAds, temporalList) =>{
    let selectedOption =  FTransaccion.value;
    let averageToShow = 'N/A';
    console.log('Filtereds ads list');
    console.log(filteredAds);
    console.log('Selected option');
    console.log(selectedOption);
    if(selectedOption != "All"){
        temporalList = filteredAds.filter(value => value.transaccion == selectedOption);
        const average = temporalList.reduce((total, current) => total + parseInt(current.precio), 0) /temporalList.length;
        averageToShow = `$ ${average.toFixed(2)}`;
        console.log("Temporal list");
        console.log(temporalList);
    }else{
        temporalList = filteredAds;
    }

    if(temporalList.length>0) {
        myAverage.value =  averageToShow;
    }

    updateTable(temporalList);
}

const checkBoxHandler = (e) =>{
  const selectedFilters = {};
  myCheckBox.forEach((item) => {
    selectedFilters[item.name] = item.checked;
  });

  const myMappedAdsList = temporalListAds.map((item) => {
    const mappedAdsList = {};
    for (const key in item) {
      if (selectedFilters[key] || key == "id") {
        mappedAdsList[key] = item[key];
      }
    }
    return mappedAdsList;
  });
  updateTable(myMappedAdsList);
}

export {filterAddsHandler, checkBoxHandler};