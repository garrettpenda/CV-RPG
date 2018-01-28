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
function Personnage(name,url,x,y,direction,step,canmove,immobil,texte){

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
	this.immobil = immobil;
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
	if ( sens==DIRECTION.BAS && ( carte.matrice[this.posy+1][this.posx]==1 || (this.posy+1)> carte.hauteur ) ){
		return true;  }		
	else if ( sens==DIRECTION.GAUCHE && ( carte.matrice[this.posy][this.posx-1]== 1 || (this.posx-1)< 0 )){
		return true;  }
	else if ( sens==DIRECTION.DROITE && ( carte.matrice[this.posy][this.posx+1]== 1 || (this.posx+1)> carte.largeur-0.1 ) ){
		return true;  }
	else if( sens== DIRECTION.HAUT && ( carte.matrice[this.posy-1][this.posx]== 1 || (this.posy-1) < 0) ){
		return true;  }
	else { 
		return false; }
	
}

// d�placer un personnage
Personnage.prototype.deplacer = function(sens,carte){

	// v�rifie que le personnage n'effectue pas d�j� un mouvement
	if(!this.canmove || this.immobil ){
		return false;
	}

	// v�rifie la collision avant le d�placement
	if ( this.collision(sens,carte) ){
		this.direction = sens;
		return false;
	}

	// la case qu'a quitter le personnage n'est plus un mur si ce nest pas une case changement de map
	if( String(carte.matrice[this.posy][this.posx]).length==1 ){
		carte.matrice[this.posy][this.posx]=0;
	}

	// la case sur laquelle va le personnage devient un mur si ce nest pas une case changement de map
	// evite que deux perso qui bouge en meme temps puisse aller sur la meme case
	// NOTE : deux personnage peuvent aller en meme temps sur une case changement de map
	if (sens ==DIRECTION.BAS){ // bas
		if( String(carte.matrice[this.posy+1][this.posx]).length==1 ){
			carte.matrice[this.posy+1][this.posx]=1;
		}
	}else if(sens ==DIRECTION.GAUCHE){ // gauche	
		if( String(carte.matrice[this.posy][this.posx-1]).length==1 ){
			carte.matrice[this.posy][this.posx-1]=1;
		}
	}else if(sens ==DIRECTION.DROITE){ // droite
		if( String(carte.matrice[this.posy][this.posx+1]).length==1 ){
			carte.matrice[this.posy][this.posx+1]=1;
		}
	}else if(sens ==DIRECTION.HAUT){ // haut
		if( String(carte.matrice[this.posy-1][this.posx]).length==1 ){
			carte.matrice[this.posy-1][this.posx]=1;
		}
	}
	this.canmove = false;
	this.direction = sens;
	
	var steps = 0;
	var self = this;
	// lance l'animation
	var myInterval = setInterval( function(){
		steps++;
		// change la position du joueur
		if (sens ==DIRECTION.BAS){ 
			self.posy += 0.05;
			self.posy = Number(self.posy.toFixed(2));
		}else if(sens ==DIRECTION.GAUCHE){	
			self.posx -= 0.05;
			self.posx = Number(self.posx.toFixed(2));
		}else if(sens ==DIRECTION.DROITE){
			self.posx += 0.05;
			self.posx = Number(self.posx.toFixed(2));
		}else if(sens ==DIRECTION.HAUT){
			self.posy -= 0.05;
			self.posy = Number(self.posy.toFixed(2));
		}
		
		// si le joueur a fait une animation complete , stop le mouvement, sinon, continue le mouvement
		if ( steps%5 == 3){self.step=(self.step+1)%4}
		if (steps == 20){
			self.step=0;
			self.canmove = true;
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

// TODO proposer � des gens r�els de laisser leur coordonn�es.
// TODO mettre tous ca dans un document a part peut etre?
var joueur = new Personnage('Joueur',"Joueur.png",4 ,4 , DIRECTION.BAS,0,true,false,"Il n'y a personne avec qui parler ici.")

// map 01
var tony = new Personnage('Tony',"Tony.png", 11, 1 , DIRECTION.DROITE ,0,true,false,"Bonjour ! // Bienvenue dans le CV RPG de Garrett. // Tu y trouvera bien sur / des informations sur sa carri�re mais aussi / si tu parles avec les gens, des informations plus personnelles. / Ce jeu est construit comme une frise chronologique. // A savoir que tu te d�place dans sa vie // temporellement de haut en bas et spatialement de gauche � droite. / Si tu veux savoir a quel endroit ou annee tu te trouves, // lis les pancartes. / Tu devrais aussi aller voir Sheila // pour un autre conseil.")

var sheila = new Personnage('Sheila',"Sheila.png", 1, 11 , DIRECTION.DROITE ,0,true,false,"Bonjour ! / Tu es � la recherche de Garrett ? / Il est pass� par ici il y a 3 ans. / C'est � ce moment que Garrett est // entr� en master de physique. / Tu peux partir au Nord vers le futur // pour d�couvrir ses exp�riences professionnels. / Ou alors, descendre au Sud vers le pass� pour d�couvrir son cursus. / Si tu veux en apprendre plus sur son caract�re, // je te conseille de partir au Sud. // C'est la qu'il a mis le plus danecdote sur lui. / Bon jeu !!")

var Constant = new  Personnage('Constant',"Sheila.png", 16, 10 , DIRECTION.DROITE ,0,true,true,"Bonjour ! / Je m'apelle Constant. / Moi et Garrett etions en // license de physique ensemble. / Tu es actuellement // sur le parc de Valrose. / Garrett jouait avec nous a // la bellote contree pendant // ses heures de permanence // avec nous ici. / D'ailleurs, ca lui manque beaucoup, // joue avec lui si tu as l'occasion.")

var Romain = new Personnage('Romain',"Sheila.png", 17, 11 , DIRECTION.HAUT ,0,true,true,"Ma main n'est pas geniale, // j'espere que mon partenaire // a un meilleur jeu.");
var Jeremie = new Personnage('Jeremie',"Sheila.png", 17, 9 , DIRECTION.BAS ,0,true,true,"120 coeur.")

var Vincent = new Personnage('Vincent',"Tony.png", 4, 8 , DIRECTION.HAUT ,0,true,true,"Bonjour, je m'apelle Vincent. / J'�tais dans le master modelisation et calcul // scientifique avec Garrett. / Moi et Garrett avons gard� contact. // On joue souvent � Starcraft ensemble. / Il joue terran et moi zerg. / Demande lui son battle tag si tu veux ausi jouer avec lui.")


var Mederic = new Personnage('Mederic',"Tony.png", 5, 2, DIRECTION.BAS ,0,true,true,"Bonjour, je suis  Mederic, le responsable du master // mod�lisation et calcul scinetifique ou MCS. / Le but du master est de faire de l'informatique // applique a la physique. // Par exemple, simuler des modeles de populations, //  des torsions de poutres en metal ou // encore des ondes comme de vagues ou des tremblement de terres. / Ce master donc principalement acces sur la pysique // mais avec des notions d'informatiques.")

var Simon = new Personnage('Simon',"Tony.png", 2, 8 , DIRECTION.HAUT ,0,true,true,"Bonjour, je m'apelle Simon. / J'ai rejoint Garrett et Vincent dans le master MCS en deuxi�me ann�e. / Tu as surement remarqu� que cette carte est la m�me que la pr�c�dente. / C'est parce que nos cours �tais dans la m�me salle // sauf qu'il ont r�par� l'ascenseur. / Nous n'avions plus � monter � chaque fois les 5 �tages � pied. / Quel soulagement !")

var Reparateur = new Personnage('Reparateur',"Tony.png", 5, 2 , DIRECTION.DROITE ,0,true,true,"L'ascenseur est cass�. // Il sera r�par� d'ici � l'ann�e prochaine. / Si tu veux en savoir plus sur la classe du M2 // de Garrett, tu vas devoir monter les 4 �tages � // pied. / Je sais, c'est long mais Garrett l'as bien // fait pendant toute l'ann�e sans compter les pr�c�dentes. / Le pauvre, d�j� qu'il se levait � 6h tout les jours // pour avoir son bus...")

var Remi = new Personnage('Remi',"Tony.png", 2, 4 , DIRECTION.HAUT ,0,true,true, "Je suis R�mi.")

