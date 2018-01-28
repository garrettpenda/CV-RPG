// ===================================================
// ====================== MAP 20 =====================
// ===================================================

// collision	
var MAP20COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   0,   0,   0,   1,   1],
[   1,   0,   0,   0,   0,   0,   0,   1],
[   '19/08/03/1',   0,   0,   0,   0,   0,   1,   1],
[   1,   0,   0,   0,   0,   0,   1,   1],
[   1,   0,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1]];
;

// liste des personnages
var MAP20PERSO = [joueur];

// liste des pancartes
var MAP20PANCARTE = [];

// définition des sprites		
var MAP20 = new Map(20 , "map20background.png", "map20firstground.png", MAP20COLLISION, MAP20PERSO, MAP20PANCARTE);