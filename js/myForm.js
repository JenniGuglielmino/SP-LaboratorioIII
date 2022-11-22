
import Anuncio_Autos from "./anuncio_autos.js";

export function myForm(userInput){
    const myAnuncio = new Anuncio_Autos(
        userInput.idForm.value,
        userInput.titulo.value,
        userInput.transaccion.value,
        userInput.descripcion.value,
        userInput.precio.value,
        userInput.puertas.value,
        userInput.kms.value,
        userInput.potencia.value,
    );

    return myAnuncio;
}

export function updateForm(userInput, tr){
    userInput.idForm.value = tr.id;
    userInput.titulo.value = tr.children[0].textContent;
    userInput.transaccion.value = tr.children[1].textContent;
    userInput.descripcion.value = tr.children[2].textContent;
    userInput.precio.value = tr.children[3].textContent;
    userInput.puertas.value = tr.children[4].textContent;
    userInput.kms.value = tr.children[5].textContent;
    userInput.potencia.value = tr.children[6].textContent;
}

export function hideUnhideButtons(condition){
    if(condition){
        document.querySelector('#id').value = '';
        document.querySelector('#buttonSubmit').classList.remove('hidden');
        document.querySelector('#buttonModify').classList.add('hidden');
        document.querySelector('#buttonDelete').classList.add('hidden');
    }else{
        document.querySelector('#buttonSubmit').classList.add('hidden');
        document.querySelector('#buttonModify').classList.remove('hidden');
        document.querySelector('#buttonDelete').classList.remove('hidden');
    }
}