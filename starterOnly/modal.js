function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// Constante bouton ouverture formulaire - "je m'inscris".
const modalBtn = document.querySelectorAll(".modal-btn");



// OUVERTURE DU FORMULAIRE 
// Constante formulaire.
const modalbg = document.querySelector(".bground");
// launch modal form - fonction d'ouverture du formulaire
function launchModal() { 
  modalbg.style.display = "block";
};
/* launchModal event */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// 1 - TODO : FERMER LA MODALE
// Constante bouton fermeture formulaire.
const closeBtn = document.querySelectorAll(".close");
// close modal form - fonction de fermeture du formulaire
function closeModal() { 
  modalbg.style.display = "none";
};
/* closeModal event  */
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// 2 - TODO : IMPLEMENTER ENTREES DU FORMULAIRE
// 3 - AJOUTER VALIDATION OU MESSAGE D'ERREUR
// Constante div contenant chaque champs formulaire.
const formData = document.querySelectorAll(".formData");
// Déclaration des variables
let fieldsetForm = document.getElementsByClassName("fieldsetForm");
let fieldsetValidate = document.getElementById("fieldsetValidate");
let fieldsetBtn = document.getElementById("btnsubmit");

// LE CHAMP PRENOM A UN MINIMUM DE 2 CARACTERES / N'EST PAS VIDE.
// Constante champs du prénom.
let userFirstName = document.getElementById("firstName");
// Fonction de test du prénom
function testFirstName() { 
  if( userFirstName.value.length <= 2 ) {
    userFirstName.parentElement.setAttribute("data-error", "Veuillez entrer plus de 2 caractères");
    userFirstName.parentElement.setAttribute("data-error-visible", true);
    console.log("prénom FALSE");
    //return false;
  } else {
    userFirstName.parentElement.removeAttribute("data-error");
    userFirstName.parentElement.removeAttribute("data-error-visible", true);
    console.log("prénom TRUE");
    // disparition du formulaire
  document.fieldsetForm.removeAttribute("visibility","hidden");  
// apparition du message de validation
  fieldsetValidate.display = "block";
    //return true;
  }
};
// EventListener Prénom .
userFirstName.addEventListener('change', function(e) {
  testFirstName();
});

// LE CHAMP NOM A UN MINIMUM DE 2 CARACTERES / N'EST PAS VIDE.
// Constante champs du nom.
let userLastName = document.getElementById("lastName");
// Fonction de test du nom
function testLastName() { 
  if( userLastName.value.length <= 2 ) {
    userLastName.parentElement.setAttribute("data-error", "Veuillez entrer plus de 2 caractères");
    userLastName.parentElement.setAttribute("data-error-visible", true);
    console.log("nom FALSE");
    //return false;
  } else {
    userLastName.parentElement.removeAttribute("data-error");
    userLastName.parentElement.removeAttribute("data-error-visible", true);
    console.log("nom TRUE");
    //return true;
  }
};
// EventListener nom .
userLastName.addEventListener('change', function(e) {
  testLastName();
});

// L'ADRESSE ELECTRONIQUE EST VALIDE
//Constante champs du mail.
let userEmail = document.getElementById("email");
// Fonction de test type email.
function checkEmail() {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(userEmail.value) == false) {
    userEmail.parentElement.setAttribute("data-error", "Veuillez entrer votre email correctement");
    userEmail.parentElement.setAttribute("data-error-visible", true);
    console.log("mail FALSE");
    //return false;
  } else {
    userEmail.parentElement.removeAttribute("data-error");
    userEmail.parentElement.removeAttribute("data-error-visible", true);
    console.log("mail TRUE");
    //return true;
  }
};
// EventListener mail.
userEmail.addEventListener('change', function(e) {
  checkEmail();
});











// OPTIONNEL / CHECKER LE FORMAT DE LA DATE DE NAISSANCE
// A CORRIGER
// Constante champs de date de naissance.
let birthDate= document.getElementById("birthdate");
// Fonction de test type date de naissance.
function checkbirthDate() {
  var regexBirthDate = /^[0-3]{1}[0-9]{1}[\/]{1}[0|1]{1}[0-9]{1}[\/]{1}[1-2]{1}[0|1|9]{1}[0-9]{2}$/;
  if(regexBirthDate.test(birthDate.value) == false ) {
    birthDate.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance correctement");
    birthDate.parentElement.setAttribute("data-error-visible", true);
    console.log("birthdate FALSE");
    return false;
  } else {
    birthDate.parentElement.removeAttribute("data-error");
    birthDate.parentElement.removeAttribute("data-error-visible", true);
    console.log("birthdate TRUE");
    return true;
  }
};
// EventListener date de naissance.
birthDate.addEventListener('change', function(e) {
  checkbirthDate();
});












// POUR LE NOMBRE DE CONCOURS UNE VALEUR NUMERIQUE EST SAISIE
// Constante champs de quantité de tournoi.
let quantity = document.getElementById("quantity");
// fonction de vérification de la quantité
function testQuantity() { 
  if( quantity.value == "") {
    quantity.parentElement.setAttribute("data-error", "Veuillez entrer une quantité");
    quantity.parentElement.setAttribute("data-error-visible", true);
    console.log("quantity FALSE");
    return false;
  } else {
    quantity.parentElement.removeAttribute("data-error");
    quantity.parentElement.removeAttribute("data-error-visible", true);
    console.log("quantity TRUE");
    return true;
  }
};
// EventListener quantité de tournoi.
quantity.addEventListener('change', function(e) {
  testQuantity();
});












// UN BOUTON RADIO EST SELECTIONNE
// Constantes des locations.
let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");
let location4 = document.getElementById("location4");
let location5 = document.getElementById("location2");
let location6 = document.getElementById("location6");

function getLocation() {
  if( location1.checked == false ){

  }
  else if( location1.checked == false ){

  }
  else if( location1.checked == false ){

  }
  else if( location1.checked == false ){

  }
  else if( location1.checked == false ){

  }
  else if( location1.checked == false ){

  }
  else {

  }
}





// LA CASE DES CONDITIONS GENERALES EST COCHEE, L'AUTRE CASE EST FACULTATIVE / PEUT ETRE LAISSEE DECOCHEE
// Constante checkbox conditions.
let acceptConditions = document.getElementById("checkbox1");
function checkConditions() {
  if( acceptConditions.checked == false ) {
    acceptConditions.parentElement.setAttribute("data-error", "Veuillez accepter les conditions");
    acceptConditions.parentElement.setAttribute("data-error-visible", true);
    console.log("conditions générales FALSE")
  }
  else {
    acceptConditions.parentElement.removeAttribute("data-error", "Veuillez accepter les conditions");
    acceptConditions.parentElement.removeAttribute("data-error-visible", true);
    console.log("conditions générales TRUE")
  }
}
// EventListener checkbox conditions.
acceptConditions.addEventListener('change', function(e) {
  checkConditions();
});













// CONSERVER LES DONNEES DU FORMULAIRE (NE PAS EFFACER LE FORMULAIRE) LORSQU'IL NE PASSE PAS LA VLAIDATION












