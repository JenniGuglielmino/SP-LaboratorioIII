import { URL } from "./myUrl.js";
import { ToggleSpinner } from "./mySpinner.js";

const deleteObjectFetch = function (id) {
        ToggleSpinner(true);
        let xhrPost = new XMLHttpRequest();
        xhrPost.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 201) {
            console.log(this.responseText);
          }
        };
    
        xhrPost.open("DELETE", URL + "/" + id);
        xhrPost.setRequestHeader("Content-type", "application/json");
        xhrPost.send();
        ToggleSpinner(false);
    };

export {deleteObjectFetch};