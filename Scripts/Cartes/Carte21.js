// ===================================================
// ====================== MAP 21 =====================
// ===================================================

// collision	
var MAP21COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   0,   0,   0,   0,   0,   0,   1],
[   1,   1,   1,   1,   1,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   0,   '19/01/03/2'],
[   1,   1,   1,   1,   1,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   0,   1],
[   1,   1,   0,   0,   0,   0,   0,   1],
[   1,   1,   1,   1,   1,   1,   1,   1]];
;

// liste des personnages
var MAP21PERSO = [joueur];

// liste des pancartes
var MAP21PANCARTE = [];

// définition des sprites		
var MAP21 = new Map(21 , "map21background.png", "map21firstground.png", MAP21COLLISION, MAP21PERSO, MAP21PANCARTE);