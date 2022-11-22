export const divSpinner = document.getElementById("spinner");

const getSpinner = () => {
    console.log('Inside spinner function');
    console.log(divSpinner);
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './src/Spinning wheel.gif');
    spinner.setAttribute('alt', 'Spinner');
    divSpinner.appendChild(spinner);
}

const clearSpinner = () => {
    console.log('Clearing spinner.');
    while(divSpinner.hasChildNodes()){
        divSpinner.removeChild(divSpinner.firstChild);
    }
}

export const ToggleSpinner = (bool) => {
    if (bool){
        getSpinner();
    }else{
        clearSpinner();
    }
}