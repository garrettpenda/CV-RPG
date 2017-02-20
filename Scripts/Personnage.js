var DIRECTION = {
	"BAS"    : 0,
	"GAUCHE" : 1,
	"DROITE" : 2,
	"HAUT"   : 3
}
var nomperso = "";
var texte="";
var textcount=0;
var textetaille=0;
var splited = [];
var splitedbis = [];
// d�finir un personnage
function Personnage(name,url,x,y,direction,step,canmove,texte){

	// Analyse des donn�es
	this.image = new Image();
	this.image.onload = function() {
		if(!this.complete){
			throw new Error("Erreur de chargement du tileset nomm� \"" + url + "\".");
		}
	}
	this.name = name;
	this.image.src = "./Images/Personnages/" + url ;
	this.posx = x;
	this.posy = y;
	this.direction = direction;
	this.canmove = canmove;
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

	this.image.src = "./Images/Personnages/" + url ;
}

// v�rifier les collisiosns
Personnage.prototype.collision = function(sens,carte){
	if ( sens==DIRECTION.BAS && ( window["MAP" + carte.numero + "F"][this.posy+1][this.posx]==1 || (this.posy+1)> carte.hauteur ) ){
		return true;  }		
	else if ( sens==DIRECTION.GAUCHE && ( window["MAP" + carte.numero + "F"][this.posy][this.posx-1]== 1 || (this.posx-1)< 0 )){
		return true;  }
	else if ( sens==DIRECTION.DROITE && ( window["MAP" + carte.numero + "F"][this.posy][this.posx+1]== 1 || (this.posx+1)> carte.largeur-0.1 ) ){
		return true;  }
	else if( sens== DIRECTION.HAUT && ( window["MAP" + carte.numero + "F"][this.posy-1][this.posx]== 1 || (this.posy-1) < 0) ){
		return true;  }
	else { 
		return false; }
	
}

// d�placer un personnage
//function deplacer( joueur,sens,carte ){
Personnage.prototype.deplacer = function(sens,carte,joueur){

	// v�rifie que le personnage n'effectue pas d�j� un mouvement
	if(!this.canmove  ){
		return false;
	}

	// v�rifie la collision avant le d�placement
	if ( this.collision(sens,carte) ){
		return false;
	}

	// la case qu'a quitter le personnage n'est plus un mur si ce nest pas une case changement de map
	if( String(window["MAP" + carte.numero + "F"][this.posy][this.posx]).length==1 ){
		window["MAP" + carte.numero + "F"][this.posy][this.posx]=0;
	}

	// la case sur laquelle va le personnage devient un mur si ce nest pas une case changement de map
	// evite que deux perso qui bouge en meme temps puisse aller sur la meme case
	// NOTE : deux personnage peuvent aller en meme temps sur une case changement de map
	if (sens ==DIRECTION.BAS){ // bas
		if( String(window["MAP" + carte.numero + "F"][this.posy+1][this.posx]).length==1 ){
			window["MAP" + carte.numero + "F"][this.posy+1][this.posx]=1;
		}
	}else if(sens ==DIRECTION.GAUCHE){ // gauche	
		if( String(window["MAP" + carte.numero + "F"][this.posy][this.posx-1]).length==1 ){
			window["MAP" + carte.numero + "F"][this.posy][this.posx-1]=1;
		}
	}else if(sens ==DIRECTION.DROITE){ // droite
		if( String(window["MAP" + carte.numero + "F"][this.posy][this.posx+1]).length==1 ){
			window["MAP" + carte.numero + "F"][this.posy][this.posx+1]=1;
		}
	}else if(sens ==DIRECTION.HAUT){ // haut
		if( String(window["MAP" + carte.numero + "F"][this.posy-1][this.posx]).length==1 ){
			window["MAP" + carte.numero + "F"][this.posy-1][this.posx]=1;
		}
	}
	this.canmove = false;
	this.direction = sens;
	
	var steps = 0;
	// lance l'animation
	var myInterval = setInterval( function(){
		steps++;
		// change la position du joueur
		if (sens ==DIRECTION.BAS){ 
			joueur.posy += 0.05;
			joueur.posy = Number(joueur.posy.toFixed(2));
		}else if(sens ==DIRECTION.GAUCHE){	
			joueur.posx -= 0.05;
			joueur.posx = Number(joueur.posx.toFixed(2));
		}else if(sens ==DIRECTION.DROITE){
			joueur.posx += 0.05;
			joueur.posx = Number(joueur.posx.toFixed(2));
		}else if(sens ==DIRECTION.HAUT){
			joueur.posy -= 0.05;
			joueur.posy = Number(joueur.posy.toFixed(2));
		}
		
		// si le joueur a fait une animation complete , stop le mouvement, sinon, continue le mouvement
		if ( steps%5 == 3){joueur.step=(joueur.step+1)%4}
		if (steps == 20){
			joueur.step=0;
			joueur.canmove = true;
			clearInterval(myInterval);
		}

	}, 40);
	
}

// v�rifier les int�ractions autour d'un personnage
Personnage.prototype.gettexte = function(carte){

	// texte du perso le plus proche
	for( var p=0;p<carte.personnages.length;p++){
		// un personnage a droite
		if( (carte.personnages[p].posy - this.posy == 0) && (carte.personnages[p].posx - this.posx == 1)){
			texte = carte.personnages[p].texte;
			carte.personnages[p].direction = DIRECTION.GAUCHE;
			this.direction = DIRECTION.DROITE;
			carte.personnages[p].canmove = false;
			nomperso = carte.personnages[p].name;
			break;
		// un personnage a gauche
		}else if( (carte.personnages[p].posy - this.posy == 0) && (carte.personnages[p].posx - this.posx == -1)){
			texte = carte.personnages[p].texte;
			carte.personnages[p].direction = DIRECTION.DROITE;
			carte.personnages[p].canmove = false;
			this.direction = DIRECTION.GAUCHE;
			nomperso = carte.personnages[p].name;
			break;
		// un personnage en bas ( le haut et le bas sont invers� )
		}else if( (carte.personnages[p].posy - this.posy == 1) && (carte.personnages[p].posx - this.posx == 0)){
			texte = carte.personnages[p].texte;
			carte.personnages[p].direction = DIRECTION.HAUT;
			carte.personnages[p].canmove = false;
			this.direction = DIRECTION.BAS;
			nomperso = carte.personnages[p].name;
			break;
		// un personnage en haut du joueur
		}else if( (carte.personnages[p].posy - this.posy == -1) && (carte.personnages[p].posx - this.posx == 0)){
			texte = carte.personnages[p].texte;
			carte.personnages[p].direction = DIRECTION.BAS;
			carte.personnages[p].canmove = false;
			this.direction = DIRECTION.HAUT;
			nomperso = carte.personnages[p].name;
			break;
		}else{
			texte = "";
		}
	}

	// texte de la pancarte la plus proche
	if (texte == ""){
		for( var p=0;p<carte.pancartes.length;p++){
			// pancarte vers le bas
			if( (carte.pancartes[p].direction == DIRECTION.BAS) && (carte.pancartes[p].posy - this.posy == -1) && (carte.pancartes[p].posx - this.posx == 0) ){
				this.direction = DIRECTION.HAUT;
				texte = carte.pancartes[p].texte;
				nomperso = "pancarte";
				break;
			// pancarte vers le haut
			}else if( (carte.pancartes[p].direction == DIRECTION.HAUT) && (carte.pancartes[p].posy - this.posy == 1) && (carte.pancartes[p].posx - this.posx == 0) ){
				this.direction = DIRECTION.BAS;
				texte = carte.pancartes[p].texte;
				nomperso = "pancarte";
				break;
			// pancarte vers la gauche
			}else if( (carte.pancartes[p].direction == DIRECTION.GAUCHE) && (carte.pancartes[p].posy - this.posy == 0) && (carte.pancartes[p].posx - this.posx == 1)  ){
				this.direction = DIRECTION.DROITE;
				texte = carte.pancartes[p].texte;nomperso = "pancarte";
				break;
			// pancarte vers la droite
			}else if( (carte.pancartes[p].direction == DIRECTION.DROITE) && (carte.pancartes[p].posy - this.posy == 0) && (carte.pancartes[p].posx - this.posx == -1)  ){
				this.direction = DIRECTION.GAUCHE;
				texte = carte.pancartes[p].texte;nomperso = "pancarte";
				break;
			}else{
				texte = "";
			}
		}
	}

	// ou texte du joueur si il n'y a rien
	if (texte == ""){
		texte = this.texte;
		nomperso = "joueur";
	}

	return texte;

}

// TODO trouver un ovale pour afficher le texte
// afficher le texte
Personnage.prototype.parler = function(carte){

	// si le personnage n'est pas d�ja dans un dialogue
	if( textcount ==0){
		
		// immobilise le personnage
		this.canmove = false;
		texte = this.gettexte(carte);

		splited = texte.split(" / ");
		textetaille = splited.length;
	
		// affichage 1er texte
		splitedbis = splited[0].split(" // ");
		for( var k =0;k<splitedbis.length;k++){
			context2.fillText( splitedbis[k],10,15+k*15);
		}
		context2.fillText( textcount+1 + " / " + textetaille + " " + nomperso,10,canvas2.height -25);
		context2.fillText( "espace pour continuer",10,canvas2.height -15);
		textcount++;
	// affichage texte interm�diaire du dialogue	
	}else if( textcount < textetaille ) {
		context2.clearRect(0, 0, canvas2.width, canvas2.height);
		splitedbis = splited[textcount].split(" // ");
		for( var k =0;k<splitedbis.length;k++){
			context2.fillText( splitedbis[k],10,15+k*15);
		}
		context2.fillText( textcount+1 + " / " + textetaille+ " " + nomperso,10,canvas2.height -25);
		context2.fillText( "espace pour continuer",10,canvas2.height -15);
		textcount++;
	// fermeture dialogue
	}else{
		context2.clearRect(0, 0, canvas2.width, canvas2.height);
		for( var p=0;p<carte.personnages.length;p++){
			carte.personnages[p].canmove = true;
		}
		// techniquement, ca ne permet de bouger que au personnage auquel on a parl�
		// mais l'ordre peut varier pendant le dialogue si lordre des personnages selon Y change 
		textcount=0;
		textetaille=1;
	}

}





// -------------------------------------------------
// ----------- d�finition des personnages ----------
// -------------------------------------------------

//TODO mettre tous ca dans un document a part peut etre?
var joueur = new Personnage('Joueur',"Joueur.png",7 ,7 , DIRECTION.BAS,0,true,"Il n'y a personne avec qui parler ici.")

// map 01
var tony = new Personnage('Tony',"Tony.png", 11, 1 , DIRECTION.DROITE ,0,true,"Bonjour ! Les personnes te parlerons de Garrett. / Si tu es perdu, les pancartes // te donneront le temps et l'endroit o� tu te trouves. / Tu devrais aussi aller voir Sheila // pour un autre conseil.")

var sheila = new Personnage('Sheila',"Sheila.png", 1, 11 , DIRECTION.DROITE ,0,true,"Bonjour ! / Tu es � la recherche de Garrett ? / Il est pass� par ici il y a 3 ans. / C'est � ce moment que Garrett est // entr� en master de physique. / Tu peux partir au Nord vers le futur // pour d�couvrir ses exp�riences professionnels. / Ou alors, descendre au Sud vers le pass� // pour en apprendre plus sur lui. / Bon jeu !!")

/*

Personnage.prototype.deplacerbis = function( carte,sens ){
	
	if(this.canmove){ // v�rifie que le personnage n'effectue pas d�j� un mouvement
		this.canmove = false;
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
				this.canmove = true;
				clearInterval(myInterval);
			}else{
				this.step ++;
			}
		}, 100);
	}
	
}
*/

