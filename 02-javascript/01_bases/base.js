// ";" indique la fin de ma instruction
//{ } les structure d'une fonction
//----------------------------------------------------------------------------------------------------------------------------------------------------
// 1- Commentaires
//--------------------

// pour écrire un commentaire sur une seule ligne

/*
por écrire des commentaires sur plusieurs lignes
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------
// 2- Affichage
//--------------------

document.write('mon premier message'); //affichage dans le navigateur

document.write('<h1>Les bases du JavaScript</h1>'); //on peut mettre des balises html, elles sont interprétées est donc insérées dans le html
//toutes les instuctions en js se finissest par un ";". Elles se suivent et elles sont éféctuées les unes à la suite des autres, du HAUT vers le BES du script.

//------
// Les boites de dialogues :
//alert('Salut');  // affiche un message
//confirm('Etes-vous sur ?');  // message avec bouttons de confirmation "ok" ou "annuler"
//prompt('Quel est votre code postal ?');  // message avec champ à remplir

//------------------------------------------------------------------------------------------------------------------------------------------------
// Afficher dans la console :
console.log('Attention aux erreurs de syntaxes dans la console');  //message écrit dans la console de debugage (f12 + onglet console)


//---------------------------------------------------------------------------------------------------------------------------------------
// 3- Variables - déclaration - affectation
//-----------------------------------
document.write('<h2> 3- Variables - déclaration - affectation</h2>');
// Définition : une variable est un espace mémoire dans lequel nous allons stocker une donnée,une valeur. Cette donnée peut etre de n'importe quel type : chiffre, chaine de caractères, une balise html, etc.

// Déclaration d'une variable : 
var maBoite;  //le mot clé var permet de déclarer (= créer) la variable nommé maBoite.

//Règles de nommage des variables : caractères acceptées de a à z, A à Z, 0 à 9 (jamais au début), _(jamais au début ni à la fin). Premier mot en minuscules, puis majuscule à la 1ère lettre de chaque mot.

//----------------------------------------------------------------------------------------------------------------------------------------------
// Afféctation d'une variable :
maBoite = 10;  // on affecte une valeur à une variable avec le signe "=" . maBoite contient donc 10 ( = est un signe d'affectation et no signe d'égalité).

document.write(maBoite);  // on affiche le contenu de la variable en ne mettant pas de quote autour de son nom. Affiche 10

var maBoite = 10;  // on peut déclarer et affécter une variable au même temps (nous retiendons cette écriture)

//-----------------------------------------------------------------------------------------------------------------
monAutreBoite = 'bonjour';  // cette écriture est possible (déclaration sans le mot clé var), mais ce n'est pas conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre"portée des variables")

document.write('<br>');

//------------------------------------------------------------------------------------------------------------------
//Déclarer er affecter plusieurs variables au même temps :
var prenom = 'Sylvie', 
    nom = 'Rober',
    genre ='Féminin';  // un seul var en séparent chaque déclaration par un vérgule, un saut de ligne et une indentation. On termine par un ";"

document.write(prenom);  // affiche Sylvie
document.write('<br>');

//---------------------------------------------------------------------------------------------------------------------
// Cahanger la valeur d'une variable :
prenom = 'Pierre';  // nous cahangons la valeur 'Sylvie' pour la remplacer par la valeur 'Pierre'

document.write(prenom); // affiche Pierre
document.write('<br>');

prenom = nom;  // nous affestons la valeur de la variable nom à la variable prenom autrement dit on remplace "Pierre" par "Robert"

document.write(prenom); // affiche Robert
document.write('<br>');

//---------------------------------------------------------------------------------------------------------------------------
// Ajouter une valeur à la valeur déjà éxistante à la variable :
    var fruit = 'pomme';
        fruit += '  fraise';  // on ajoute la chaine de catactères "fraise" à "pomme" déjà existante dans la variable fuit avec l'opérateur += (sans espace)
    document.write(fruit); // affiche "pomme fraise"
    document.write('<br>');

    //----------------------------------------------------------------------------------------------------------------------
    //Utiliser prompt avec une variable :
    var codePostal = prompt('Quel est votre code postal ?');

    document.write(codePostal); // Affiche le code postal indiqué par l'internaute
    document.write('<br>');


    //-----------------------------------------------------------------------------------------------------------------------------------
    // 4- Types de données 
    //---------------------
    document.write('<h2> 3- Type de données</h2>');

    // Nous commençons par les 3 principaux de données dits primitifs :

    // Les types numériques appelés NUMBER :
    var chiffre = 20;  // Les numbers s'écrivent sans quotes ni guillemets
    // Tous les types numériques sont possibles : entiers, décimaux, positifs, négatifs...

    // Les types chaines de caractères appelés "STRING" :
    var texte = "phrase entre guillemets";
    var apostrophe = 'il faut utiliser le caractère d\'échappement pour les apostrophes dans  des quotes';//AltGR + 8 pour le caractère d'échappement

    //Les quotes ou les guillemets indiquent qu'il s'agit d'un type STRING.

    var numero = '10';  // un chiffre dans des quotes ou des guillemets est interprété comme un STRING

    // Le type booléen (ou boolean) :
    // Le type booléen ne prend que deux valeurs : TRUE ou FALSE
    var choix = true;  // S'écrit SANS quote

    // ----------------------------------------------------------------------------------------------------------------------------------------
    // typeof permet de vérifier le type d'une variable :
    document.write(typeof(chiffre));  // number
    document.write('<br>');

    document.write(typeof(texte));  // string   
    document.write('<br>');

    document.write(typeof(numero));  // string
    document.write('<br>');

    document.write(typeof(choix));  // boolan
    document.write('<br>');

    //----------------------------------------------------------------------------------------------------------------------------------------------------
    // 5- Constante :
    //----------------------
    document.write('<h2> 3-Constante</h2>');

    // Définition : Les constantes sont comme des variables dont la valeur "ne peut pas etre modifiée". Elle permettent de protéger cette valeur nécessaire au bon fonctionnement du script.

    const CHANGE_PAS = 'ma constante impossible à modifier';  // Par convention entre développeurs , on écrit les constantes en majuscules et avec "_" si besoin

    document.write(CHANGE_PAS); // affiche le contenu de la constante
    document.write('<br>');

    //CHANGE_PAS = 'autre valeur';  // erreur bloquante de type invalide assignment to const CHANGE_PAS

    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    // 5- Concaténation :
    //----------------------
    document.write('<h2> Concaténation</h2>');  

    // En JS, on fait suivre des variables et des strings avec le symbole "+". On parle de concaténation.

    var prenom ='Bruce',
        nom = 'Wayne';

    document.write(prenom + ' ' + nom + '<br>'); // concatène la variable prenom avec espace avec la variable nom avec la balise <br>

    var personnage = prenom + ' ' + nom + '<br>';  // on peut concaténer des éléments au sein d'une variable
    document.write(personnage);


    //---------------------------------------------------------------------------------------------------------------------------------------------------------
    // 7- Opérateurs arithmétiques :
    //----------------------
    document.write('<h2> Opérateurs arithmétiques </h2>'); 
    
    var resultat;

    resultat = 10 + 5;  // addition
    resultat = 10 - 5;  // soustraction
    resultat = 10 * 5;  // multiplication
    resultat = 10 / 5;  // divition
    resultat = 3 % 2;  // modulo = reste de la division entière. Si j'ai trois billes réparties sur 3 personnes, il m'en reste 1 seule : 3%2 vaut donc 1 ( modulo de 2 pour vérifier si un chiffre est pair ou impair, modulo de 10 si c'est une dizaine,...) 

    //---------------------------------------------------------------------------------------------------------------------------------------------------------
    // on peut apliquer les opérateurs aux variables :
    var chiffre1 = 10,
        chiffre2 = 5;

    resultat = chiffre1 + chiffre2;  // resultat vaut 15

    var chiffre3 =10;
    chiffre3 = chiffre3 + 5; //15
    chiffre3 = chiffre3 + 5; //20 mais cette syntaxe n'est pas conventionnelle. On utilise la syntaxe suivante :
    chiffre3+= 5; //25  // cette syntaxe fait la même chose que la précédente; mais c'est elle que l'on retiendre. chiffre3 vaut ici 25.

    //Fonctionne avec tous les opérateurs : +=, -=, *=, /= et %=

    //-----------------------------------------------------------------------------------------------------------------------------------------------------
    // Incrémenter et décrémenter :
    var i = 0;
    i += 1;
    i++;  // incrémenter i de +1. i vaut donc 1.
    i--;  // décrémenter i de -1. i vaut donc 0.

    // i++ et ++i ont le meme resultat à la différance près :
    // i++ retourne la valeur de i AVANT d'éffectuer l'opération
    //++i retourne(fourni) la valeur de i APRES avoir effectué l'opération

    var x = 5;
    var y = x++; // y prend la valeur de 5 PUIS passe à 6

    document.write('y vaut '+y + '<br>');//5
    document.write('x vaut '+x + '<br>');//6

    x = 5;
    var z =++x;  // x passe à 6 PUIS prend la valeurde 6
    document.write('z vaut ' +  z + '<br>');//6
    document.write('x vaut '+x +'<br>');//6

    //--------------------------------------------------------------------------------------------------------------------------------------------------------
    // Exercices :
    /*
    L'internaute a acheté 0.8kg de pommes et 0.7kg de poires.
    vous déclarez 4 variables, une qui contient "pommes", une qui contient "poires", une qui contient le poids de pommes et une qui contient le poids des poires.
    Puis vous affichez la phrase "Vous avez acheté des pommes et des poires pour un poids de total de 1.5kg." où les fruits et le poids total sont remplacés par les variables.
    */

    // var fruit1 = "pommes",
    //     fruit2 = "poires",
    //     poid1 = 0.8,
    //     poid2 = 0.7;
    // var poidTotal = poid1 + poid2;

    //     document.write('vous avez acheté des  '+ fruit1 +' et des '+ fruit2 + ' pour un poids total de ' + poidTotal +'kg. <br>');

    
    //-----------------------------------------------------------------Exercice-------------------------------------------------------------------

        // var fruit1 = prompt("Entrez votre premier fruits "),

        // Poidsfruit1 = parseFloat(prompt('Entrez le poids du premier fruits ')),
    
        // fruit2 = prompt('Entrez votre deuxieme fruits '),
    
        // Poidsfruit2 = parseFloat(prompt('Entrez le poids du deuxieme fruits ')),
    
        // totalPoids = Poidsfruit1 + Poidsfruit2;

        // document.write('<p>Vous avez acheté des ' + '<em><mark>'+ fruit1 +'</mark></em>'+ ' et des '+'<em><mark>'+ fruit2 +'</mark></em>'+ '  pour un poids total de :'+ totalPoids + ' <strong>Kg.</strong><p>');


     //-----------------------------------------------------------------------------------------------------------------------------------------------
    // 8- Les conditions :
    //-----------------------------------------------------------------------------------------------------------------------------------------------------
    document.write('<h2> Les condition </h2>');
    
    var a = 10,
        b = 5,
        c = 2;

    //-------------------------------------------------------------------------------------------------------------------------------------------------
    // La condition if/ else :
    if( a > b) {
        // si la condition est évaluée à true , on entre dans les accolades qui suivent :
        document.write('a est supérieur à b <br>');
    } else {
        // sinon...si la condition est évaluée à false, on exécute le else :
        document.write('b est supérieur ou égal à a <br>');
    }


    //-------------------------------------------------------------------------------------------------------------------------------------------
    // if avec AND :
    if( a > b && b > c) {
        //si a est superieur à b ET que dans le meme temps b est superieur à c, on rentre dans les accolades suivant :
        document.write('OK pour les deux conditions <br>');
    }

    //--------------------------------------------------------------------------------------------------------------------------------
    // if avec OR :
    var a = 10,
        b = 5,
        c = 2;

    if( a == 9 || b > c ) {
        // si a est égal (==) à 9 OU b est superieur à c, on rentre dans les accolades qui suivent :
        document.write('OK pour au moin une des deux conditions <br>');
    }


    //--------------------------------------------------------------------------------------------------------------------------------------
    // if...else if
    // si a vaut 8, on exécute ce qui suit :
    if( a == 8){
        document.write('a est égal à 8 <br>');  
    }else if( a != 10){
    // sinon si a est différent de 10, on exécute ce qui suit :
        document.write('a est différent de 10 <br>');
    }else {
        // sinon , c'est que je ne suis tombé ni dans le if, ni dans le else if, je me trouve donc dans ce else :
        document.write('Les deux conditions précédente sont fausses <br>');
    }

    
    // Notes : jamais de () apres un else. Le else n'est pas obligatoire si il est vide. en revanche, aprés un if il y a toujours une condition.


    // L'operateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

    var test = 3 < 1;
    console.log('test vaut : '+ test);  // pour vérifier que test vaut false

    if(!test){
        // Le point d'exclamation est une négation qui inverse le sens du boolean : test seul valant false, !test vaut donc true. La condition finale étant donc évaluée à true, on rentre dans les accolades :
        document.write('On exécute ce code... <br>'); 
    }

    // Conclution : les instructions d'une condition seront toujours exécutées que si la condition renvoie TRUE

    //--------------------------------------------------------------------------------------------------------------------------------------------

//La comparaison avec le triple "===" :

var varA = 1,   //number

varB = '1';   //string    if ( varA == varB ) {

    // varA et varB valent tous les deux 1 en VALEUR: la condition avec "==" est donc vraie. On exécute les accolades qui suivent:
    if (varA==varB){

    document.write('Egalité en valeur uniquement <br>');

} else {

    document.write('Différence en valeur uniquement <br>');



}if ( varA === varB ) {  
    // comparaison en valeur ET en type avec le triple "===". Ici nous avons un string et un nombre, il n'y a donc pas strict égalité entre les 2 variables : on va dans le else 
     document.write('Egalité en valeur ET en type <br>');
} else {

document.write('Différence en valeur OU en type <br>');

}



//------------------------------------------------------------------------------------------------------------------------------------
// 9-Condition dite ternaire
document.write('<h2> Condition dite ternaire </h2>');
// la condition ternaire est une autre syntaxe de la condition if..else
var voiture = 'bmw';

var origine = (voiture == 'bmw' ) ? 'origine allemande <br>' : 'autre origine <br>';
// la condition ternaire s'écrit avec un point d'intérogation "?" qui remplace le "if", et un ":" qui remplace le else
document.write(origine);



//----------------------------------------------------------------------------------------------------------------------------------
// 10- isNaN : is not a Number :
document.write('<h2>isNaN : is not a Number   </h2>');
//NaN pour Not a Number est une valeur utilisée pour représentée une "cantité" qui n'est pas un nombre en JavaScript.
console.log( 2 * 'azerty');

// les opérateurs d'égalité ( == ou ===) ne peuvent pas etre utilisés pour tester si une valeur est NaN. il faut utiliser isNaN() :

var annee = '2018'; // string
if ( isNaN(annee) ) {
    // condition fausse car '2018' est bien un number. on rentre donc dans le else  
   document.write('Ce n\'est pas un number après convention <br>');
} else {
    document.write('C\'est un number après convention <br>');
}

// le contraire ici :
var annee = 'juin 2018'; // string
if ( isNaN(annee) ) {
    // la condition ici est vrais . on rentre donc dans le if ici :
    document.write('Ce n\'est pas un number après convention <br>');
} else {
    document.write('C\'est un number après convention <br>');
}


//-----------------------------------------------------------Exercice---------------------------------------------------------------------------------
// Exercice :
/* Demandez l'age de l'internaite  dans prompt.
Si la réponse est vide (on compare avec des quotes vides SANS espace), on affiche "Vous n'avez pas répondu."
Si la réponse n'est pas un nombre , on affiche "Vous n'avez pas indiqué un nombre."
Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans."où X est l'age donné par l'internaute.
*/

var age = prompt('Quel est votre âge ?');

if ( age == '') {
    document.write('Vous n\'avez pas répondu.');
} else if ( isNaN(age) ) {
    document.write('Vous n\'avez pas indiqué un nombre.');
} else  {
    document.write('Vous avez indiqué avoir ' + age +'  ans.');
}
 //-----------------------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------------------
// 9-Synthèse des opérateurs
document.write('<h2> 9-Synthèse des opérateurs </h2>');
// pour tester des variables entre-elles :
/*
== pour égale en valeur
!= pour différent de valeur

=== pour strictement égale en valeur ET en type
!== pour strictement différent en valeur ET en type

>   pour plus grand que 
<   pour plus petit que
>=  pour superieur ou égale 
<= pour inférieur ou égale 

*/

// les opérateurs logiques :
/*
&&  pour AND
||  pour OR
!   pour NOT (négation)


les opérations efféctuer avec les opérateurs logiques ne donnent que 2 résultats possibles : true ou false.

exemples :
        true && true        => true
        true && false      => false
        false && false      => false

        true || true       => true
        true || false      => true
        false || false     => false

        !true => false
        !false=> true
*/


//------------------------------------------------------------------------------------------------------------------------------------------
// 10-Condition switch
//---------------------------------------------
document.write('<h2>Condition switch </h2>');
// la condition switch est une autre syntaxe pour écrire une condition if ...else , if ...else, lorsque l'on veut comparer une variable à une méltitude de valeurs.

var couleur = 'jaune';

switch (couleur){
    case 'bleu' : // chaque case représente une valeur que peut prendre la variable . si couleur contient 'bleu' ; on utilise le code qui suit ce case :
        document.write('Vous aimez le bleu');
    break;// obligatoire pour quiter la condition exécuté

    case 'rouge' : 
        document.write('Vous aimez le rouge');
    break;

    case 'vert' : 
        document.write('Vous aimez le vert');
    break;
    default :// on tombe dans default par défaut si on n'entre dans aucun case précédent
    document.write('Vous n\'aimez aucune de ces coulers <br>');
}



//------------------------------------------------------------------------------------------------------------------------------------------
// 11-Les boucles
//---------------------------------------------
document.write('<h2>Les boucles </h2>');
// les boucles sont distinés a répéter des lignes de code de façon automatique.

//While :
var i = 0; // on inisialise une variable à 0 pour compter le nombres de boucle

while ( i <= 5 ) { // ici entre parenthèses  se situe la condition d'entrée dans la boucle while. Elle signifien "tant que i est inférieur ou égale à 5"
    document.write ( i + '---' );
    // ....
    i++;// on incrémente i+1. On n'oublie pas d'incrémenter pour ne pas crée une boucle à l'infinie
}

document.write('<hr>');
//-----------------------------------------Exercice---------------------------------------------------------------------------------------------
// sans modifier la condition de la boucle while précédente , vous la compléter pour ne pas afficher les '---' aprés le 5.

var i = 0;  // on n'oublie pas de réinitialiser i sinon il conserve la valeur 6 de la boucle précédente

while ( i <= 5 ) {

    if( i == 5) {
        document.write ( i ); 
    } else {
        document.write ( i + '---' ); 
    }

    i++;
}

document.write('<hr>');


//------------------------
// la boucle for :
// La boucle for est une autre syntaxe de la boucle while 
for ( var i = 0; i <= 5; i++) { // on met dans les parenthèses de for : initialisation de la variable suivi d'un ";", puis la condition d'entrée dans la boucle suivie d'un ";", puis l'incrémentation (décrémentation) NON suivie d'un ";"
    document.write(i + '---');
    //...
}


document.write('<hr>');
//-------------------------------------Exercice-------------------------------------------------------------------------------------------------
// afficher un menu déroulant avec les années de 1900 à 2020. utilisez une boucle FOR.
document.write ('<select>');
    document.write ('<option>1900</option>');
    document.write ('<option>...</option>');
    document.write ('<option>2020</option>');
document.write ('</select>');


document.write('<hr>');


    document.write ('<select>');
        for ( var i = 1900; i <= 2020; i++) {
            document.write ( '<option>' + i + '</option>' );  
    }
    document.write ('</select>');

    document.write('<hr>');
    //----------------------------------------------------------2ème méthode---------------------
    // alternative :
    var affichage = '';// pour contenir toutes las balises html à venir

    affichage += '<select>';
        for ( var i = 1900; i <= 2020; i++) {
            affichage += '<option>' + i + '</option>';  
    }
        affichage += '</select>';
        console.log (affichage);
        document.write (affichage);  // on affiche tout le string qui contient l'ensemble des balises du sélecteur

        // la boucle do..while existe aussi. elle a la particularité de s'executer au moin une fois (correspondant au "do"),puis seulement à la fin on regarde la condition du while pour s'avoir si on retourne dans la boucle ou pas. Exemple d'utilisation : vous posez une question obligatoire à l'internaute ('do'), puis tant qu'il n'a pas correctement répondu ('while'), vous lui reposez la question.

        
        document.write('<hr>');
//------------------------------------------------------------------------------------------------------------------------------------------
// 12-Les fonctions utilisateurs (utilisateurs = développeurs)
//---------------------------------------------
document.write('<h2>Les fonctions utilisateurs </h2>');
// des fontions sont des morceaux de codes encapsulés dans des acolades et portant un nom. Elles sont appelées par leur nom quand on a besoin d'executer tout le code qui s'y trouve.Il est d'usage des fonctions simples qui realises des action unitaires.

// A chaque fois qu'on répete une action, voir s'il n'est pas possible de la mettre dans une fonction : cela s'appelle factoriser son code.

// il existe deux façons de déclarer une fonction en js :
// 1° avec le mot clé function :
function maFonction() {
    //ici tout votre code 
    document.write('<p>Nous avons une journée ensoleillée</p>');
}

// 2° avec le mot clé var :
var maFonction2 = function () {
    //ici tout votre code
    document.write ('<p>Nous avons une chaude journée</p>');
}

// pour qu'une fonction s'exécute, il faut l'appeler :
maFonction(); // on appelle une fonction en écrivant son nom suivi d'une paire de parenthèses
maFonction2(); // en appelant cette fonction, j'exécute le code qui s'y trouve

// par convention nous déclarent toujours une fonction avant de l'exécuter.
document.write('<hr>');
//---------------------------------------------------------------------------------------------------------------------------------------------------
// fonctions avec paramètres
function direBonjour(prenom, nom) { // prenom et nom sont des parametres de la fonction sérarés par une virgule "," et qui attendent une valeur.
    document.write ('<p>Bonjour '+prenom +' '+nom+', comment allez-vous ?</p>');
}
direBonjour('Alice', 'Dupon'); // la valeur "Alice " qui est en premier position va etre afféctée au paramètre prenom.la valeur "dupon " qui est en deuxième position va etre afféctée au paramètre nom. Ainsi la fonction dirBonjour peut afficher un message personnalisé.

//----------------------
function d(param){
    document.write(param+'<br>');
}
d('text de notre fonction');
d('<div class="test">Test de notre fonction</div>');

document.write('<hr>');
//----------------------------------------------------------------------------------------------------------------------------------------------
//Préambule à l'exercice :(introduction à l'exercice)
function meteo(saison) {
    d('Nous sommes en '+ saison + '.'); // nous avons la possibilité de utilisés une autre fonction , ici d(), dans les instructions de cette fonction
}
meteo('été'); 
meteo('printemps'); 

//--------------------------------------------Exercice : -----------------------------------------------------------------
//Réécrivez la fonction précédente dans une fonction exoMeteo, et complétez la pour qu'elle affiche "au printemps", "en été","en autome" ou "en hiver". Dans cet exercice, vous ne modifiez pas le paramètre saison et vous n'en ajoutez pas.




function exoMeteo(saison) {
    var exep = (saison == 'printemps' ) ? 'Nous sommes au ' + saison + '.' : 'Nous sommes en ' + saison + '.';
    d(exep);
}
exoMeteo('été');
exoMeteo('printemps');
exoMeteo('hiver');
exoMeteo('automne');

document.write('<hr>');
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Le mot clé "return" qui permet de sortir une valeur d'une fonction :
function somme(a,b) {
    var resultat = a+b;
    return resultat; // return permet de sortir la valeur de  resultat de la fonction : il retourne la valeur à l'endroit où la fonction est appelée
}

d('La somme de 2 + 4 est égalé à ' +somme(2,4) +'.'); // on récupère ici la valeur de 6 de resultat grâce au return qui trouve dans la fonction somme()

document.write('<hr>');
//------------------------------------------------------------------------------------------------------------------------------------------
// 13-La portée des variables
//---------------------------------------------
document.write('<h2>La portée des variables</h2>');

/* Selon l'endroit et la façon dont une variable est déclarer, elle pourra etre accecible partout dans le script ou uniquement dans une portion limitée du code des fonctions. On parle de portés des variables (scope en anglais).
Une variable déclarée SANS le mot clé var (façon implicite) : elle est accécible PARTOUT dans le script, y compris au sein des fonctions : elle est dite GLOBALE.
Une variable déclaée avec le mot clé var (façon explicite)  : 
                                            - à l'extérieur d'une fonction elle sera GLOBALE, donc accecible partout dans le script, y compris au sein des fonctions
                                            à l'intérieur d'une fonction elle sera LOCALE, donc accecible uniquement dans cette fonction

 */
    
var animal = 'loup'; // globale
function jungle(){
    var animal = 'Tigre';//locale
    return animal;
}         

d(animal); // loup car on est dans l'espace globale et qu'on utilise la variable globale disponible qui vaut loup
d(jungle());// tigre gâce au return qui se trouve à la fin de la fonction : il sort de la valeur tigre de la variable locale de la fonction
d(animal);// loup pour les mêmes raisons que le premier

//--------------------------------------------------------------------------------------
d('<hr>');
var oiseau = 'Aigle';// globale 
function ciel(){
    oiseau='faucon';// globale
    return oiseau;
}
d(oiseau);//Aigle car on utilise la premiere globale disponible qui vaut aigle 
d(ciel());//Faucon grâce au return de la fonction. MAIS en éxecutant celle -ci on a changé le contenu de la variable globale pour y mettre Faucon !
d(oiseau);//Faucon par conséquent la variable oiseau contient désormais Faucon

//-----------------------------------
document.write('<hr>');
//------------------------------------------------------------------------------------------------------------------------------------------
// 14-Les arrays
//---------------------------------------------
document.write('<h2>Les arrays</h2>');
// Un array ou tableau en français, est un objet qui contient plusieurs valeurs, appelées items ou éléments. Chaque élément est accessible au moyen d'un indice (ou index) dont la numérotation commence à partir de 0.


// Déclaration d'un array :
var monTableau = ['Emilie', 'Magalie', 'Zakir', 'Elric', 96]; // déclaration d'un array qui contient des strings et un number (version conventionnelle la plus utilisée).Chaque élément a un indice : Emelie le 0, puis Magalie le 1, et ainsi de suite.

// Accéder a un item (ou élement) de l'array :
d(monTableau [0]);  // affiche l'élement de valeur Emilie

// Remplacer la valeur "Elric" par la valeur "Alphonse"
monTableau[3] = 'Alphonse';// on modifie la valeur positionnée à l'indice 3 pour y mettre Alphonse
d(monTableau[3]);// affiche Alphonse

//Mesurer le nombre d'elements d'un array :
d(monTableau.length);  // affiche 5 correspondant au nombres de l'elements du tableau

// Parcourir un array avec une boucle for
for ( var i = 0; i < monTableau.length; i++) {
    d(monTableau[i]);  // la variable i prend successivement les valeurs de 0 à 4 inclus. monTableau [i] permet donc de parcourir chaque indice du 0 au 4.
}

//---------------------------------------------------------------
document.write('<hr>');
//Array multidimensionnel :
//Un array multidimenssionnel est un tableau qui contient un ou plusieurs d'autres tableaux.

var deuxDimensions = [ ['fraises', 'pommes', 'bananes'], ['tomates', 'carottes', 'courgettes'] ];
d(deuxDimensions[0][2]); // pour accéder à la valeur "bananes", je vais d'abord à l'indice 0 du tableau deuxdimensions, puis à l'intérieur je vais à l'indice 2.
document.write(deuxDimensions[0][2] + 'et des '+deuxDimensions[1][1]); // afiche bananes suivi de carottes


document.write('<hr>');
// ----------------------Exercice------------------------------------------
// créer un array avec les tailles s, m, l et xl. A l'aide d'une boucle for, afficher un menu déroulant avec les tailles provenant de l'array, à l'interieur.

var exerTableau = [ 's','m', 'l','xl'];
for ( i = 0; i < exerTableau.length; i++){
    d(exerTableau);
}

//--------------------------------
document.write('<hr>');

var elem = '';

elem += '<select>';
for ( i = 0; i < exerTableau.length; i++){
    elem += '<option>' + exerTableau[i]+ '</option>';  
}
elem += '</select>';
console.log (elem);
document.write (elem); 
//---------------------------------------
/*d('<hr>');
table2 = [['prenom','nom','date de naissance'], ['email','téléphone','adresse'],['niveau d\'études', 'expériences', 'hobbies']];

var tab = '';
tab +='<select>';

for( i = 0; i <table2.length; i++) {
    tab += '<option>'+ table2[0][2]+'</option>';
}
tab += '<select>';
d(table2 [0][2]);
*/

d('<hr>');
//--------------------------------------------------------------------------------------------------------------------
// ajouter ou suprimer des valeurs au début ou à la fin d'un tableau :
//--------------------------------------------------------------------------

exerTableau.push('xxl'); // ajoute "xxl" à la fin de l'array tailles
console.log(exerTableau);

exerTableau.unshift('xs');  // ajoute "xs" au début de l'array exerTableau
console.log(exerTableau);

// le contraire de push, c'est pop :
exerTableau.pop();//  retir le dernier element de l'array exerTableau
console.log(exerTableau);

// le contraire de unshift, c'est shift :
exerTableau.shift();// retir le premier element de l'array exerTableau
console.log(exerTableau);


//------------------------------------------------------------------------------------------------------------------------

d('<hr>');
//------------------------------------------------------------------------------------------------------------------------------------------
// 15-Les objets
//-------------------------------------------------------------------------------------------------------------------------------------------------
document.write('<h2>Les objets</h2>');

/*
un objet est un esemble de propriétés qui correspondent à l'association d'un nombre et d'une valeur. cette valeur peut etre de n'importe quel type(string, boolean,...)
de plus la valeur de la propriété peut etre une fonction dans, ce cas cette propriété s'appele une méthode(il s'agit simplement d'une fonction dans un objet).

les propriétés et les méthodes d'un objet s'appellent les "membres" de cet objet

*/

// creation d'un objet :
var personnage = {
    nom : 'Tintin',// paire "propriété : valeur" suivie d'une ","
    animal : 'chien',
    amis : ['Haddok', 'Tournesol', 'Dupont & Dupond'],
    age : 35  // par convention pas de vergule "," au dernier element
};// en termine bien l'instruction avec un ";"

// Accéder à la valeur d'un propriété d'un objet :
d(personnage.nom); // affiche Tintin. on accède à une propriété d'un objet en écrivant son nom de l'objet puis un "."puis la propriété

d(personnage['nom']);  // affiche aussi Tintin . On peut utiliser la notation entre [] pour accéder à une propriété d'un objet.

// Remplissage (modification) d'une propeiété :
personnage.animal = 'Milou';  // change la valeur de la propriété  animal pour y mettre "Milou"
//ou encore :
personnage['animal'] = 'Milou';

// pour afficher Tournesole :
d(personnage.amis[1]);   // pour accéder à tournesole on va à la propriété "amis" de personnage avec un ". puis on va à l'indice [1] du tableau qui s'y trouve"
d(personnage['amis'][1]);  // de la meme maniere qu'avec Milou, je peux utiliser la notation entre [] pour accéder à la propriété "amis"

d('<hr>');
//-----------------------------------------------------------------------------------------------
// creation d'un objet avec une méthode :
var maVoiture = {// objet voiture
    marque : 'Mercedes',
    couleur : 'noire',
    motorisation : {
        energie : 'diesel',
        puissence : '110cv',
        garentie : true
    },
    afficherOrigine : function () { // afficherOrigine est une méthode de maVoiture
        document.write('origine allemande <br>');
    }
}; // fin déclaration de objet voiture

// on identifie les méthodes au mot clé function qui permet d'y mettre le code qu'elles doivent exécuter (tout comme une fonction).

d(maVoiture.marque); // affiche Mercedes
d(maVoiture.couleur);
maVoiture.afficherOrigine();  // appel de la méthode afficherOrigine () de l'objet maVoiture écrite avec sa paire de (). Affiche "origine allemande"

d(maVoiture.motorisation.energie);
d(maVoiture.motorisation['energie']);// ces deux syntaxes pour accéder à la propriété energie qui se situe dans la propriété motorisation de l'objet maVoiture. Affiche Diesel

d('<hr>');
///--------------------------------------------------
// la boucle for in :
//-----------------------------------------------------
// la boucle for in permet de parcourir les objets et de récupérer les membres(informations) qui y sont contenus.
// poue exemple , nous allons parcourir l'objet qui s'appelle maVoiture.motorisation
for (var membre in maVoiture.motorisation){
    d(membre + ' a pour valeur '+ maVoiture.motorisation [membre]);
}  // membre s'appelle un "réfférent" : c'est sa place dans la syntaxe du for....in qui détermine que "membre "récupère le nom des propriétés à chaque tour de boucle. Ainsi, maVoiture.motorisation[membre] permet de récupérer la valeur correspendante à la propriété contenue dans "membre". Note : on ne met pas de quote à membre dans les [] car il s'agit d'une variable.


//-----------------------------------
document.write('<hr>');
//------------------------------------------------------------------------------------------------------------------------------------------
// 15-Propriété et méthodes de l'objet string
//---------------------------------------------
document.write('<h2>Propriété et méthodes de l\'objet string </h2>');

//propriété lenght :
animal = 'Loup';
d(animal.length);  // affiche 4 soit le nombre du caractères de string contenu dans la variable animal

//méthode  trim() : // la méthode trim() suprime des espaces en début et en fin de chaine (utile pour nétoyer les données d'un formulaire)
// Noter qu'une méthode comporte toujours des ().
var adresse = '     16 rue de seine      ';
d('adresse avec les espaces : '+adresse);
d('adresse avec les espaces : '+adresse.length);  // longeur y compris les espaces
d('adresse sans les espaces : '+adresse.trim().length);

//----------------------------------------------------------------------------------------------------------------------------------------------
// trouvez des ressources sur le net :
// le site de référence du js :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length

// pour allez plus loin :
// openclassrooms.com
// codecademy.com
// w3schools.com
