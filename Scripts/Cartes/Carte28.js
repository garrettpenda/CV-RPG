// ===================================================
// ====================== MAP 28 =====================
// ===================================================

// collision	
var MAP28COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1],
[   1,   0,   0,   0,   0,   0,   0],
[   1,   0,   0,   0,   0,   0,   0],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   1,   '26/02/05/3',   1, '29/04/05/3',   1,   1]];
;

// liste des personnages
var MAP28PERSO = [joueur];

// liste des pancartes
var MAP28PANCARTE = [];

// définition des sprites		
var MAP28 = new Map(28 , "map28background.png", "map28firstground.png", MAP28COLLISION, MAP28PERSO, MAP28PANCARTE);