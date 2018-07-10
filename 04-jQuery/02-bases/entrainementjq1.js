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



}); // fin du document ready (à ne pas suprimer)
