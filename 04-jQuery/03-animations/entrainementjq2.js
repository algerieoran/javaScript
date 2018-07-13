// les animations jQuery

$(function(){
//Déclaration d'une fonction callback qui annonce la fin d'une animation (on s'en servira plus loin) :
function finAnim(){
    alert('Animation finie !');
}

//---------------------------------
// Les Animations FADE : fadeIn(), fadeOut(), fadeToggle et fadeTo() :
$('#fadein').click(function(){
    $('#rouge').fadeIn();  // fait apparetre un élément en fondu (en jouant sur la opacité) pendant la durée spécifiée en ms. Sans argument, jQuery prend une valeur par défaut.
    $('#bleu').fadeIn(2000); // même effet en 2s.
    $('#vert').fadeIn(1000).delay(1000).fadeOut(1000,finAnim);// on appelle la fonction callback finanim à la fin du fadeOut(). Attention pas de () sinon elle s'éxecute sans attendre l'ordre du fadeOut.
});

// Au clic sur le bouton #fadeout, l'image #imageDisp disparait en fondu en 1s :
$('#fadeout').click(function(){
    $('#imageDisp').fadeOut(1000);
});

// Alterner fadeIn() et fadeOut() avec fadToggle() :
$('#interr').click(function(){
    $('#black').fadeToggle(1000); // alterne fadeIn()et fadeOut () en 1s.
});

// fadeTo() :
$('#exo1').click(function(){
    $('#orange').fadeTo(2000,0.2);
    $('#violet').fadeTo(2000,0.5); // fait une transition jusqu'à l'opacité indiquée en 2s.
});



// Les animation SLIDE : slideDown(), slideUp() et slideToggle() :
$('#barre').click(function(){
   // $('#rideau').slideDown(1000).delay(2000).slideUp(1000);  // fait apparaitre l'élément avec un mouvement de glicement vers le bas. POur allez vers le haut : slideUp().

   $('#rideau').stop().slideToggle(1000);  // stop()prmet d'arreter une animation en cours l'orsqu'on clique avant son exécution totale (sinon les animations s'exécutent autant de fois que de clics), et enchaine sur l'animation suivante.
});

//------------------------------------------
//Les animations ANIMATE :
// les animations de type ANIMATE ajissent sur les propriétés CSS numériques telles que le positionnement top, right, left bottom, ou encore les tailles, l'opacité, etc. comme per défaut les éléments HTML ont une position "static" en CSS, nous sommes obligés de leur mettre une position "relative" ou "absolute" pour pouvoir les déplacer avec animate().

// Animation 1 : une animation simple :
$('#anim1').click(function(){
    $('#un').animate( { top : '-200px' },1000 );  // les propriétés CSS se mettre dans un objet entre "{}" (et entre guillemets si elle contiennent un tiret). -200px est exprimé par rapport à la position d'origine de l'élément . Notez que on est pas obliger de noté "px" car c'est l'unité par défaut.
});

// Animation 2 : 2 propriété CSS dans la même animation :
$('#anim2').click(function(){
    $('#deux').animate( { top : '-150px', left : '100px' },{ duration : 1000, easing : 'linear' });  // on obtient une diagonale entre la position d'origine et la position finale : -150px et 100px sont par rapport à la position d'origine. on peut mettre les options de l'animation dans un second objet entre les accolades "{}". "duration"= durée en ms, "easin" = accélération/ralentissement de l'animation (valeur "linear" ou "swing" dans la version de base de jQuery, sinon utilliser une bibliothèque complémentaire).
});

// Animation 3 : 2 animations consécutives :
$('#anim3').click(function(){
    $('#trois').animate({ top : '+=100px',left : '+=100px' },1000)
              .animate({ top : '-=100px', left : '+=100px' },1000);  // on peut passer un opérateur += ou -= en valeur d'une propriété CSS dans animate(), ce qui poursuit indéfiniment l'animation = variation en relatif par rapport à la derniere position
});

// Animation 4 : animation continue :
function anim4() {
    $('#quatre').animate( {  left : '400px' },3000)
                .animate({ left : '0px'},3000, anim4);  // 0px sénifie 0 par rapport à la position d'origine  = revient du navigateur  ( revient à la position origine). On aurait pu mettre -=400px à la place. In peut mettre une fonction callback dans l'animate(), elle s'exécute une fois l'animation complètement terminée. Ainsi, ici on appelle la fonction elle - même à chaque fin d'animation.
}
$('#anim4').click(anim4);  // on appelle la fonction anim4 lors du clic sur le bouton. Pas de () à celle-ci pour qu'elle attendre l'ordre du click. 



}); //fin du document ready