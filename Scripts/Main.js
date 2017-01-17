//http://www.commentcamarche.net/faq/18760-javascript-manipulation-des-controles-clavier

var canvas = document.getElementById("maps");
var context = canvas.getContext('2d');

var canvas2 = document.getElementById("Test");
var context2 = canvas2.getContext('2d');

var texte="";
var textcount=0;
var textetaille=0;
var splited = [];
var splitedbis = [];
var tupeuxbouger=0;

// définition de la carte
var carte = new Map("01");

// dessiner la maps ( 60fps )
setInterval(function() {

	carte.dessiner();

	// déplacer les pnj aléatoirement
	/*for( var p=0;p<carte.personnages.length;p++){
		var luck = Math.floor((Math.random() * 180) + 1);
		if( luck > 179 && carte.personnages[p]!=joueur){
			deplacer( carte.personnages[p],Math.floor(Math.random()*4) ,carte );
		}
	}*/
	// dessiner les cases murs 
	if (document.getElementById("cbox2").checked){
		for(j=0;j< carte.hauteur;j++){
			for(i=0;i< carte.largeur;i++){
				if(window["MAP" + carte.numero + "F"][j][i]==1){
					context.fillRect(32*i,32*j,32,32);
				}
			}
		}
	}
	document.getElementById("demo").innerHTML = " X : " + joueur.posx + " Y : " + joueur.posy + "<br>" +  "case X : " + Math.floor( joueur.posx/32) + " case Y : " + Math.floor( joueur.posy/32)  ;
	document.getElementById("touche").innerHTML = joueur.immobil;
}, 40);

// Gestion du clavier
window.onkeydown = function(event) {
	// On récupère le code de la touche
	var e = event || window.event;
	var key = e.which || e.keyCode;
	//alert(key);
	
	switch(key) {
			
		case 40 : case 115 : case 83 : // Flèche bas, s, S
			//deplacer(joueur2,0,carte);
			deplacer(joueur,0,carte);
			//deplacer(sheila,1,carte);
			//joueur1.deplacerbis(carte,0);
			break;
			
		case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A 
			//deplacer(joueur2,1,carte);
			deplacer(joueur,1,carte);
			//joueur1.deplacerbis(carte,1);
			break;
			
		case 39 : case 100 : case 68 : // Flèche droite, d, D
			//deplacer(joueur2,2,carte);
			deplacer(joueur,2,carte);
			//joueur1.deplacerbis(carte,2);
			break;
			
		case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
			//deplacer(joueur2,3,carte);
			deplacer(joueur,3,carte);
			//joueur1.deplacerbis(carte,3);
			break;
		
		case 80 : // p
			carte = new Map("01");
			//joueur1.changer("perso1.png");
			break;
			
		case 79 : // o
			//joueur1.changer("perso2.png");
			carte = new Map("02");
			break;
		
		case 32 : // espace
			context2.font = "15px Arial";
			//context2.fillText("Faire la fonction pour les interractions",10,10);
			joueur.interragir(carte);
			break;
		
		default : 
			//alert(key);
			// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
			return true;
	}

	return false;
}
