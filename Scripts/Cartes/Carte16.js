
// ===================================================		   
// ====================== MAP 16 =====================
// ===================================================
		    
// collision	
var MAP16COLLISION=[
[1,1,1,1,1,1,1],
[1,0,0,0,0,0,1],
["17/07/04/1",0,0,0,0,0,1],
[1,0,0,0,0,0,1],
[1,0,0,0,0,0,1],
[1, 1, 1, 1, "15/04/04/3", 1, 1]];

// liste des personnages
var MAP16PERSO = [joueur]; //, Vincent, Mederic];

// liste des pancartes
var MAP16PANCARTE = [pancarte16];
		   
// définition des sprites		   
var MAP16 = new Map(16 , "map16background.png","map16firstground.png", MAP16COLLISION, MAP16PERSO, MAP16PANCARTE);