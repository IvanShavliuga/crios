// Created by r8w9

// document.querySelector(".loadingOverlay").style.display = "none";
function id(arg) {
  return document.getElementById(arg);
}

window.onload = function() {
var cors = "https://cors-anywhere.herokuapp.com/";
var sqlUrl = "https://rextester.com/rundotnet/Run";
var link = cors + sqlUrl;

// Infinite text area
var s_height = id('Program').scrollHeight;
id('Program').setAttribute('style','height:'+s_height+'px');


function run() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", link, false);
  
  var formData = new FormData(); 
    
    formData.append("LanguageChoiceWrapper", 16);
    formData.append("EditorChoiceWrapper", 1);
    formData.append("LayoutChoiceWrapper", 1);
    formData.append("Program", id("Program").value);
    formData.append("Privacy", "");
    formData.append("PrivacyUsers", "");
    formData.append("Title", "");
    formData.append("SavedOutput", "");
    formData.append("WholeError", "");
    formData.append("WholeWarning", "");
    formData.append("StatsToSave", "");
    formData.append("CodeGuid", "");
    formData.append("IsInEditMode", "False");
    formData.append("IsLive", "False");
  
  xhr.send(formData);
  
  
  var s = xhr.responseText;
  // Replace all \u003c, e, 26
  s = s.replace(/\\u003c/gi,"<").replace(/\\u003e/gi,">").replace(/\\u0026nbsp;/gi, ">").replace(/\\u0027/gi, ">").replace(/{"Warnings":null,"Errors":null,"Result":"/gi, "\n").replace(/","Stats":"/gi, ">>").replace(/","Files":null}/gi,".").replace(/\\r\\n/g, "\n").replace(/","Files":null,"NotLoggedIn":false}/gi, ".");
  id("sqlResult").innerHTML = s; // (JSON.stringify(s));
}

id("run").addEventListener("click", run);



}; // End of onload
