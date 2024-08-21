let nameError = document.querySelector("#nameErr");
let phoneError = document.querySelector("#phoneErr");
let emailError = document.querySelector("#emailErr");
let messageError = document.querySelector("#mssgErr");
let submitError = document.querySelector("#submitErr");
let nameBox = document.querySelector("#fullnameInp");
let phoneBox = document.querySelector("#phoneInp");
let emailBox = document.querySelector("#emailInp");
let mssgBox = document.querySelector("#mssgInp");
let submitBtn = document.querySelector("#submitBtn");



function validateName() {
    nameBox.addEventListener("input", function () {
        const name = document.querySelector("#fullnameInp").value;

        if (name.length == 0) {
            nameError.innerHTML = "Name is required";
            nameError.style.color = 'red';
            return false;
        }
        if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
            nameError.innerHTML = "Write Full Name";
            nameError.style.color = 'red';
            return false;
        }
        nameError.innerHTML = 'Valid';
        nameError.style.color = 'green';
        // setInterval(() => {
        //     if (nameError.innerHTML == "Valid") {
        //         nameError.style.color = 'green';
        //     } else {
        //         nameError.style.color = 'red'
        //     }
        // }, 100);
        return true;
    });
    return true;

}

function validatePhone() {
    phoneBox.addEventListener("input", function () {
        const phone = phoneBox.value;

        if (phone.length == 0) {
            phoneError.innerHTML = "Please enter phone number";
            phoneError.style.color = 'red';
            return false;
        }
        if (phone.length !== 10) {
            phoneError.innerHTML = "Number should be 10 digits"
            phoneError.style.color = 'red';
            return false;
        }
        if (!phone.match(/^[0-9]{10}$/)) {
            phoneError.innerHTML = "Phone no. is required"
            phoneError.style.color = 'red';
            return false;
        }

        phoneError.innerHTML = "Valid";
        phoneError.style.color = 'green';
        return true;
    });
    return true;
}

function validateEmail() {
    emailBox.addEventListener("input", function () {
        const email = emailBox.value;

        if (email.length === 0) {
            emailError.innerHTML = "Email is required"
            emailError.style.color = "red";
            return false;
        }
        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )) {
            emailError.innerHTML = "Email is invalid"
            emailError.style.color = "red";
            return false;
        }

        emailError.innerHTML = "Valid"
        emailError.style.color = "green";
        return true;
    });
    return true;
}

function validateMssg() {
    mssgBox.addEventListener("input", function (){
        let message = mssgBox.value;
        let required = 30;
        let left = required - message.length;
        console.log("working");
        

        if (left > 0) {
            messageError.innerHTML = left + `more char. left`
            messageError.style.color = "red";
            return false;
        }

        messageError.innerHTML = "Valid"
        messageError.style.color = "green";
        return true;
    });
    return true;
}

function validateForm() {
    submitBtn.addEventListener("click", function (e){
        e.preventDefault();
        if (!validateEmail() || !validateMssg() || !validateName() || !validatePhone()) {
            submitError.style.display = "block";
            submitError.innerHTML = "Please fix the error:"
            setTimeout(() => {
                submitError.style.display = "none";
            }, 3000);
            return false;   
        }
        submitError.innerHTML = "Submited";
        submitError.style.color = "green";
        return true;
    })
    return true;

}

validateName();
validatePhone();
validateEmail();
validateMssg();
validateForm();