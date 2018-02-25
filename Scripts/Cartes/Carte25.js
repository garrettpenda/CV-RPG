// ===================================================
// ====================== MAP 25 =====================
// ===================================================

// collision	
var MAP25COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   1, '23/02/05/3',   1, '26/04/05/3',   1,   1]];

// liste des personnages
var MAP25PERSO = [joueur];

// liste des pancartes
var MAP25PANCARTE = [];

// définition des sprites		
var MAP25 = new Map(25 , "map25background.png", "map25firstground.png", MAP25COLLISION, MAP25PERSO, MAP25PANCARTE);