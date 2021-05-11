//1. connecter les boutons avec le compteur

const buttonPlus        = document.querySelector('#boutonPlus'); 
const buttonMoins       = document.querySelector('#boutonMoins'); 
const compteur          = document.querySelector('#compteur');
const reset             = document.querySelector('#reset');
const zoneClick         = document.querySelector('#zone-de-clic');
const valeurDec         = document.querySelector('#valeur-dec')
const valeurInc         = document.querySelector('#valeur-inc')
const limiteHaute       = document.querySelector('#limite-haute');
const limiteBasse       = document.querySelector('#limite-basse');
const notification      = document.querySelector('#notification');
const notificationTexte = document.querySelector('#notification-texte');

  let compteurClick = 0; 

  function afficherNotification (message) {
    notificationTexte.textContent = message;  
    notification.classList.add('afficher');
    setTimeout(function() { 
    notification.classList.remove('afficher')}, 2000); 

    //compteur.classList.add('limite-atteinte');      

  }

  function compteurMod(valeurCompteur){
  //compteurClick= compteurClick+Number(valeurInc.value);
  compteurClick=valeurCompteur;
  if(compteurClick >= limiteHaute.value){
    compteurClick = Number(limiteHaute.value); //"Number" pour eviter la concatenation
    afficherNotification('Limite haute atteinte');  
    }

  //compteurClick=compteurClick-valeurDec.value; //pas besoin de convertir en Number, "-" ne concatene pas
    if(compteurClick <= limiteBasse.value){
    compteurClick = Number(limiteBasse.value); 
    afficherNotification("Limite basse atteinte");  }

    /* if(compteurClick < limiteHaute && compteurClick > limiteBasse){ 
      compteur.classList.remove('limite-atteinte');
     } */ //pour enlever le rouge du compteur si on applique une classe pour le compteur

   compteur.textContent= compteurClick;  

  };

  function incrementation(){
    compteurMod(compteurClick+Number(valeurInc.value));
    }

  function decrementation(){
    compteurMod(compteurClick-valeurDec.value);
  }

  reset.addEventListener('click', function(){
  compteurClick= 0;
  compteur.textContent= compteurClick; 
  }); 

  buttonPlus.addEventListener('click', incrementation); 
  buttonMoins.addEventListener('click', decrementation); 
  zoneClick.addEventListener('click', incrementation);
  zoneClick.addEventListener('contextmenu',function(e){
    e.preventDefault(e); //pour desactiver le menu par defaut du click droit 
    decrementation();
  });

