var buttonHandler = document.querySelector("#button");
var textHandler = document.querySelector("#inputText");
var outputHandler = document.querySelector("#output");


buttonHandler.addEventListener("click", function() {
    outputHandler.innerText =  textHandler.value;
})