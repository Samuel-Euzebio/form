document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("form");

    form.addEventListener("submit", validateForm);
});

function validateForm(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let queryTypes = document.querySelector('input[name="query-type"]:checked');
    let message = document.getElementById("message").value;
    let checkbox = document.getElementById("checkbox");

    let valid = true;

    if (firstName.trim() === "") {
        document.getElementById('first-name-error').textContent = "This field is required";
        document.getElementById('first-name').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('first-name-error').textContent = "";
        document.getElementById('first-name').style.borderColor = "";
    }
    
    if(lastName.trim() === "") {
        document.getElementById('last-name-error').textContent = "This field is required";
        document.getElementById('last-name').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('last-name-error').textContent = "";
        document.getElementById('last-name').style.borderColor = "";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(email) || email.trim() === "") {
        document.getElementById('email-error').textContent = "Please enter a valid email address";
        document.getElementById('email').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('email-error').textContent = "";
        document.getElementById('email').style.borderColor = "";
    }
    
    
    if(!queryTypes){
        document.getElementById('query-type-error').textContent = "Please select a query type";
        valid = false;
    } else {
        document.getElementById('query-type-error').textContent = "";
    }

    if(message.trim() === "") {
        document.getElementById('message-error').textContent = "This field is required";
        document.getElementById('message').style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById('message-error').textContent = "";
        document.getElementById('message').style.borderColor = "";
    }

    if (!checkbox.checked) {
        document.getElementById('checkbox-error').textContent = "To submit this form, please consent to being contacted";
        valid = false;
    } else {
        document.getElementById('checkbox-error').textContent = "";
    }

    if(valid === true) {
        form.submit();
    }
}


const queryTypeGeneral = document.getElementById("general-enquiry");
const queryTypeSupport = document.getElementById("support-request");

function selectedLabel() {

    if(queryTypeGeneral.checked) {

        queryTypeGeneral.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
        queryTypeGeneral.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
        queryTypeSupport.parentElement.style.borderColor = "";
        queryTypeSupport.parentElement.style.backgroundColor = "";

    }

    if (queryTypeSupport.checked) {

        queryTypeSupport.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
        queryTypeSupport.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
        queryTypeGeneral.parentElement.style.borderColor = "";
        queryTypeGeneral.parentElement.style.backgroundColor = "";

    }
}


  
