var localeObj = {
  logo: 'logo@3x.png',
  warningText: "MyDemocracy.ca will be available soon. To be notified, enter your email below:",
  placeholder: "ex. email@example.com",
  submit: "SUBMIT"
};

if(window.location.hostname == "www.mademocratie.ca") {
  localeObj = {
    logo: 'logo-f-r@3x.png',
    warningText: "MaDemocratie.ca sera bientôt lancée. Si vous aimeriez qu’on vous prévienne lorsque le site sera disponible, inscrivez votre adresse courriel ci-dessous.",
    placeholder: "ex. adresse@exemple.com",
    submit: "ENVOYER"
  };
}

document.querySelectorAll('.warning-text')[0].innerText = localeObj.warningText;
document.querySelectorAll('.warning-logo')[0].src = localeObj.logo;
document.querySelectorAll('.form-text')[0].placeholder = localeObj.placeholder;
document.querySelectorAll('.form-submit')[0].value = localeObj.submit;

el = document.querySelectorAll('.warning-holder')[0];
var className = 'visible';

setTimeout(function() {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}, 0);
