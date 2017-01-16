
// d�finir un personnage
function Personnage(name,url,x,y,direction,step,immobil,texte){

	// Analyse des donn�es
	this.image = new Image();
	this.image.onload = function() {
		if(!this.complete){
			throw new Error("Erreur de chargement du tileset nomm� \"" + url + "\".");
		}
	}
	this.name = name;
	this.image.src = "./Images/Personnages/" +url ;
	this.posx = x;
	this.posy = y;
	this.direction = direction;
	this.immobil = immobil;
	this.step = step;
	this.texte = texte;
}

// changer l'apparence d'un personnage ( complement inutile pour le moment )
Personnage.prototype.changer = function(url){

	// Analyse des donn�es
	this.image = new Image();
	this.image.onload = function() {
		if(!this.complete){
			throw new Error("Erreur de chargement du tileset nomm� \"" + url + "\".");
		}
	}

	this.image.src = url ;
}

// v�rifier les collisiosns
Personnage.prototype.collision = function(sens,carte){
	// bas
	if ( sens==0 && ( window["MAP" + carte.numero + "F"][this.posy+1][this.posx]==1 || (this.posy+1)> carte.hauteur ) ){
		return true;  }
	// gauche		
	else if ( sens==1 && ( window["MAP" + carte.numero + "F"][this.posy][this.posx-1]== 1 || (this.posx-1)< 0 )){
		return true;  }
	// droite
	else if ( sens==2 && ( window["MAP" + carte.numero + "F"][this.posy][this.posx+1]== 1 || (this.posx+1)> carte.largeur-0.1 ) ){
		return true;  }
	// haut	
	else if( sens== 3 && ( window["MAP" + carte.numero + "F"][this.posy-1][this.posx]== 1 || (this.posy-1) < 0) ){
		return true;  }
	// si aucune collision
	else { 
		return false; }
	
}

// TODO mettre la case du personnage en mode mur ( collision = 1 )
// TODO faire la m�thode en mode prototype

// d�placer un personnage
function deplacer( joueur,sens,carte ){

	// v�rifie que le personnage n'effectue pas d�j� un mouvement
	if(!joueur.immobil  ){
		return false;
	}

	// v�rifie la collision avant le d�placement
	if ( joueur.collision(sens,carte) ){
		return false;
	}

	// la case sur laquelle va le personnage devient un mur le temps du mouvement
	// evite que deux perso qui bouge en meme temps puisse aller sur la meme case
	switch(sens){
		case 0: // bas
			window["MAP" + carte.numero + "F"][joueur.posy+1][joueur.posx]=1;
			break;
		case 1: // gauche
			window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx-1]=1;
			break;
		case 2: // droite
			window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx+1]=1;
			break;
		case 3: // haut
			window["MAP" + carte.numero + "F"][joueur.posy-1][joueur.posx]=1;
			break;
		default:
	}
	joueur.immobil = false;
	joueur.direction = sens;
	
	// lance l'animation
	var myInterval = setInterval( function(){
		
		// change la position du joueur
		switch(sens){
			case 0: // bas
				joueur.posy += 0.25;
				break;
			case 1: // gauche
				joueur.posx -= 0.25;
				break;
			case 2: // droite
				joueur.posx += 0.25;
				break;
			case 3: // haut
				joueur.posy -= 0.25;
				break;
			default:
		}
		
		// si le joueur a fait une animation complete , stop le mouvement, sinon, continue le mouvement
		if ( joueur.step%3 == 0 && joueur.step!=0 ){
			joueur.step=0;
			joueur.immobil = true;
			clearInterval(myInterval);
		}else{
			joueur.step ++;
		}

		// la case qu'a quitter le personnage n'est plus un mur
		switch(sens){
			case 0: // bas
				window["MAP" + carte.numero + "F"][joueur.posy-1][joueur.posx]=0;
				// ordonner les personnage par Y croissant
				carte.personnages.sort(function(a, b){return a.posy-b.posy});
				break;
			case 1: // gauche
				window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx+1]=0;
				break;
			case 2: // droite
				window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx-1]=0;
				break;
			case 3: // haut
				window["MAP" + carte.numero + "F"][joueur.posy+1][joueur.posx]=0;
				// ordonner les personnage par Y croissant
				carte.personnages.sort(function(a, b){return a.posy-b.posy});
				break;
			default:
		}
		
	}, 100);

	// TODO
	// verifier sur collison map si changement de map
	// si oui, changer map
}



// TODO trouver un ovale pour afficher le texte
// v�rifier les int�ractions autour d'un personnage
Personnage.prototype.interragir = function(carte){

	// si le personnage n'est pas d�ja dans un dialogue
	if( textcount ==0){
		
		// immobilise le personnage
		this.immobil = false;

		// texte du perso le plus proche
		for( var p=0;p<carte.personnages.length;p++){
			// un personnage a droite
			if( (carte.personnages[p].posy - this.posy == 0) && (carte.personnages[p].posx - this.posx == 1)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 1;
				carte.personnages[p].immobil = false;tupeuxbouger=p;
				this.direction = 2;
				break;
			// un personnage a gauche
			}else if( (carte.personnages[p].posy - this.posy == 0) && (carte.personnages[p].posx - this.posx == -1)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 2;
				carte.personnages[p].immobil = false;tupeuxbouger=p;
				this.direction = 1;
				break;
			// un personnage en bas ( le haut et le bas sont invers� )
			}else if( (carte.personnages[p].posy - this.posy == 1) && (carte.personnages[p].posx - this.posx == 0)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 3;
				carte.personnages[p].immobil = false;tupeuxbouger=p;
				this.direction = 0;
				break;
			// un personnage en haut du joueur
			}else if( (carte.personnages[p].posy - this.posy == -1) && (carte.personnages[p].posx - this.posx == 0)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 0;
				carte.personnages[p].immobil = false;tupeuxbouger=p;
				this.direction = 3;
				break;
			}else{
				texte = "";
			}
		}

		// texte de la pancarte la plus proche
		if (texte == ""){
			for( var p=0;p<carte.pancartes.length;p++){
				// pancarte vers le bas
				if( (carte.pancartes[p].direction ==0) && (carte.pancartes[p].posy - this.posy == -1) && (carte.pancartes[p].posx - this.posx == 0) ){
					this.direction = 3;
					texte = carte.pancartes[p].texte;
					break;
				// pancarte vers le haut
				}else if( (carte.pancartes[p].direction ==3) && (carte.pancartes[p].posy - this.posy == 1) && (carte.pancartes[p].posx - this.posx == 0) ){
					this.direction = 0;
					texte = carte.pancartes[p].texte;
					break;
				// pancarte vers la gauche
				}else if( (carte.pancartes[p].direction ==1) && (carte.pancartes[p].posy - this.posy == 0) && (carte.pancartes[p].posx - this.posx == 1)  ){
					this.direction = 2;
					texte = carte.pancartes[p].texte;
					break;
				// pancarte vers la droite
				}else if( (carte.pancartes[p].direction ==2) && (carte.pancartes[p].posy - this.posy == 0) && (carte.pancartes[p].posx - this.posx == -1)  ){
					this.direction = 1;
					texte = carte.pancartes[p].texte;
					break;
				}else{
					texte = "";
				}
			}
		}

		// ou texte du joueur si il n'y a rien
		if (texte == ""){
			texte = this.texte;
		}

		splited = texte.split(" / ");
		textetaille = splited.length;
	
		// affichage 1er texte
		splitedbis = splited[0].split(" // ");
		for( var k =0;k<splitedbis.length;k++){
			context2.fillText( splitedbis[k],10,15+k*15);
		}
		context2.fillText( textcount+1 + " / " + textetaille,10,canvas2.height -25);
		context2.fillText( "espace pour continuer",10,canvas2.height -15);
		textcount++;
	// affichage texte interm�diaire du dialogue	
	}else if( textcount < textetaille ) {
		context2.clearRect(0, 0, canvas2.width, canvas2.height);
		splitedbis = splited[textcount].split(" // ");
		for( var k =0;k<splitedbis.length;k++){
			context2.fillText( splitedbis[k],10,15+k*15);
		}
		context2.fillText( textcount+1 + " / " + textetaille,10,canvas2.height -25);
		context2.fillText( "espace pour continuer",10,canvas2.height -15);
		textcount++;
	// fermeture dialogue
	}else{
		context2.clearRect(0, 0, canvas2.width, canvas2.height);
		this.immobil = true;
		carte.personnages[tupeuxbouger].immobil = true;
		textcount=0;
		textetaille=1;
	}

}
// -------------------------------------------------
// ----------- d�finition des personnages ----------
// -------------------------------------------------

// changer le nom des image en nom des persos 
// TODO r�organiser en dossier.
//TODO mettre tous ca dans un document a part peut etre?
var joueur = new Personnage('Joueur',"Joueur.png",7 ,7 , 0,0,true,"Il n'y a personne avec qui parler ici.")

// map 01
var tony = new Personnage('Tony',"Tony.png", 11, 1 , 2 ,0,true,"Bonjour ! Les personnes te parlerons de Garrett. / Si tu es perdu, les pancartes // te donneront le temps et l'endroit o� tu te trouves. / Tu devrais aussi aller voir Sheila // pour un autre conseil.")

var sheila = new Personnage('Sheila',"Sheila.png", 8, 8 , 2 ,0,true,"Bonjour ! / Tu es � la recherche de Garrett ? / Il est pass� par ici il y a 3 ans. / C'est � ce moment que Garrett est // entr� en master de physique. / Tu peux partir au Nord vers le futur // pour d�couvrir ses exp�riences professionnels. / Ou alors, descendre au Sud vers le pass� // pour en apprendre plus sur lui. / Bon jeu !!")

/*

Personnage.prototype.deplacerbis = function( carte,sens ){
	
	if(this.immobil){ // v�rifie que le personnage n'effectue pas d�j� un mouvement
		this.immobil = false;
		this.step = 1;
		var myInterval = setInterval( function(){
			this.direction = sens;
			
			switch(sens){
				case 0:
					this.posy += 8;
					break;
				case 1:
					this.posx -= 8;
					break;
				case 2:
					this.posx += 8;
					break;
				case 3:
					this.posy -= 8;
					break;
				default:
			}
			
			carte.dessiner();
			
			if ( this.step%4 == 0 ){
				this.step=0;
				this.immobil = true;
				clearInterval(myInterval);
			}else{
				this.step ++;
			}
		}, 100);
	}
	
}
*/

