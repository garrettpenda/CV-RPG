
// ===================================================		   
// ====================== MAP 15 =====================
// ===================================================
		    
// collision	
var MAP15COLLISION=[
[ 1, 1, 1, 1, 1, 1, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 1, "14/02/04/3", 1, "16/04/04/3", 1, 1]];

// liste des personnages
var MAP15PERSO = [joueur]; //, Vincent, Mederic];

// liste des pancartes
var MAP15PANCARTE = [pancarte15];
		   
// définition des sprites		   
var MAP15 = new Map(15 , "map15background.png","map15firstground.png", MAP15COLLISION, MAP15PERSO, MAP15PANCARTE);