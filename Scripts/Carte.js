// d�finir une carte
function Map(numero, background,firstground, matrice, personnages, pancartes){

	//num�ro de la carte
	this.background = background;
	this.firstground = firstground;
	this.numero = numero;
	
	// largeur et hauteur de la map a partir de la matrice collision
	this.matrice = matrice;
	this.largeur = this.matrice[0].length;
	this.largeurpx = this.matrice[0].length*32;
	this.hauteur = this.matrice.length;
	this.hauteurpx =this.matrice.length*32;
	
	// Liste des personnages pr�sents sur le terrain.
	this.personnages = personnages; 

	// liste des pancartes sur la map
	this.pancartes = pancartes;

	// ordonner les personnage par Y croissant
	this.personnages.sort(function(a, b){return a.posy-b.posy});

}

// changer de carte
Map.prototype.changer = function(numero) {

	var splitdd = numero.split("/");
	joueur.posx = Number(splitdd[1]);
	joueur.posy = Number(splitdd[2]);
	joueur.direction = Number(splitdd[3]);
	carte = window["MAP" + splitdd[0]];
	
	// les cases avec des personnages deviennent des murs
	for( var p=0;p<carte.personnages.length;p++){
		carte.matrice[carte.personnages[p].posy][carte.personnages[p].posx]=1;
	}

}


// dessiner une carte
Map.prototype.dessiner = function(){

	// adapter la taille du canvas � la map
	canvas.width = this.largeurpx;
	canvas.height = this.hauteurpx;

	// dessiner l arriere plan
	var image = new Image();
	image.src = "./Images/Cartes/" + this.background;
	context.drawImage(image,0,0);

	// reorganiser les personnages dabors
	this.personnages.sort(function (a, b) {
  		return a.posy - b.posy;
	});

	// dessiner les personnages
	for(var i = 0 ; i < this.personnages.length ; i++) {
		context.drawImage( this.personnages[i].image, 32*(this.personnages[i].step %4) , 48*this.personnages[i].direction, 32, 48, 32*this.personnages[i].posx , 32*this.personnages[i].posy -32, 32, 48);
	}

	// dessiner le 1er plan
	var image2 = new Image();
	image2.src = "./Images/Cartes/" + this.firstground;
	context.drawImage(image2,0,0);	

	// dessiner les cases murs 
	if (document.getElementById("cbox2").checked){
		for(j=0;j< this.hauteur;j++){
			for(i=0;i< this.largeur;i++){
				if(this.matrice[j][i]==1){
					context.fillRect(32*i,32*j,32,32);
				}
			}
		}
	}

	// dessiner le cadrillage
	if (document.getElementById("cbox").checked){
		for (i=1;i<this.hauteurpx;i++){
			context.beginPath();
			context.moveTo(0,32*i);
			context.lineTo(this.largeurpx,32*i);
			context.stroke();
		}
		for (i=1;i<this.largeurpx;i++){
			context.beginPath();
			context.moveTo(32*i,0);
			context.lineTo(32*i,this.hauteurpx);
			context.stroke();
		}
	}


}


			
