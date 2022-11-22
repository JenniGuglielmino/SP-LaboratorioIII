
export default function toggleSpinner(){
    const div = document.getElementById('spinnerCont');
    const divAds = document.getElementById('dynamicTable');
    
    if (div.style.display == 'none') {
        div.style.display = 'flex';
        divAds.style.display = 'none';
    }
    else {
        div.style.display = 'none';
        divAds.style.display = 'block';
    }
}