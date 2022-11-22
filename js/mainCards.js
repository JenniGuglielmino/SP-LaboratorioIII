import { getObjectsFetchForCards } from "./Read.js";

export const createMainCards = () => {
    const article = document.querySelector("#articles");
    getObjectsFetchForCards((data) => {
        console.log("createMainCards", data);
        if(article != null) {
            data.forEach(item => {
                article.appendChild(createCards(item));
            });
        }
    });
}

window.addEventListener("load", () => {
        createMainCards();
});

const createMainDiv = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "cards col-md-4 border border-primary p-200");
    div.setAttribute("style", "width: 18rem;");
    return div;
}

const createDivCardBody = () => {
    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");
    return divCardBody;
}

const createTitulo = (item) => {
    const titulo = document.createElement("h5");
    titulo.setAttribute("class", "card-title");
    titulo.innerHTML = item.titulo;
    return titulo;
}

const createDescripcion = (item) => {
    const descripcion = document.createElement("p");
    descripcion.setAttribute("class", "card-text");
    descripcion.innerHTML = item.descripcion;
    return descripcion;
}

const createPrecio = (item) => {
    const precio = document.createElement("p");
    precio.setAttribute("class", "card-text");
    precio.id = "price";
    precio.innerHTML = "$" + item.precio;
    return precio;
}

const createPartsParagraph = (item) => {
    let doors = document.createElement("p");
    doors.style.display = "inline";
    doors.innerHTML = item.puertas;
    return doors;
}

const createIcon = (path) => {
    let doorsIcon = document.createElement("img");
    doorsIcon.src = `${path}`;
    doorsIcon.style.margin = "5px";
    doorsIcon.style.width = "20px";
    doorsIcon.style.height = "20px"
    return doorsIcon;
}

function createCards(item) {
    const div = createMainDiv();
    const divCardBody = createDivCardBody();
    divCardBody.appendChild(createTitulo(item));
    divCardBody.appendChild(createDescripcion(item));
    divCardBody.appendChild(createPrecio(item));
    divCardBody.appendChild(createIcon("./src/noun-doors-car-2391626.png"));
    divCardBody.appendChild(createPartsParagraph(item));
    divCardBody.appendChild(createIcon("./src/noun-speed-meter-5153180.png"));
    divCardBody.appendChild(createPartsParagraph(item));
    divCardBody.appendChild(createIcon("./src/noun-motor-2160938.png"));
    divCardBody.appendChild(createPartsParagraph(item));
    div.appendChild(divCardBody);
    
    return div;
}