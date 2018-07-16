// Ce fichier est en jQuery

/*---------------------------------------------------
Document ready :
Les deux lignes suivantes ont la meme sénification : exécuter le code js après avoir chargé le code html. Par conséquence, le lien vers la page js peut se faire n'importe où dans la page html ( dans le <head< ou avant la fermeture de <body>).

$(function(){
    // ici vous mettez tout votre code jQuery
});

ou encore, autre syntaxe : 

$(document).ready(function(){
    // ici vous mettez tout votre code jQuery
});
------------------------------------------------------
*/ 

$ (function(){ // ce code s'executera une fois le document html totalement chargé.

    //-------------------
    // Fonction principale du jQuery, allias $, sélecteur et événement :
    $('#monBouton').click(function() {  // sélectionne la balise #monBouton et au clic appelle la fonction anonyme qui suit :
        $('#carre').hide();  // sélectionne la balise #monBouton et l'efface
    });


    jQuery('#monBouton').click(function() {  
        jQuery('#carre').hide();  
    }); // en realité le dolar remplace le mot jQuery dont il est un alias. Les deux font la même chose : il créent un OBJET jQuery


    $('#carre').click (function () {  // sélectionne la balise #carre et au clic => sélectionne toutes les balises h3 et les efface ( sans écrire de boucle).
        $ ('h3').hide ();
    });

    // Le contraire de hide() c'est show() :
    $ ('.photo').dblclick(function (){  // sélectionne la balise classe "photo et au bouble-clic => sélectionne la balise #carre et l'affiche en 1000 ms (=1s")
        $('#carre').show(1000);    // hide() et show() peuvent argument : une durée en ms, ou encore 'slow ou 'fast'   
    });
    // pour alterner hide() et show() automatiquement : toggle()
    $('#interrupteur').click(function(){
     $('#on-off').toggle();
    });


    //-------------------------------------
    // on() équivalent de addEventListener,et son contraire  off() :
    $('#monBouton').on('click',function(){
        alert('Déplacement de la méthode on()');
    });  // on() permet d'associer un événement à un élément comme le ferait un addEventListener() en js "pur". la seul différence entre la syntaxe ligne 22 et cell-ci réside dans le fait que cette derniere marche aussi avec les éléments crées dynamiquement (= ajouter par le jQuery).

    $('#monBouton').off('click');  // En ajoutant cette ligne on dissocie les clics de l'élément #monBouton : les clics précédemment liés au bouton ne fonctionne plus ! C'est un moyen simple pour supprimer un évènement.

    //--------------------------------------
    // Evenement hover, modifier du CSS depuis jQuery :
    $('#vert').hover(
        function(){
            $('#rouge').css({
                width : '300px',
                'background-color' : 'yellow'
            });
        },

        function(){
            $('#bleu').css({
                width : '300px',
                'background-color' : 'yellow'
            });

        });
    // l'evenement hover est une combinaison de mouseover et mouseout en js : il posède 2 fonctions anonymes qui s'exécutent l'une quand on entre, l'autre quand on sort de l 'élément.
    // la méthode css() permet de modifier des propriétés css écrites dans un objet : on les met entre des {} et sont séparées par une ",". Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes.


    //-------------------------------
    //Récupérer ou modifier la valeur d'un input avec val() :
    $('#mdp1').change(function(){
        var texte = $('#mdp1').val();// val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)
        
        $('#mdp2').val(texte);  // '.val()' : c'est "copie-coller"  // val(argument) permet de changer la valeur du champ #mdp2 (setter)
    });



//-----------------------

// Le mot clé this :

// this est nécessaire lorsqu'on sélectionne plusieurs éléments simultanément et qu'on a besoin d'en simuler un en particulier :

$('input').focus(function(){

    $(this).css({ border :' 2px solid green' });   // this se refère à l'input sur lequel je suis en focus précisément sans sélectionner l'autre
 
 });
 $('input').blur(function(){
 
    $(this).css({ border :''});     // avec la méthode css() je remets la bordure à son état initial (correspondant au string vide '') de l'input duquel je viens de sortir (=this)
 
 });//-----------------------
 
 // Accéder aux propriété CSS avec css() (complément) :
 
 var position = $('#violet').css('position');console.log('La propriété position du div est : ' + position);    // La méthode css() avec seulement une propriété sous forme de string avec une propriété en argument est ungsetter :  elle fournit la valeur de la propriété spécifiée,meme si celle-ci n'est pas dans un attribut style ( va chercher y compris dans les feuilles de styles)


 //--------------------------------
 // Accéder aux attributs des balises avec attr() :
 if ( $('.modifAlt').attr('alt') == '' )  { // attr() avec un seul argument est un getter qui permer de recuperer la valeur de l'attribut précisé (ici de alt)
     $ ('.modifAlt').attr('alt','paysage'); // attr() est un setteur il permet de d'attribuer une valeur à un attribut : attr ('attribut', 'valeur') 
 }


 //-------------------------------
 // Modifier le contenu des balises avec text() ou html():

 // html() équivalant à innerHTML :
 $('.texte').eq(0).html('<span>Ceci est un texte ajouter avec la méthode html()</span>');  // les balises html sont interprétées et donc incérées dans le code html. la méthode eq() permet de cibler l'élement dont l'indice est spécifié dans les (), ici la premiere .texte

 // text() équivaut à textContent :
 $('.texte').eq(1).text('<span>Ceci est un texte ajouter avec la méthode text()</span>');  // dans la méthode text() tout est considéré comme du texte brut, y compris les éventuelles balises

 // Note : text() et html() sans argument sont des getters : ils récuperent le contenu de la balise séléctionnée.



 //----------------------------------
 // Ajouter ou retirer une classe (définie dans le CSS) à un élément :

 $('#survol').mouseenter(function(){
     $(this).addClass('rouge');  // ici ajoute la classe 'rouge (prévu dans le css) à l'élément
 });

 $('#survol').mouseleave(function() {  // retire la classe 'rouge de l'élément
     $(this).removeClass('rouge');
 });

 $('#classBleu').click(function(){
     $('#survol').toggleClass('bleu');  // alterne addClass()et remove Class() sur l'élément #survol (différent du bouton #classBleu : on n'utilise donc pas $(this) ! )
 });


 //----------------------------------
 // Parcourir les éléments sélectionnés avec une boucle each() :

 $('h4').each(function(indice) {  // each() parcour tous les h4 et éxecute la fonction pour chacun (=each) d'entre eux. Cette fonction possède un paramètre (=indice) qui correspond à l'indice de l'élément sur lequel la boucle se trouve
    $(this).text('Ce <h4< à pour indice le numéro'+ indice);  // ajoute le texte au h4 sur lequel on se trouveprécisément à chaque tour de boucle (=$(this))


    // on ajoute la classe rouge  aux h4 d'indice pair :

    if (indice % 2 == 0) {  // signifie que indice est pair : on ajoute donc la class "rouge" à chaque élément d'indice pair.
        $(this).addClass('rouge');
    }
 });

 //-------------------------------
 // Les pseudo-sélecteurs spéséfique à jQuery :first, :last, :visible et :hidden  :

 // :visible et :hiden  :
 $('#afficher').click(function(){
     $('#galerie img:hidden').css({ opacity : 0.2});  // séléctionne les images cachées et leur met une opacité de 0.2
     $('#galerie img').show();  // puis on affiche toutes les images (pour voir le résulta).

 });
 
 $('#effacer').click(function(){
     $('#galerie img').hide(); // efface toutes les images selectionnées 
 });

 // :first et :last  :
 $('#afficher-premier').click(function(){
     $('#galerie :first').show(); // sélectionne la premiere image et l'affiche. Marche aussi avec :last pour la derniere. Si vous voulez cibler une image au milieu, utilisez la méthode eq().
     //  $('#afficher-premier').click(function(){
    //     $('#galerie img :last').show();
    // });

    // $('#afficher-premier').click(function(){
    //     $('#galerie img').eq(1).show();
    // });
     // on peut combiner les peudo-sélecteurs :
     console.log($('#galerie img:hidden:first').attr('src'));  // on combine :hidden:first pour afficher la source de la premiere image cachée. Attention à l'ordre, :hidden d'abord puis

 });




}); // fin du document ready (à ne pas suprimer)
