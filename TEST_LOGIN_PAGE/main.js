let createTooltip = (inputElement, elemTooltip, mistake) => {
    elemTooltip.textContent = mistake;

    inputElement.style.borderBottomColor = '#ba1848';
    elemTooltip.style.display = 'block';
}

let showForgotPassword = () => {
    let elemForgotPassword = document.getElementById('forgotPassword');
    let elemMainForm = document.getElementById('mainForm');

    elemForgotPassword.style.display = 'block';
    elemMainForm.style.display = 'none';
}

let showMainForm = () => {
    let elemForgotPassword = document.getElementById('forgotPassword');
    let elemMainForm = document.getElementById('mainForm');

    elemForgotPassword.style.display = 'none';
    elemMainForm.style.display = 'block';
}

let checkEmail = () => {
    let inputElement = document.getElementById('email');
    let elemTooltip = document.getElementById('emailTooltip');
    let inputEmailValue = inputElement.value;
    let pattern = /@/g.test(inputEmailValue);// true, если в строке есть "@";
    let mistake = "Oops! You entered an invalid email";
    if (inputEmailValue == "" || pattern !== true) {
        createTooltip (inputElement, elemTooltip, mistake);
    } else {
        inputElement.style.borderBottomColor = '#21be9a';
        elemTooltip.style.display = 'none';
    }
}

let checkEmailForgotPassword = () => {
    let inputElement = document.getElementById('emailForgotPassword');
    let elemTooltip = document.getElementById('emailTooltipForgotPassword');
    let inputEmailValue = inputElement.value;
    let pattern = /@/g.test(inputEmailValue);// true, если в строке есть "@";
    let mistake = "Oops! You entered an invalid email";
    if (inputEmailValue == "" || pattern !== true) {
        createTooltip (inputElement, elemTooltip, mistake);
    } else {
        inputElement.style.borderBottomColor = '#21be9a';
        elemTooltip.style.display = 'none';
    }
}

let checkPassword = () => {
    let inputElement = document.getElementById('password');
    let elemTooltip = document.getElementById('passwordTooltip');
    let inputPasswordValue = inputElement.value;
    const pass = 'BestIO';
    let mistake = "Oops! You entered an invalid PASSWORD";
    if (inputPasswordValue !== pass) {
        createTooltip (inputElement, elemTooltip, mistake);
    } else {
        inputElement.style.borderBottomColor = 'rgb(84,195,254)';
        elemTooltip.style.display = 'none';
        location.href = 'https://iotechnologies.com/';
    }
}

let logIn = () => {
    checkPassword();
    checkEmail();
}