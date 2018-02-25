// ===================================================
// ====================== MAP 30 =====================
// ===================================================

// collision	
var MAP30COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   0,   0,   0,   0,   0,   0,   0,   1],
[   1,   0,   1,   1,   1,   1,   1,   0,   1],
[   1,   0,   1,   1,   1,   1,   1,   0,   '29/01/03/2'],
[   1,   0,   0,   0,   0,   0,   0,   0,   1],
[   1,   0,   1,   1,   1,   1,   1,   0,   1],
[   1,   0,   1,   1,   1,   1,   1,   0,   1],
[   1,   0,   0,   0,   0,   0,   0,   0,   1],
[   1,   1,   1,   1,   1,   1,   1,   1,   1]];
;

// liste des personnages
var MAP30PERSO = [joueur];

// liste des pancartes
var MAP30PANCARTE = [];

// définition des sprites		
var MAP30 = new Map(30 , "map30background.png", "map30firstground.png", MAP30COLLISION, MAP30PERSO, MAP30PANCARTE);