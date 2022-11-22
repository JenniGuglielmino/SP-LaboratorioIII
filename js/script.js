
import Anuncio_Autos from "./anuncio_autos.js";
import { createEntity, updateEntity, deleteEntity } from "./myCrud.js";
import { createTable, updateTable} from "./dynamicTable.js";
import { myForm, updateForm, hideUnhideButtons } from "./myForm.js";
import { getLocalStorageData } from "./localStorage.js";
import toggleSpinner from "./mySpinner.js";
import {validarCampoVacio,validarNumeros} from "./myValidations.js";

let myLocalData;
const nuevoFormulario = document.forms[0];
const controles = nuevoFormulario.elements;

window.addEventListener("load", () => {
    console.log('Dentro del windows',nuevoFormulario);
  myLocalData = getLocalStorageData(Anuncio_Autos.getMainKey());
  updateTable(myLocalData);
});

window.addEventListener("click", (ev) => {
    console.log('dentro del clic');
  if(ev.target.matches('td')){
      hideUnhideButtons(false);
      updateForm(nuevoFormulario.elements, ev.target.parentElement);
  }

  if(ev.target.matches('#buttonCancel')){
        hideUnhideButtons(true);
  }

  if(ev.target.matches('#buttonDelete')){
      console.log('Dentro de script, delete button');
    let idToDelete = nuevoFormulario.elements.idForm.value;
    deleteEntity(idToDelete);
    console.log('Dentro de delete');
    toggleSpinner();
    myLocalData = getLocalStorageData(Anuncio_Autos.getMainKey());

      setTimeout(() => {
          updateTable(myLocalData);
          toggleSpinner();
          hideUnhideButtons(true);
      }, 3000);

      nuevoFormulario.reset();
  }
});

nuevoFormulario.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const myData = myForm(nuevoFormulario.elements);
    if(myData.id === ''){
        createEntity(myData);
    }else{
        updateEntity(myData);
      }
    toggleSpinner();

    myLocalData = getLocalStorageData(Anuncio_Autos.getMainKey());

    setTimeout(() => {
        updateTable(myLocalData);
        toggleSpinner();
    }, 3000);

    hideUnhideButtons(true);
    nuevoFormulario.reset();
});

for (let i = 0; i < controles.length; i++)
{
  const control = controles.item(i);
  if (control.matches("input")) 
  {
    if (control.matches("[type=text]" || "[type=number]")) 
    {
      control.addEventListener("blur", validarCampoVacio);
    } 
  }
}