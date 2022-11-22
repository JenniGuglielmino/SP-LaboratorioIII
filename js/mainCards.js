import Anuncio_Autos from "./anuncio_autos.js"
import { getLocalStorageData } from "./localStorage.js";

var localData;

window.addEventListener("load", () => {
    localData = getLocalStorageData(Anuncio_Autos.getMainKey());
    console.log(localData);

    localData.forEach(item => {
        createCards(item);
    });
});

function createCards(item) {
    const article = document.querySelector("#articles");
    const div = document.createElement("div");
    div.className = "anuncios";

    const titulo = document.createElement("h2");
    titulo.style.textAlign= "left";
    const descripcion = document.createElement("h5");
    const precio = document.createElement("p");
    precio.id = "precio";
    precio.style.color= "green";

    const puertas = document.createElement("h6");
    puertas.style.display = "block";
    puertas.style.marginTop = "5px";

    const kms = document.createElement("h6");
    kms.style.display = "block";

    const potencia = document.createElement("h6");
    potencia.style.display = "block";
    
    const transaccion = document.createElement("h3");
    transaccion.style.display = "block";
    transaccion.style.backgroundColor = "orange";    
    transaccion.style.textAlign = "center";

    
    titulo.innerHTML = item.titulo;
    descripcion.innerHTML = item.descripcion;
    precio.innerHTML = "$" + item.precio;
    transaccion.innerHTML = item.transaccion;
    puertas.innerHTML = "Cantidad de puertas: " + item.puertas;
    kms.innerHTML = "KMS: " + item.kms;
    potencia.innerHTML = "Potencia: " + item.potencia;
    div.appendChild(titulo);
    div.appendChild(descripcion);
    div.appendChild(precio);
    div.appendChild(transaccion);
    div.appendChild(puertas);
    div.appendChild(kms);
    div.appendChild(potencia);

    article.appendChild(div);
}