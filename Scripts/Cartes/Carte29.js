// ===================================================
// ====================== MAP 29 =====================
// ===================================================

// collision	
var MAP29COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1],
[   1,   0,   0,   0,   0,   0,   1],
[ '30/07/04/1',   0,   0,   0,   0,   0, '24/02/02/2'],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   1,   1,   1,   '28/04/05/3',   1,   1]];

// liste des personnages
var MAP29PERSO = [joueur];

// liste des pancartes
var MAP29PANCARTE = [];

// définition des sprites		
var MAP29 = new Map(29 , "map29background.png", "map29firstground.png", MAP29COLLISION, MAP29PERSO, MAP29PANCARTE);