// Ahmed Raza 

console.log("Post Master");
// Hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user click on params hide the json box

let paramsRadio = document.getElementById('paramsRadio');

paramsRadio.addEventListener('click', ()=>{
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';


});


// If the user click on json box hide the params box
