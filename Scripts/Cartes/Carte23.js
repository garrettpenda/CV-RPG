// ===================================================
// ====================== MAP 23 =====================
// ===================================================

// collision	
var MAP23COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   '24/01/02/2'],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   1, '25/02/05/3',   1, '22/05/16/0',   1,   1]];

// liste des personnages
var MAP23PERSO = [joueur];

// liste des pancartes
var MAP23PANCARTE = [];

// définition des sprites		
var MAP23 = new Map(23 , "map23background.png", "map23firstground.png", MAP23COLLISION, MAP23PERSO, MAP23PANCARTE);