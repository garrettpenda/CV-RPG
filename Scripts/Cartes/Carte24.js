// ===================================================
// ====================== MAP 24 =====================
// ===================================================

// collision	
var MAP24COLLISION=[ 
[   1,   1,   1,   1],
[   1,   1,   1,   1],
[   '23/05/03/1',   0,   0,   1],
[   1,   0,   0,   1],
[   1,   1,   1,   1]];
;

// liste des personnages
var MAP24PERSO = [joueur];

// liste des pancartes
var MAP24PANCARTE = [pancarte24];

// définition des sprites		
var MAP24 = new Map(24 , "map24background.png", "map24firstground.png", MAP24COLLISION, MAP24PERSO, MAP24PANCARTE);