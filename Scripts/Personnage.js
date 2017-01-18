
// définir un personnage
function Personnage(name,url,x,y,direction,step,immobil,texte){

	// Analyse des données
	this.image = new Image();
	this.image.onload = function() {
		if(!this.complete){
			throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
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

	// Analyse des données
	this.image = new Image();
	this.image.onload = function() {
		if(!this.complete){
			throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
		}
	}

	this.image.src = url ;
}

// vérifier les collisiosns
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
// TODO faire la méthode en mode prototype

// déplacer un personnage
function deplacer( joueur,sens,carte ){

	// vérifie que le personnage n'effectue pas déjà un mouvement
	if(!joueur.immobil  ){
		return false;
	}

	// vérifie la collision avant le déplacement
	if ( joueur.collision(sens,carte) ){
		return false;
	}

	// la case qu'a quitter le personnage n'est plus un mur si ce nest pas une case changement de map
	if( String(window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx]).length==1 ){
		window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx]=0;
	}

	// la case sur laquelle va le personnage devient un mur si ce nest pas une case changement de map
	// evite que deux perso qui bouge en meme temps puisse aller sur la meme case
	// NOTE : deux personnage peuvent aller en meme temps sur une case changement de map
	if (sens ==0){ // bas
		if( String(window["MAP" + carte.numero + "F"][joueur.posy+1][joueur.posx]).length==1 ){
			window["MAP" + carte.numero + "F"][joueur.posy+1][joueur.posx]=1;
		}
	}else if(sens ==1){ // gauche	
		if( String(window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx-1]).length==1 ){
			window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx-1]=1;
		}
	}else if(sens ==2){ // droite
		if( String(window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx+1]).length==1 ){
			window["MAP" + carte.numero + "F"][joueur.posy][joueur.posx+1]=1;
		}
	}else if(sens ==3){ // haut
		if( String(window["MAP" + carte.numero + "F"][joueur.posy-1][joueur.posx]).length==1 ){
			window["MAP" + carte.numero + "F"][joueur.posy-1][joueur.posx]=1;
		}
	}
	joueur.immobil = false;
	joueur.direction = sens;
	
	var steps = 0;
	// lance l'animation
	var myInterval = setInterval( function(){
		steps++;
		// TODO revoir la fonction pour marcher
		// change la position du joueur
		if (sens ==0){ // bas
			joueur.posy += 0.05;
			joueur.posy = Number(joueur.posy.toFixed(2));
		}else if(sens ==1){ // gauche		
			joueur.posx -= 0.05;
			joueur.posx = Number(joueur.posx.toFixed(2));
		}else if(sens ==2){ // droite
			joueur.posx += 0.05;
			joueur.posx = Number(joueur.posx.toFixed(2));
		}else if(sens ==3){ // haut
			joueur.posy -= 0.05;
			joueur.posy = Number(joueur.posy.toFixed(2));
		}
		
		// si le joueur a fait une animation complete , stop le mouvement, sinon, continue le mouvement
		if ( steps%5 == 3){joueur.step=(joueur.step+1)%4}
		if (steps == 20){
			joueur.step=0;
			joueur.immobil = true;
			clearInterval(myInterval);
		}

	}, 40);
	
	
}

// TODO trouver un ovale pour afficher le texte
// vérifier les intéractions autour d'un personnage
Personnage.prototype.interragir = function(carte){

	// si le personnage n'est pas déja dans un dialogue
	if( textcount ==0){
		
		// immobilise le personnage
		this.immobil = false;

		// texte du perso le plus proche
		for( var p=0;p<carte.personnages.length;p++){
			// un personnage a droite
			if( (carte.personnages[p].posy - this.posy == 0) && (carte.personnages[p].posx - this.posx == 1)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 1;
				carte.personnages[p].immobil = false;
				this.direction = 2;
				break;
			// un personnage a gauche
			}else if( (carte.personnages[p].posy - this.posy == 0) && (carte.personnages[p].posx - this.posx == -1)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 2;
				carte.personnages[p].immobil = false;
				this.direction = 1;
				break;
			// un personnage en bas ( le haut et le bas sont inversé )
			}else if( (carte.personnages[p].posy - this.posy == 1) && (carte.personnages[p].posx - this.posx == 0)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 3;
				carte.personnages[p].immobil = false;
				this.direction = 0;
				break;
			// un personnage en haut du joueur
			}else if( (carte.personnages[p].posy - this.posy == -1) && (carte.personnages[p].posx - this.posx == 0)){
				texte = carte.personnages[p].texte;
				carte.personnages[p].direction = 0;
				carte.personnages[p].immobil = false;
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
	// affichage texte intermédiaire du dialogue	
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
		//this.immobil = true;
		for( var p=0;p<carte.personnages.length;p++){
			carte.personnages[p].immobil = true;
		}
		// techniquement, ca ne permet de bouger que au personnage auquel on a parlé
		// mais l'ordre peut varier pendant le dialogue si lordre des personnages selon Y change 
		textcount=0;
		textetaille=1;
	}

}
// -------------------------------------------------
// ----------- définition des personnages ----------
// -------------------------------------------------

// changer le nom des image en nom des persos 
//TODO mettre tous ca dans un document a part peut etre?
var joueur = new Personnage('Joueur',"Joueur.png",7 ,7 , 0,0,true,"Il n'y a personne avec qui parler ici.")

// map 01
var tony = new Personnage('Tony',"Tony.png", 11, 1 , 2 ,0,true,"Bonjour ! Les personnes te parlerons de Garrett. / Si tu es perdu, les pancartes // te donneront le temps et l'endroit où tu te trouves. / Tu devrais aussi aller voir Sheila // pour un autre conseil.")

var sheila = new Personnage('Sheila',"Sheila.png", 1, 11 , 2 ,0,true,"Bonjour ! / Tu es à la recherche de Garrett ? / Il est passé par ici il y a 3 ans. / C'est à ce moment que Garrett est // entré en master de physique. / Tu peux partir au Nord vers le futur // pour découvrir ses expériences professionnels. / Ou alors, descendre au Sud vers le passé // pour en apprendre plus sur lui. / Bon jeu !!")

/*

Personnage.prototype.deplacerbis = function( carte,sens ){
	
	if(this.immobil){ // vérifie que le personnage n'effectue pas déjà un mouvement
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

