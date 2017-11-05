
// ===================================================		   
// ====================== MAP 13 =====================
// ===================================================
		   
// définition des sprites		   
var MAP13 = ["canvastest1.png","cliff.png","concour_mapping_yue02.png","shiro_m001naiso.png","JapaneseVillage.png"];

// liste des personnages
var MAP13PERSO = [joueur, Simon];

// liste des pancartes
var MAP13PANCARTE = [pancarte13];
	 
// fond			  
var MAP13A=[
[  34,  35,  36,  35,  36,  35,  36,  35,  36,  35,  36,   1,   1,   1,   1,   1,   1,   1,  51,  51],
[  50,  36,  35,  36,  35,  36,  35,  36,  35,  36,  52,   1, 173, 173, 173, 173, 173,   1,   1,  57],
[  34,  35,  35,  51,  51,  35,  36,  51,  36,  51,  51,   1, 173, 138, 138, 138, 173,   1,   1,   1],
[  34,  35,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 173, 138, 138, 138, 173, 173, 173,   1],
[  50,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 173, 138, 138, 138, 138, 173, 173, 173],
[   1,   1, 173, 173, 173, 173, 173, 173, 173, 173, 173, 173, 173, 138, 138, 138, 138, 138, 138, 138],
[   1,   1, 173, 173, 173, 173, 173, 173, 173, 173, 173, 173, 173, 160, 189, 189, 189, 159, 138, 138],
[ 138, 138, 173, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 174,  79,  79,  79, 188, 159, 138],
[ 172, 173, 173, 138, 160, 189, 189, 189, 189, 189, 189, 189, 189, 190,  79,  79,  79,  79, 188, 189],
[ 172, 138, 138, 138, 174,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79],
[ 188, 189, 189, 189, 190,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79],
[  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79],
[  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79],
[  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79],
[  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79,  79]];

			
// terrain fond			
var MAP13B=[
[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 132, 164,  83,  83,  84, 193,  55,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,  37, 180, 242,  99,  98, 209,  66,  55,   1],
[   1,   1,  51,  51,   1,   1,  51,  51,   1,   1,   1,  53,  38,   1,   1,   1,  81,  82,  71,  72],
[   1,   1, 195,  67,  68,  67,  68,  67,  67,  68,  68,  69,  70,   1,   1,   1, 241,  98,  87,  88],
[ 145, 195, 196,  83,  84,  83,  84,  83,  83,  84,  84,  85,  86,   1,   1,   1,   1,   1,  97, 104],
[ 210, 211, 212,  99, 100,  99, 100,  99,  99, 100,  98, 101, 102,   1,   1,   1,   1,   1,   1,   1],
[ 226, 227, 228,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
[ 242, 243, 244,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1],
[   1,   1,   1,   1,   1,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]];

// terrain 1er plan
var MAP13C=[
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 244, 245,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 298,   0,   0,   0, 252, 253,   0,   0,   0],
[ 123,   0,   0,   0, 109, 126,   0,   0, 127, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 108],
[ 123,   0,   0,   0, 123,   0,   0,   0,   0,   0,   0,   0,   0,   0,  60,  60,  60,  60,  60, 123],
[ 133, 114, 114, 114, 132,   0,   0,   0,   0,   0,   0,   0,   0, 143,  22,  22,  22,  22,  22, 123],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 143,  43,  43,  44,  43,  43, 123],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 275,  50,  51,  52,  53,  53, 123],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 275, 275, 275, 275, 275, 275, 125],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, 133]];



//décor fond			
var MAP13D=[
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]];


// decor 1er plan		
var MAP13E=[
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]]; 


// collision	
var MAP13F=[
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[ 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]];



