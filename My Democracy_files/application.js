var localeObj = {
  appName: "MyDemocracy.ca",
  warningText: "will be coming soon"
};

if(window.location.hostname == "www.mademocratie.ca") {
  localeObj = {
    appName: "Madémocratie.ca",
    warningText: "sera bientôt lancée"
  };
}

document.querySelectorAll('.warning-app-name')[0].innerText = localeObj.appName;
document.querySelectorAll('.warning-text')[0].innerText = localeObj.warningText;

el = document.querySelectorAll('.warning-holder')[0];
var className = 'visible';

setTimeout(function() {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}, 0);
