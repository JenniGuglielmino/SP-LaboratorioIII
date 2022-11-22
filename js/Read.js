import { URL } from "./myUrl.js";
 import { ToggleSpinner } from "./mySpinner.js";
 import { updateTable } from "./dynamicTable.js";
 
 const getObjectsFetch = () => {
    ToggleSpinner(true);
    
    fetch(URL)
    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data)=>{
        updateTable(data);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally((data)=>{
        ToggleSpinner(false);
    })
}

const getObjectsFetchCB = (callback) => {
    ToggleSpinner(true);

    fetch(URL)
    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data)=>{
        callback(data);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally((data)=>{
        ToggleSpinner(false);
    })
}

const getObjectsFetchForCards = (callback) => {
    ToggleSpinner(true);

    fetch(URL)
    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data)=>{
        callback(data);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally((data)=>{
        ToggleSpinner(false);
    })
}

const getObjectFetch = (id) => {
    ToggleSpinner(true);

    fetch(`${URL}/${id}`)
    
    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data)=>{
        alert(`Object [${data.id}] [${data.titulo} ${data.descripcion}] readed sucessfully`)
        return data;
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        ToggleSpinner(false);
    })
}

export { getObjectsFetch, getObjectFetch, getObjectsFetchForCards, getObjectsFetchCB };