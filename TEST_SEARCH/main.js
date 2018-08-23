let showHiddenBlockError = (errorMessage) => {
    let blockError = document.getElementById('error');
    let blockErrorMessage = document.getElementById('errorRequest');
        blockError.style.display = 'flex';
        blockErrorMessage.textContent = errorMessage;
    let createInput = document.createElement('input');
    blockErrorMessage.appendChild(createInput);
        createInput.type = 'button';
        createInput.value = 'Ok';
        createInput.style.marginTop = '15px';
    createInput.addEventListener('click', () => {
        blockError.style.display = 'none';
    });
};
let checkSearchSystem = (searchSystem, userRequest) => {
    switch(searchSystem) {
        case "not":
            let errorMessage = 'Пожалуйста, укажите поисковую систему!';
            showHiddenBlockError(errorMessage);
            break;
        case "google":
            return 'https://www.google.com/search?q=' + userRequest;
            break;
        case "bing":
            return 'https://www.bing.com/search?q=' + userRequest;
            break;
        case "ask":
            return 'https://uk.ask.com/web?q=' + userRequest;
            break;
    };
};
let validateSearch = (searchSystem, userRequest, blockError) => {
    let pattern = ! /\S/.test(userRequest);// true, если в строке нет "не пробелов"
    if(userRequest == "" || pattern == true) {
        let errorMessage = 'Пожалуйста, введите поисковый запрос!';
        showHiddenBlockError(errorMessage);
    } else {
        return checkSearchSystem(searchSystem, userRequest, blockError);
    }
};
let sendRequest = () => {
    let searchSystem = document.getElementById('select').value;
    let userRequest = document.getElementById('blok_searchRequest').value;
    let requestLink = validateSearch(searchSystem, userRequest);
    if(requestLink !== undefined) {
        window.open(requestLink);
    }
};
let buttonAction =() => {
    let button = document.getElementById("bt_sendRequest");
    button.addEventListener('click', sendRequest);
};
buttonAction();