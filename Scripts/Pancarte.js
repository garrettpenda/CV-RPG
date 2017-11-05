// définir une pancarte
function Pancarte(x,y,direction,texte){

	this.posx = x;
	this.posy = y;
	this.direction = direction;
	this.texte = texte;
}

// -------------------------------------------------
// ----------- définition des pancartes ------------
// -------------------------------------------------

var pancarte1 = new Pancarte(8,8,0,"Map 01");
var pancarte2 = new Pancarte(8,8,0,"Map 02");
var pancarte3 = new Pancarte(8,8,0,"Map 03");
var pancarte4 = new Pancarte(8,8,0,"Map 04");
var pancarte5 = new Pancarte(8,8,0,"Map 05");
var pancarte6 = new Pancarte(8,8,0,"Map 06");
var pancarte7 = new Pancarte(8,8,0,"Map 07");
var pancarte8 = new Pancarte(0,8,0,"Map 08");
var pancarte9 = new Pancarte(2,9,0,"Année 2013 // Ville de Nice // Parc des sciences de valrose.");
var pancarte10 = new Pancarte(9,5,0,"Année 2013 // Ville de Nice // Fac de science de Valrose.");
var pancarte11 = new Pancarte(8,15,0,"Année 2014 // Ville de Nice // Fac de science de Valrose. // Salle de travail du master 1 MCS.");

var pancarte12 = new Pancarte(4, 0 ,0,"Année 2014 // Ville de Sophia Antipolis // Batiment de physique // RDC");

var pancarte13 = new Pancarte(11,4,0,"Année 2015 // Ville de Nice // Fac de science de Valrose. // Salle de travail du master 2 MCS.");
