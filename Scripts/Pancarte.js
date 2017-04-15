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

var pancarte1 = new Pancarte('decors2.png',147,8,8,0,"Map 01")
var pancarte2 = new Pancarte('decors2.png',147,8,8,0,"Map 02")
var pancarte3 = new Pancarte('decors2.png',147,8,8,0,"Map 03")
var pancarte4 = new Pancarte('decors2.png',147,8,8,0,"Map 04")
var pancarte5 = new Pancarte('decors2.png',147,8,8,0,"Map 05")
var pancarte6 = new Pancarte('decors2.png',147,8,8,0,"Map 06")
var pancarte7 = new Pancarte('decors2.png',147,8,8,0,"Map 07")
var pancarte8 = new Pancarte('decors2.png',147,0,8,0,"Map 08")
var pancarte9 = new Pancarte('decors2.png',147,8,8,0,"Map 09")
var pancarte10 = new Pancarte('decors2.png',147,9,5,0,"Année 2013 // Ville de Nice // Fac de science de Valrose.")
