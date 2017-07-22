//http://www.commentcamarche.net/faq/18760-javascript-manipulation-des-controles-clavier

var canvas = document.getElementById("maps");
var context = canvas.getContext('2d');

var canvas2 = document.getElementById("Test");
var context2 = canvas2.getContext('2d');
context2.font = "15px Arial";

// définition de la carte
var carte = new Map("09");

// dessiner la maps ( 60fps )
setInterval(function() {

	carte.dessiner();

	// déplacer les pnj aléatoirement
	for( var p=0;p<carte.personnages.length;p++){
		var luck = Math.floor((Math.random() * 180) + 1);
		if( luck > 179 && carte.personnages[p]!=joueur){
			carte.personnages[p].deplacer( Math.floor(Math.random()*4) ,carte );
		}
	}

	// verifier sur collison map si changement de map
	if(String(window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx]).length!=1 && joueur.canmove){
		var splitdd = window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx].split("/");
		joueur.posx = Number(splitdd[1]);
		joueur.posy = Number(splitdd[2]);
		joueur.direction = Number(splitdd[3]);
		carte = new Map(splitdd[0]);
	}
		
	document.getElementById("demo").innerHTML = " X : " + Math.floor(joueur.posx) + " Y : " + Math.floor(joueur.posy)+String(window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx]);
	
}, 40);

// Gestion du clavier
window.onkeydown = function(event) {
	// On récupère le code de la touche
	var e = event || window.event;
	var key = e.which || e.keyCode;
	//alert(key);
	
	switch(key) {
			
		case 40 : case 115 : case 83 : // Flèche bas, s, S
			joueur.deplacer(DIRECTION.BAS,carte);
			break;
			
		case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
			joueur.deplacer(DIRECTION.GAUCHE,carte);
			break;
			
		case 39 : case 100 : case 68 : // Flèche droite, d, D
			joueur.deplacer(DIRECTION.DROITE,carte);
			break;
			
		case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
			joueur.deplacer(DIRECTION.HAUT,carte);
			break;
		
		case 80 : // p
			joueur.changer("maidchar01.png");
			break;
			
		case 79 : // o
			joueur.changer("Joueur.png");
			break;
		
		case 32 : // espace
			joueur.parler(carte);
			break;
		
		default : 
			//alert(key);
			// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
			return true;
	}

	return false;
}


