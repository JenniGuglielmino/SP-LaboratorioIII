import Anuncio_Autos from "./anuncio_autos.js";
import { createEntity, updateEntity, deleteEntity } from "./myCrud.js";
import { createTable, updateTable} from "./dynamicTable.js";
import { myForm, updateForm, hideUnhideButtons } from "./myForm.js";
import { deleteObjectFetch } from "./Delete.js";
import { createObjectFetch } from "./Create.js";
import { getObjectsFetch, getObjectsFetchCB } from "./Read.js";
import { updateObjectFetch } from "./Update.js";
import { checkBoxHandler, filterAddsHandler } from "./myFilter.js";


const nuevoFormulario = document.forms[0];
export let filteredAds=[];
export let temporalListAds=[];
export const myCheckBox =  document.querySelectorAll(".myCheck");
export const myAverage = document.getElementById("Average");
const buttonDelete = document.getElementById("buttonDelete");
const buttonModify = document.getElementById("buttonModify");
const buttonCreate = document.getElementById("buttonSubmit");
const buttonCancel = document.getElementById("buttonCancel");

window.addEventListener("load", () => {
  getObjectsFetchCB((data)=>{
    filteredAds = data;
    temporalListAds = data;
    updateTable(data);
  });

  myCheckBox.forEach((element)=> element.addEventListener("click",checkBoxHandler));
  buttonDelete.addEventListener("click", DeleteHandlerEvent);
  buttonModify.addEventListener("click", ModifyHandlerEvent);
  buttonCreate.addEventListener("click", CreateHandlerEvent);
  buttonCancel.addEventListener("click", CancelHandlerEvent);
});

  window.addEventListener("click", (ev) => {
    if(ev.target.matches('td')){
      hideUnhideButtons(false);
      updateForm(nuevoFormulario.elements, ev.target.parentElement);
    }
  });

  const CreateHandlerEvent = () => {
    const myData = myForm(nuevoFormulario.elements);
    if(myData.id === ''){
      createObjectFetch(myData);
      hideUnhideButtons(true);
    }
  }

  const CancelHandlerEvent = () => {
    hideUnhideButtons(true);
  }

  const DeleteHandlerEvent = () => {
    let idToDelete = nuevoFormulario.elements.idForm.value;
    deleteObjectFetch(idToDelete);
    hideUnhideButtons(true);
    nuevoFormulario.reset();
  }

  const ModifyHandlerEvent = () => {
    const myData = myForm(nuevoFormulario.elements);
    updateObjectFetch(myData.id, myData);
    hideUnhideButtons(true);
  }

  window.addEventListener("change", (ev) => {
    if(ev.target.matches('#FTransaccion')){
      filterAddsHandler(ev, filteredAds, temporalListAds);
    }
  });