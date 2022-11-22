import { ToggleSpinner } from "./mySpinner.js";
import {URL} from "./myUrl.js";


let createObjectFetch = function (myObject) {
    let xhrPost = new XMLHttpRequest();
    xhrPost.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 201) {
        console.log(this.responseText);
      }
    };

    xhrPost.open("POST", URL);
    xhrPost.setRequestHeader("Content-type", "application/json");
    xhrPost.send(JSON.stringify(myObject));
    ToggleSpinner(false);
  };

export {createObjectFetch};