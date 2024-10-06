export function genericValidation(value, regex, failMessage, id, successMessage = ""){
    //console.log(event.target.value);
    //const regex = /^[0-9]{5,10}$/;
    if(regex.test(value)){
        document.querySelector(`#${id}`).innerText = '';
        document.querySelector(`#${id}`).innerHTML = successMessage;
    }
    else{
        document.querySelector(`#${id}`).innerHTML ='';
        document.querySelector(`#${id}`).innerText = failMessage;
       // document.querySelector(`#${id}`).className = '';
    }
}