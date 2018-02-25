// ===================================================
// ====================== MAP 26 =====================
// ===================================================

// collision	
var MAP26COLLISION=[ 
[   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1],
[   1,   0,   0,   0,   0,   0,   0],
[ '27/05/5/2',   0,   0,   0,   0,   0,   0],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   0,   0,   0,   0,   0,   1],
[   1,   1,   '28/02/05/3',   1, '25/04/05/3',   1,   1]];
;

// liste des personnages
var MAP26PERSO = [joueur];

// liste des pancartes
var MAP26PANCARTE = [];

// définition des sprites		
var MAP26 = new Map(26 , "map26background.png", "map26firstground.png", MAP26COLLISION, MAP26PERSO, MAP26PANCARTE);