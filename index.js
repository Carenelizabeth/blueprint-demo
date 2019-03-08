function donateListener(){
    let donateButton = document.getElementsByClassName('button-donate')[0]
    donateButton.addEventListener('click', function(){
        alert("Thanks for Your Support")
    })
}

function formListener(){
    let signupForm = document.getElementsByClassName("js-signup-form")[0];
    signupForm.addEventListener("submit", function(e){
        e.preventDefault();
        saveData();
    })
}

function saveData(){
    let email = document.getElementsByName("email")[0];
    let zipcode = document.getElementsByName("zipcode")[0];
    console.log(email.value);
    console.log(zipcode.value);
    email.value = "";
    zipcode.value = "";
    document.getElementsByClassName("form-inputs")[0].classList.add("hide");
    document.getElementsByClassName("form-complete")[0].classList.remove("hide");
}

donateListener();
formListener();