
import Anuncio_Autos from "./anuncio_autos.js";
import { getLocalStorageData, setLocalStorageData } from "./localStorage.js";

export function createEntity(newEntity) {
    console.log("createEntity", newEntity);
    let entities = getLocalStorageData(Anuncio_Autos.getMainKey());
    if(!entities) {
        newEntity.id = 1;
    }else {
        newEntity.id = entities.length + 1;
    }
    entities.push(newEntity);
    setLocalStorageData(Anuncio_Autos.getMainKey(), entities);
    alert('Anuncio creado con exito!');
    document.getElementById('dynamicTable').scrollIntoView({behavior: "smooth", block: "start"});
    document.location.reload(true)
}

export function updateEntity(entity) {
    console.log("updateEntity", entity);
    let entities = getLocalStorageData(Anuncio_Autos.getMainKey());
    let index = entities.findIndex(e => e.id == entity.id);
    entities[index] = entity;
    setLocalStorageData(Anuncio_Autos.getMainKey(), entities);
    alert('Anuncio modificado con exito!');
    document.getElementById('dynamicTable').scrollIntoView({behavior: "smooth", block: "start"});
    document.location.reload(true)
}


export function deleteEntity(id) {
    console.log("deleteEntity", id);
    let entities = getLocalStorageData(Anuncio_Autos.getMainKey());
    let index = entities.findIndex(e => e.id == id);
    console.log('index', index);
    entities.splice(index, 1);
    setLocalStorageData(Anuncio_Autos.getMainKey(), entities);
    alert('Anuncio eliminado con exito!');
    document.location.reload(true)
    document.getElementById('dynamicTable').scrollIntoView({behavior: "smooth", block: "start"});
    document.location.reload(true)
}
