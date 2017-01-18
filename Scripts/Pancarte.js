// définir une pancarte
function Pancarte(url,numtile,x,y,direction,texte){

	// Analyse des données
	this.image = new Image();
	this.image.onload = function() {
		if(!this.complete){
			throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
		}
	}
	this.image.src = "./Images/Cartes/" + url ;
	this.numtile = numtile;

	this.posx = x;
	this.posy = y;
	this.direction = direction;
	this.texte = texte;
}

// -------------------------------------------------
// ----------- définition des pancartes ------------
// -------------------------------------------------

// map 01
var pancarte = new Pancarte('decors2.png',147,9,5,0,"Année 2013 // Ville de Nice // Fac de science de Valrose.")
var pancarte2 = new Pancarte('decors2.png',147,5,13,0,"Année 2014 // Ville de Nice // Fac de science de Valrose.")
