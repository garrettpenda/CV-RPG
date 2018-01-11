
// ===================================================		   
// ====================== MAP 14 =====================
// ===================================================
		    
// collision	
var MAP14COLLISION=[
[ 1, 1, 1, 1, 1, 1, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 1],
[ 1, 1, "15/02/04/3", 1, "13/04/04/3", 1, 1]];

// liste des personnages
var MAP14PERSO = [joueur]; //, Vincent, Mederic];

// liste des pancartes
var MAP14PANCARTE = [pancarte14];
		   
// définition des sprites		   
var MAP14 = new Map(14 , "map14background.png","map14firstground.png", MAP14COLLISION, MAP14PERSO, MAP14PANCARTE);