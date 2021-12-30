var buttonHandler = document.querySelector("#button");
var textHandler = document.querySelector("#inputText");
var outputHandler = document.querySelector("#output");

var url = 'https://api.funtranslations.com/translate/dothraki.json';
// const encoded = encodeURI(url);

function getTranslatedURL(text) {
    return url + "?" +"text=" + text;
}

function errorHandler(error) {
    console.log(error);
    console.log("Server not working!!");
}

function clickHandler() {

    var inputText = textHandler.value;
    

    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(data => {
            var translated = data.contents.translated
            outputHandler.innerText = translated
        })
        .catch(errorHandler)


}

buttonHandler.addEventListener("click", clickHandler)