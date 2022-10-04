
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/pirate.json"

const getTranslationURL = text => {
    return serverURL+"?"+"text="+text;
}

const errorHandler = error => {
    console.log("Error occured", error)
    alert("Something wrong with API call and server, try again after sometimes")
}

btnTranslate.addEventListener("click", () => {
    
     fetch(getTranslationURL(txtInput.value))
     .then(response => response.json())
     .then(json => 
     {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText;
     })
     .catch(errorHandler)
}) 