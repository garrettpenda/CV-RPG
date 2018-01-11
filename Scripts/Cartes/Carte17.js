
// ===================================================		   
// ====================== MAP 17 =====================
// ===================================================
		    
// collision	
var MAP17COLLISION=[
[1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,1,0,1],
[1,0,1,1,1,1,1,0,"16/01/02/2"],
[1,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,1,0,1],
[1,0,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1]];



// liste des personnages
var MAP17PERSO = [joueur, Vincent, Mederic];

// liste des pancartes
var MAP17PANCARTE = [];
		   
// définition des sprites		   
var MAP17 = new Map(17 , "map17background.png","map17firstground.png", MAP17COLLISION, MAP17PERSO, MAP17PANCARTE);