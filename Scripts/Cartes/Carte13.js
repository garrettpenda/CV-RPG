
// ===================================================		   
// ====================== MAP 13 =====================
// ===================================================
		    
// collision	
var MAP13COLLISION=[
[ 1, 1, 1, 1, 1, 1, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 1, "12/02/04/3", 1, "14/04/04/3", 1, 1]];

// liste des personnages
var MAP13PERSO = [joueur]; //, Vincent, Mederic];

// liste des pancartes
var MAP13PANCARTE = [pancarte13];
		   
// définition des sprites		   
var MAP13 = new Map(13 , "map13background.png","map13firstground.png", MAP13COLLISION, MAP13PERSO, MAP13PANCARTE);
