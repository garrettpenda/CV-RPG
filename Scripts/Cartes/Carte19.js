// ===================================================
// ====================== MAP 19 =====================
// ===================================================

// collision	
var MAP19COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   0,   0,   0,   0,   0,   1,   1],
[   0,   0,   0,   0,   1,   0,   0,   0,   0,   '20/01/05/2'],
[   1,   0,   0,   0,   1,   1,   1,   0,   0,   1],
[   1,   1,   0,   0,   0,   0,   0,   0,   1,   1],
[   1,   1,   1,   0,   0,   0,   0,   1,   1,   1],
[   1,   1,   1,   1,   1,   '18/09/09/0',   1,   1,   1,   1]];
;

// liste des personnages
var MAP19PERSO = [joueur];

// liste des pancartes
var MAP19PANCARTE = [];

// définition des sprites		
var MAP19 = new Map(19 , "map19background.png", "map19firstground.png", MAP19COLLISION, MAP19PERSO, MAP19PANCARTE);