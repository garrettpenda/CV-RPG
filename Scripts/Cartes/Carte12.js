
// ===================================================		   
// ====================== MAP 12 =====================
// ===================================================
		    
// collision	
var MAP12COLLISION=[
[ 1, 1, 1, 1, 1, 1, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 1, "13/05/16/0", 1, "11/05/16/0", 1, 1]];

// liste des personnages
var MAP12PERSO = [joueur, Reparateur]; //, Vincent, Mederic];

// liste des pancartes
var MAP12PANCARTE = [pancarte12];
		   
// définition des sprites		   
var MAP12 = new Map(12 , "map12background.png","map12firstground.png", MAP12COLLISION, MAP12PERSO, MAP12PANCARTE);

