// d�finir une carte
function Map(numero){

	//num�ro de la carte
	this.numero = numero;
	
	// largeur et hauteur de la map a partir de la matrice A
	var matname = "MAP" + numero + "A";
	this.largeur = window[matname][0].length;
	this.largeurpx = window[matname][0].length*32;
	this.hauteur = window[matname].length;
	this.hauteurpx = window[matname].length*32;
	
	// Liste des personnages pr�sents sur le terrain.
	this.personnages = window[ "MAP" + numero + "PERSO"]; 

	// liste des pancartes sur la map
	this.pancartes = window[ "MAP" + numero + "PANCARTE"];

	// ordonner les personnage par Y croissant
	this.personnages.sort(function(a, b){return a.posy-b.posy});

	// les cases avec des personnages deviennent des murs
	for( var p=0;p<this.personnages.length;p++){
		window["MAP" + this.numero + "F"][this.personnages[p].posy][this.personnages[p].posx]=1;
	}

	// les cases avec des pancartes deviennent des murs
	for( var p=0;p<this.pancartes.length;p++){
		window["MAP" + this.numero + "F"][this.pancartes[p].posy][this.pancartes[p].posx]=1;
	}
}


// fonction dessiner couche
function dessinermatrice( matrice,imageurl ){

	var image = new Image();
	image.src = "./Images/Cartes/" + imageurl;
	var nbx = image.width/32;
	var nby = image.height/32;
	var nbmax = nbx * nby;
	
	for( j=0 ; j<matrice.length ; j++ ){
		for( i=0 ; i< matrice[0].length ; i++ ){
		
			if( matrice[j][i]-1 < nbmax){ // si le nombre est plus grand que le nombre de tileset
				var sx = 32*((matrice[j][i]-1)%nbx);
				var sy = 32*(Math.floor( ( matrice[j][i]-1)/nbx));
				context.drawImage(image, sx, sy, 32, 32, 32*i, 32*j, 32, 32);
			}
		}
	}
}

// dessiner une carte
Map.prototype.dessiner = function(){

	// adapter la taille du canvas � la map
	canvas.width = this.largeurpx;
	canvas.height = this.hauteurpx;
	
	// dessiner le fond ( A )
	dessinermatrice(window["MAP" + this.numero + "A"], window["MAP" + this.numero][0]);
	
	// dessiner le terrain arri�re plan ( B )
	dessinermatrice(window["MAP" + this.numero + "B"], window["MAP" + this.numero][1]);
	
	// dessiner le decor arri�re plan ( C )
	dessinermatrice(window["MAP" + this.numero + "C"], window["MAP" + this.numero][2]);
	
	// dessiner les pancartes
	for(var i = 0 ; i < this.pancartes.length ; i++) {
		nbx = this.pancartes[i].image.width/32;
		nby = this.pancartes[i].image.height/32;
		nbmax = nbx * nby;
		if( this.pancartes[i].numtile < nbmax){
			var sx = 32*((this.pancartes[i].numtile -1)%nbx);
			var sy = 32*(Math.floor( ( this.pancartes[i].numtile-1)/nbx));
			context.drawImage(this.pancartes[i].image, sx, sy, 32, 32, 32*this.pancartes[i].posx, 32*this.pancartes[i].posy, 32, 32);
		}
	}

	// dessiner les fleches de changement de map 
	for(j=0;j< carte.hauteur;j++){
		for(i=0;i< carte.largeur;i++){
			if( String(window["MAP" + carte.numero + "F"][j][i]).length!=1){// NN/XX/YY/S
					
				var splitdd = window["MAP" + carte.numero + "F"][j][i].split("/");
				var numtile = Number(splitdd[3])*12 +1;

				var image = new Image();
				image.src = "./Images/Cartes/arrow.png" ;
				var nbx = image.width/32;
				var nby = image.height/32;
				var nbmax = nbx * nby;
				if( numtile-1 < nbmax){
					var sx = 32*((numtile-1)%nbx);
					var sy = 32*(Math.floor( ( numtile-1)/nbx));
					context.drawImage(image, sx, sy, 32, 32, 32*i, 32*j, 32, 32);
				}
			}
		}
	}

	
	// reorganiser les personnages dabors
	this.personnages.sort(function (a, b) {
  		return a.posy - b.posy;
	});

	// dessiner les personnages
	for(var i = 0 ; i < this.personnages.length ; i++) {
		context.drawImage( this.personnages[i].image, 32*(this.personnages[i].step %4) , 48*this.personnages[i].direction, 32, 48, 32*this.personnages[i].posx , 32*this.personnages[i].posy -32, 32, 48);
	}
	
	// dessiner le terrain 1er plan ( D )
	dessinermatrice(window["MAP" + this.numero + "D"], window["MAP" + this.numero][3]);
	
	// dessiner le decor 1er plan ( E )
	dessinermatrice(window["MAP" + this.numero + "E"], window["MAP" + this.numero][4]);
	
	// dessiner les cases murs 
	if (document.getElementById("cbox2").checked){
		for(j=0;j< carte.hauteur;j++){
			for(i=0;i< carte.largeur;i++){
				if(window["MAP" + carte.numero + "F"][j][i]==1){
					context.fillRect(32*i,32*j,32,32);
				}
			}
		}
	}

	// dessiner le cadrillage
	if (document.getElementById("cbox").checked){
		for (i=1;i<carte.hauteurpx;i++){
			context.beginPath();
			context.moveTo(0,32*i);
			context.lineTo(carte.largeurpx,32*i);
			context.stroke();
		}
		for (i=1;i<carte.largeurpx;i++){
			context.beginPath();
			context.moveTo(32*i,0);
			context.lineTo(32*i,carte.hauteurpx);
			context.stroke();
		}
	}


}
/*
// matrice des cartes
var MAP03A = [[ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [11, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,11],
		   [ 4, 8, 3, 4, 5, 1, 1, 1, 9, 1],
		   [ 7, 2, 7, 4, 5, 6, 1,10,11,10],
		   [ 5, 8, 4, 4, 5, 1, 1,11, 9, 6]];
		   
var MAP03B =[[ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [11, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
		   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,11],
		   [ 4, 8, 3, 4, 5, 1, 1, 1, 9, 1],
		   [ 7, 2, 7, 4, 5, 6, 1,10,11,10],
		   [ 5, 8, 4, 4, 5, 1, 1,11, 9, 6]];
*/


			
