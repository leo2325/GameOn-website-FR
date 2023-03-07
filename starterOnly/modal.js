function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// Constante formulaire.
const modalbg = document.querySelector(".bground");
// Constante bouton ouverture formulaire - "je m'inscris".
const modalBtn = document.querySelectorAll(".modal-btn");
// Constante div contenant chaque champs formulaire.
const formData = document.querySelectorAll(".formData");
// Constante bouton fermeture formulaire.
const closeBtn = document.querySelectorAll(".close");


// 1 - TODO : FERMER LA MODALE
/* launchModal event */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form - fonction d'ouverture du formulaire
function launchModal() { 
  modalbg.style.display = "block";
};
/* closeModal event  */
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form - fonction de fermeture du formulaire
function closeModal() { 
  modalbg.style.display = "none";
};




