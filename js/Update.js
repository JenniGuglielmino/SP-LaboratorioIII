import {URL} from "./myUrl.js";
import { ToggleSpinner } from "./mySpinner.js";

 const updateObjectFetch = async (id,object)=>{

    const options  =  {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(object)
    };

    await fetch(URL + "/" + id, options)
    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data)=>{
        alert(`anuncio modificado exitosamente`);
    })
    .catch((error)=>{
        console.error(`Error: ${error.status} : ${error.status}`);
    })
    .finally(()=>{
        ToggleSpinner(false);
    });
};

export { updateObjectFetch };