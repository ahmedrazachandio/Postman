// Ahmed Raza 
console.log("Post Master");
// Utility Functions
// 1. Utility function to get Dom element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}


// Initialize no of parameters
let addedParamsCount = 0;

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
    let string = ` <div class="form row my-2">
                        <label for="url" class="form-label col-sm-2 col-form-label">Parameter ${addedParamsCount +2}</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="parameterKey1" placeholder="Enter Parameter ${addedParamsCount +2} Key">
                        </div>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="parameterValue${addedParamsCount +2}" placeholder="Enter Parameter ${addedParamsCount +2} Value">
                        </div>
                        <button class="btn btn-primary col-sm-1 deleteParam" id="deleteParam">-</button>
                    </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
});
    //Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementByClassName('deleteParam');
    for (item of deleteParam){
        item.addEventListener('click', (e) =>{
            e.target.paramElement.remove();
        })
    }




    addedParamsCount ++;
    


