let pass = document.getElementById("pass");
let confirmPass = document.getElementById("passConfirm");
let submitButton = document.getElementById("submitButton");
let passTouched = false;
let confirmPassTouched = false;
let passwordsMatching = false;

const once = {
    once: true
}

function confirmPassStyle() {
    const indicator = document.getElementById("passwordsNoMatch");
    const confirmBox = document.getElementById("passConfirm");
    if (passTouched && confirmPassTouched) {
        if (pass.value !== confirmPass.value) {
            indicator.classList.add("noMatchText");
            indicator.classList.remove("invisible")
            confirmBox.classList.add("noMatchBorder");
            passwordsMatching = false;
        }
        else {
            indicator.classList.add("invisible")
            confirmBox.classList.remove("noMatchBorder");
            passwordsMatching= true;

        }
    }
}

function submitClick(){
    elementList = [document.getElementById("firstNameField"), document.getElementById("lastNameField"), 
    document.getElementById("email"), document.getElementById("phoneNumber"), pass, confirmPass, ];
    elementList.forEach(element => {
        if(element.value === ""){
            element.classList.add("noMatchBorder");
        }
        else{
            element.classList.remove("noMatchBorder");
        }
    });


}


pass.addEventListener('input', () => {
    passTouched = true;
    pass.addEventListener("input", confirmPassStyle);
}, once);
confirmPass.addEventListener('input', () => {
    confirmPassTouched = true;
    confirmPass.addEventListener("input", confirmPassStyle);
}, once);

submitButton.addEventListener("click", submitClick);