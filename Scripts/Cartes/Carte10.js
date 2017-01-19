
// ===================================================		   
// ====================== MAP 10 =====================
// ===================================================
		   
// définition des sprites		   
var MAP10 = ["chemin.png","decors2.png","decors2.png","decors2.png","decors2.png"];

// liste des personnages
var MAP10PERSO = [joueur,sheila,tony];

// liste des pancartes
var MAP10PANCARTE = [pancarte10];
	 
// fond			  
var MAP10A=[[2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10,  8,  6,  6,  6,  6,  6,  6, 6],
	    [2, 2, 2, 2, 2, 2, 9, 10, 10, 10, 10, 10, 10, 10, 10,10],
	    [2, 2, 2, 2, 2, 2, 9, 10, 12, 14, 14, 14, 14, 14, 14,14],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2],
	    [2, 2, 2, 2, 2, 2, 9, 10, 11,  2,  2,  2,  2,  2,  2, 2]];
			
// terrain fond			
var MAP10B=[[ 109, 110, 110, 110, 110, 108,   1,   1,   1, 106, 109, 110, 110, 110, 110, 110],
	    [ 167,   1,   1,   1,   1,   1,   1,   1,   1,   1, 167,   1,   1,   1,   1, 106],
	    [ 167,   1,   1,   1,   1,   1,   1,   1,   1, 182, 167,   1,   1,   1,   1, 106],
	    [ 167,   1, 106, 110, 110, 108,   1,   1,   1,   1,  93,   1,   1,   1,   1, 106],
	    [ 167,   1,   1,   1,   1, 167,   1,   1,   1, 106, 109, 109, 109, 108,   1, 106],
	    [ 167,   1,   1,   1,   1, 167,   1,   1,   1,   1, 182, 182, 182,   1,   1, 106],
	    [ 109, 109, 109, 108,   1, 167,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [ 109, 109, 109, 108,   1, 167,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [ 109, 109, 109, 108,   1, 167,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [ 109, 109, 109, 108,   1, 167,   1,   1,   1, 106, 109, 109, 109, 109, 109, 109],
	    [ 109, 110, 110, 108,   1, 167,   1,   1,   1, 106, 109, 109, 109, 109, 109, 109],
	    [ 167,   1,   1,   1,   1, 167,   1,   1,   1, 106, 109, 109, 109, 109, 109, 109],
	    [ 167,   1,   1,   1,   1, 167,   1,   1,   1, 106, 109, 109, 109, 109, 109, 109],
	    [  93,   1,   1,   1,   1, 182,   1,   1,   1, 106, 109, 109, 109, 109, 109, 109],
	    [ 110, 110, 110, 110, 110, 108,   1,   1,   1, 106, 110, 110, 110, 110, 110, 110],];

// terrain 1er plan
var MAP10D=[[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,  90],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1, 166,   1,   1,   1,   1,   1,  90],
	    [   1,   1,  90,  94,  94,  92,   1,   1,   1,   1,   1,   1,   1,   1,   1,  90],
	    [   1,   1,   1,   1,   1, 166,   1,   1,   1,  90,   1,  94,  94,  92,   1,  90],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,  90],
	    [  94,  94,  94,  92,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [  94,  94,  94,  92,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [  94,  94,  94,  92,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [  94,  94,  94,  92,   1,   1,   1,   1,   1,  90,  94,  94,  94,  94,  94,  94],
	    [  94,  94,  94,  92,   1,   1,   1,   1,   1,  90,  94,  94,  94,  94,  94,  94],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,  90,  94,  94,  94,  94,  94,  94],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,  90,  94,  94,  94,  94,  94,  94],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,  90,  94,  94,  94,  94,  94,  94],
	    [   1,  94,  94,  94,  94,  92,   1,   1,   1,  90,  94,  94,  94,  94,  94,  94],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],];

//décor fond			
var MAP10C=[[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 164,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 162,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],];

// decor 1er plan		
var MAP10E=[[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],];		

// collision	
var MAP10F=[[   1,   1,   1,   1,   1,   1,   "01/06/13/3",   "01/07/13/3",   "01/08/13/3",   1,   1,   1,   1,   1,   1,   1],
	    [   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   0,   0,   0,   0,   1],
	    [   1,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   0,   0,   0,   0,   1],
	    [   1,   0,   1,   1,   1,   1,   0,   0,   0,   0,   1,   0,   0,   0,   0,   1],
	    [   1,   0,   0,   0,   0,   1,   0,   0,   0,   1,   1,   1,   1,   1,   0,   1],
	    [   1,   0,   0,   0,   0,   1,   0,   0,   0,   1,   1,   1,   1,   0,   0,   1],
	    [   1,   1,   1,   0,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
	    [   1,   1,   1,   0,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
	    [   1,   1,   1,   0,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
	    [   1,   1,   1,   0,   0,   1,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   0,   0,   1,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   0,   0,   0,   0,   1,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   0,   0,   0,   0,   1,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   0,   0,   0,   0,   1,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1],
	    [   1,   1,   1,   1,   1,   1,   "08/06/01/0",   "08/07/01/0",   "08/08/01/0",   1,   1,   1,   1,   1,   1,   1],];

