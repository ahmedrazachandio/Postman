// Ahmed Raza 


// Initialize no of parameters
let addedParamsCount = 0;

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
let jsonRadio = document.getElementById('jsonRadio');

jsonRadio.addEventListener('click', ()=>{
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';


});



let addParam = document.getElementById('addParam');

addParam.addEventListener('click', ()=>{
    let params =document.getElementById('params');
    let string = ` <div class="form row">
                        <label for="url" class="form-label col-sm-2 col-form-label">Parameter ${addedParamsCount +2}</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="parameterKey1" placeholder="Enter Parameter ${addedParamsCount +2} Key">
                        </div>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="parameterValue${addedParamsCount +2}" placeholder="Enter Parameter ${addedParamsCount +2} Value">
                        </div>
                        <button class="btn btn-primary col-sm-1" id="addParam">-</button>
                    </div>`;
    addedParamsCount ++;
    


});