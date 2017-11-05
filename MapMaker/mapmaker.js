// ============================================================
// ==================== initilisation =========================
// ============================================================

// get the dimensions

var long = document.getElementById("longueur").value;
var larg = document.getElementById("largeur").value;
var mapnumber = document.getElementById("mapnumber").value;

// canvas arriere plan

var canvas = document.getElementById("BGimage");
var context = canvas.getContext('2d');

var canvas2 = document.getElementById("BGselectedimage");
var context2 = canvas2.getContext('2d');

var canvas3 = document.getElementById("BGselectedTile");
var context3 = canvas3.getContext('2d');

canvas.width = long*32;
canvas.height = larg*32;

// canvas premier plan

var canvas4 = document.getElementById("FGimage");
var context4 = canvas4.getContext('2d');

var canvas5 = document.getElementById("FGselectedimage");
var context5 = canvas5.getContext('2d');

var canvas6 = document.getElementById("FGselectedTile");
var context6 = canvas6.getContext('2d');

var canvas7 = document.getElementById("resultImage");
var context7 = canvas7.getContext('2d');

canvas4.width = long*32;
canvas4.height = larg*32;

canvas7.width = long*32;
canvas7.height = larg*32;


// fill the matrices with 0
var pathmap = initialisermatrice(long,larg,2);
var arrowmap= initialisermatrice(long,larg,0);
var collisionmap=initialisermatrice(long,larg,0);

var mapbg1=initialisermatrice(long,larg,0);
var mapbg2=initialisermatrice(long,larg,0);
var mapbg3=initialisermatrice(long,larg,0);
var mapbg4=initialisermatrice(long,larg,0);
var mapbg5=initialisermatrice(long,larg,0);

var mapfg1=initialisermatrice(long,larg,0);
var mapfg2=initialisermatrice(long,larg,0);
var mapfg3=initialisermatrice(long,larg,0);
var mapfg4=initialisermatrice(long,larg,0);
var mapfg5=initialisermatrice(long,larg,0);

drawbackgroundimage();
selectnewimageforbackground();
drawfirstgroundimage();
selectnewimageforfirstground();
drawresultimage();

// ============================================================
// ================== event listenner =========================
// ============================================================

canvas.addEventListener('click', function(event) {
	var elemLeft = canvas.offsetLeft, elemTop = canvas.offsetTop;
	var x = event.pageX - elemLeft, y = event.pageY - elemTop;
	document.getElementById("BGinfo1").innerHTML = x + "/" + y;

        // prendre le numéro du tile selectionne
	var numberx = Math.floor(x/32);// numero sur la ligne
	var numbery = Math.floor(y/32);// numero sur la colonne
	document.getElementById("BGinfo2").innerHTML = numbery + '/' + numberx;

        // le rentrer dans la matrice correspondant à l'endroit ou on a cliquer
	if (document.getElementById("imgBG1").checked) {
		mapbg1[numbery][numberx] =  document.getElementById("BGtilenumber").innerHTML;
	} else if (document.getElementById("imgBG2").checked) {
		mapbg2[numbery][numberx] =  document.getElementById("BGtilenumber").innerHTML;
	} else if (document.getElementById("imgBG3").checked) {
		mapbg3[numbery][numberx] =  document.getElementById("BGtilenumber").innerHTML;
	} else if (document.getElementById("imgBG4").checked) {
		mapbg4[numbery][numberx] =  document.getElementById("BGtilenumber").innerHTML;
	} else if (document.getElementById("imgBG5").checked) {
		mapbg5[numbery][numberx] =  document.getElementById("BGtilenumber").innerHTML;
	} else if (document.getElementById("path").checked) {
		pathmap[numbery][numberx] =  document.getElementById("BGtilenumber").innerHTML;
	} else if (document.getElementById("arrows").checked) {
		arrowmap[numbery][numberx] =  document.getElementById("BGtilenumber").innerHTML;
	} else if (document.getElementById("collision").checked) {
		collisionmap[numbery][numberx] = 1 - collisionmap[numbery][numberx];
	}

	drawbackgroundimage();

	drawresultimage ();

}, false);

canvas4.addEventListener('click', function(event) {
	var elemLeft = canvas4.offsetLeft, elemTop = canvas4.offsetTop;
	var x = event.pageX - elemLeft, y = event.pageY - elemTop;
	document.getElementById("FGinfo1").innerHTML = x + "/" + y;

        // prendre le numéro du tile selectionne
	var numberx = Math.floor(x/32);// numero sur la ligne
	var numbery = Math.floor(y/32);// numero sur la colonne
	document.getElementById("FGinfo2").innerHTML = numbery + '/' + numberx;

        // le rentrer dans la matrice correspondant à l'endroit ou on a cliquer
	if (document.getElementById("imgFG1").checked) {
		mapfg1[numbery][numberx] =  document.getElementById("FGtilenumber").innerHTML;
	} else if (document.getElementById("imgFG2").checked) {
		mapfg2[numbery][numberx] =  document.getElementById("FGtilenumber").innerHTML;
	} else if (document.getElementById("imgFG3").checked) {
		mapfg3[numbery][numberx] =  document.getElementById("FGtilenumber").innerHTML;
	} else if (document.getElementById("imgFG4").checked) {
		mapfg4[numbery][numberx] =  document.getElementById("FGtilenumber").innerHTML;
	} else if (document.getElementById("imgFG5").checked) {
		mapfg5[numbery][numberx] =  document.getElementById("FGtilenumber").innerHTML;
	}

	drawfirstgroundimage();


	drawresultimage ();

}, false);


document.getElementById('downloadFG').addEventListener('click', function() {
    downloadCanvas(this, 'FGimage', 'map' + document.getElementById("mapnumber").value + 'firstground.png');
}, false);

document.getElementById('downloadBG').addEventListener('click', function() {
    downloadCanvas(this, 'BGimage', 'map' + document.getElementById("mapnumber").value + 'background.png');
}, false);


var fileInput = document.querySelector('#file');

fileInput.addEventListener('change', function() {

	var reader = new FileReader();

	reader.addEventListener('load', function() {
		
		importresults(reader.result);
		//alert('Contenu du fichier "' + fileInput.files[0].name + '" :\n\n' + reader.result);
	});

	reader.readAsText(fileInput.files[0]);

	//document.getElementById("jsonresult").innerHTML = reader.result;

});


// ============================================================
// ====================== fonctions ===========================
// ============================================================


// dessiner du cadrillage
function dessinercadrillage( canvasname, contextname ){

	for (i=1;i<canvasname.height;i++){
		contextname.beginPath();
		contextname.moveTo(0,32*i);
		contextname.lineTo(canvasname.width,32*i);
		contextname.stroke();
	}
	for (i=1;i<canvasname.width;i++){
		contextname.beginPath();
		contextname.moveTo(32*i,0);
		contextname.lineTo(32*i,canvasname.height);
		contextname.stroke();
	}
}

// intialiser une matrice
function initialisermatrice( long, larg, value ){

	var result=[];

	for(j=0;j< larg;j++){
		var line = [];
		for(i=0;i< long;i++){
			line.push(value);
   		}
   		result.push(line);
	}
	return result;
}

// function dessiner matrice
function ecrirematrice( matrice, id,matricename ){
	document.getElementById(id).innerHTML =  matricename + "=[ <br>";
	for(j=0;j< matrice.length;j++){
		document.getElementById(id).innerHTML = document.getElementById(id).innerHTML +"[";

		for(i=0;i< matrice[0].length;i++){
			var f = ",";
			if (i==(matrice[0].length-1) && j==matrice.length-1){
				f = "]];";
			}
			else if (i==(matrice[0].length-1)){
				f = "],";
			}
			var spaces = "" + " ".repeat(4 - (matrice[j][i].toString().length));
			document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + spaces + matrice[j][i] + f;
		}
		document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + "<br>";
	}
}

// fonction dessiner couche
function dessinermatrice( matrice,contextname, imageurl ){

	var image = new Image();
	image.src = "images/" + imageurl;
	var nbx = image.width/32;
	var nby = image.height/32;
	var nbmax = nbx * nby;
	
	for( j=0 ; j<matrice.length ; j++ ){
		for( i=0 ; i< matrice[0].length ; i++ ){
		
			if( matrice[j][i]-1 < nbmax){ // si le nombre est plus grand que le nombre de tileset
				var sx = 32*((matrice[j][i]-1)%nbx);
				var sy = 32*(Math.floor( ( matrice[j][i]-1)/nbx));
				contextname.drawImage(image, sx, sy, 32, 32, 32*i, 32*j, 32, 32);
			}
		}
	}
}


function hideshow(idhtml){
	// si revelé, le cacher
	if(document.getElementById(idhtml).style.display == ''){document.getElementById(idhtml).style.display = 'none';}
	//si caché, le révéler
	else if(document.getElementById(idhtml).style.display == 'none'){document.getElementById(idhtml).style.display = '';}
}

function exportresults(){
	
	var matrices = [];

	matrices.push(getjsonmap('pathmap', "chemin.png", pathmap));
	matrices.push(getjsonmap('arrowmap', "arrow.png", arrowmap));
	matrices.push(getjsonmap('collisionmap', "arrow.png", collisionmap));

	matrices.push(getjsonmap('mapbg1', document.getElementById("imageBG1").value, mapbg1));
	matrices.push(getjsonmap('mapbg2', document.getElementById("imageBG2").value, mapbg2));
	matrices.push(getjsonmap('mapbg3', document.getElementById("imageBG3").value, mapbg3));
	matrices.push(getjsonmap('mapbg4', document.getElementById("imageBG4").value, mapbg4));
	matrices.push(getjsonmap('mapbg5', document.getElementById("imageBG5").value, mapbg5));

	matrices.push(getjsonmap('mapfg1', document.getElementById("imageFG1").value, mapfg1));
	matrices.push(getjsonmap('mapfg2', document.getElementById("imageFG2").value, mapfg2));
	matrices.push(getjsonmap('mapfg3', document.getElementById("imageFG3").value, mapfg3));
	matrices.push(getjsonmap('mapfg4', document.getElementById("imageFG4").value, mapfg4));
	matrices.push(getjsonmap('mapfg5', document.getElementById("imageFG5").value, mapfg5));

	var result = {"mapnumber": mapnumber, "long":long , "larg":larg, "matrices": matrices};

	//document.getElementById('jsonresult').innerHTML = JSON.stringify(result);

	document.getElementById("cboxBGcad1").checked = false;
	document.getElementById("cboxFGcad1").checked = false;
	drawbackgroundimage();
	drawfirstgroundimage();

	document.getElementById("downloadBG").click();
	document.getElementById("downloadFG").click();
	download(JSON.stringify(result),'map' + document.getElementById("mapnumber").value + '.json','application/json')
}

function getjsonmap ( name, imageurl, matrice) {
	var jsonmatrice = { "name":name , "image":imageurl, "matrice":matrice};
	return jsonmatrice;
}


function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}


function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}


function selectnewimageforbackground() {

	// draw image on canvas 2
	var image = new Image();
	if (document.getElementById("path").checked) {
		image.src = "images/chemin.png";
	} else if (document.getElementById("arrows").checked) {
		image.src = "images/arrow.png";
	} else if (document.getElementById("collision").checked) {
		image.src = "images/arrow.png";
	} else if (document.getElementById("imgBG2").checked) {
		image.src = "images/" + document.getElementById("imageBG2").value;
	} else if (document.getElementById("imgBG3").checked) {
		image.src = "images/" + document.getElementById("imageBG3").value;
	} else if (document.getElementById("imgBG4").checked) {
		image.src = "images/" + document.getElementById("imageBG4").value;
	} else if (document.getElementById("imgBG5").checked) {
		image.src = "images/" + document.getElementById("imageBG5").value;
	} else if (document.getElementById("imgBG1").checked) {
		image.src = "images/" + document.getElementById("imageBG1").value;;
	}

	canvas2.width = image.width;
	canvas2.height = image.height;
	context2.drawImage(image,0, 0, image.width, image.height);

	if (document.getElementById("cboxBGcad2").checked) {
		dessinercadrillage(canvas2, context2);
	}

	canvas2.addEventListener('click', function(event) {
		var elemLeft = canvas2.offsetLeft, elemTop = canvas2.offsetTop;
		var x = event.pageX - elemLeft, y = event.pageY - elemTop;
	
        	var numberx = Math.floor(x/32);// numero sur la ligne
		var numbery = Math.floor(y/32);// numero sur la colonne
		var nbx = image.width/32; // nombre element par ligne

		context3.clearRect(0, 0,32, 32);
		context3.drawImage(image, 32*numberx,32*numbery, 32, 32, 0, 0, 32, 32);
		document.getElementById("BGtilenumber").innerHTML = numbery*nbx + numberx + 1;
	}, false);
}


function selectnewimageforfirstground() {

	// draw image on canvas 5
	var image2 = new Image();
	if (document.getElementById("imgFG2").checked) {
		image2.src = "images/" + document.getElementById("imageFG2").value;
	} else if (document.getElementById("imgFG3").checked) {
		image2.src = "images/" + document.getElementById("imageFG3").value;
	} else if (document.getElementById("imgFG4").checked) {
		image2.src = "images/" + document.getElementById("imageFG4").value;
	} else if (document.getElementById("imgFG5").checked) {
		image2.src = "images/" + document.getElementById("imageFG5").value;
	} else if (document.getElementById("imgFG1").checked) {
		image2.src = "images/" + document.getElementById("imageFG1").value;
	}
	canvas5.width = image2.width;
	canvas5.height = image2.height;
	context5.drawImage(image2,0, 0);

	if (document.getElementById("cboxFGcad2").checked) {
		dessinercadrillage(canvas5, context5);
	}

	canvas5.addEventListener('click', function(event) {
		var elemLeftbis = canvas5.offsetLeft, elemTopbis = canvas5.offsetTop;
		var xbis = event.pageX - elemLeftbis, ybis = event.pageY - elemTopbis;
	
        	var numberxbis = Math.floor(xbis/32);// numero sur la ligne
		var numberybis = Math.floor(ybis/32);// numero sur la colonne
		var nbxbis = image2.width/32; // nombre element par ligne

		context6.clearRect(0, 0,32, 32);
		context6.drawImage(image2, 32*numberxbis,32*numberybis, 32, 32, 0, 0, 32, 32);
		document.getElementById("FGtilenumber").innerHTML = numberybis*nbxbis + numberxbis + 1;
	}, false);
}

function drawbackgroundimage() {

	context.clearRect(0, 0, canvas.width, canvas.height);
	// draw image on bg canvas 1
	if (document.getElementById("cboxpath").checked){
		dessinermatrice(pathmap,context, "chemin.png");
	}
	if (document.getElementById("cboxBG1").checked){
		dessinermatrice( mapbg1,context, document.getElementById("imageBG1").value);
	}
	if (document.getElementById("cboxBG2").checked){
		dessinermatrice( mapbg2,context, document.getElementById("imageBG2").value);
	}
	if (document.getElementById("cboxBG3").checked){
		dessinermatrice( mapbg3,context, document.getElementById("imageBG3").value);
	}
	if (document.getElementById("cboxBG4").checked){
		dessinermatrice( mapbg4,context, document.getElementById("imageBG4").value);
	}
	if (document.getElementById("cboxBG5").checked){
		dessinermatrice( mapbg5,context, document.getElementById("imageBG5").value);
	}
	if (document.getElementById("cboxarrows").checked){
		dessinermatrice(arrowmap,context, "arrow.png");
	}

	// dessiner les cases murs 
	if (document.getElementById("cboxcollision").checked){
		for(j=0;j< collisionmap.length;j++){
			for(i=0;i< collisionmap[0].length;i++){
				if(collisionmap[j][i]==1){
					context.fillRect(32*i,32*j,32,32);
				}
			}
		}
	}	


	if (document.getElementById("cboxBGcad1").checked) {
		dessinercadrillage(canvas, context);
	}

	// draw the matrice
	ecrirematrice(pathmap,"matPATH","pathmap");
	ecrirematrice(arrowmap,"matARROW","arrowmap");
	ecrirematrice(collisionmap,"matCOLLISION","collisionmap");

	ecrirematrice(mapbg1,"matBG1","matbg1");
	ecrirematrice(mapbg2,"matBG2","matbg2");
	ecrirematrice(mapbg3,"matBG3","matbg3");
	ecrirematrice(mapbg4,"matBG4","matbg4");
	ecrirematrice(mapbg5,"matBG5","matbg5");

}

function drawfirstgroundimage() {

	// draw image on canvas 4

	context4.clearRect(0, 0, canvas.width, canvas.height);
	if (document.getElementById("cboxFG1").checked){
		dessinermatrice( mapfg1,context4, document.getElementById("imageFG1").value);
	}
	if (document.getElementById("cboxFG2").checked){
		dessinermatrice( mapfg2,context4, document.getElementById("imageFG2").value);
	}
	if (document.getElementById("cboxFG3").checked){
		dessinermatrice( mapfg3,context4, document.getElementById("imageFG3").value);
	}
	if (document.getElementById("cboxFG4").checked){
		dessinermatrice( mapfg4,context4, document.getElementById("imageFG4").value);
	}
	if (document.getElementById("cboxFG5").checked){
		dessinermatrice( mapfg5,context4, document.getElementById("imageFG5").value);
	}


	if (document.getElementById("cboxFGcad1").checked) {
		dessinercadrillage(canvas4, context4);	
	}

	ecrirematrice(mapfg1,"matFG1","matfg1");
	ecrirematrice(mapfg2,"matFG2","matfg2");
	ecrirematrice(mapfg3,"matFG3","matfg3");
	ecrirematrice(mapfg4,"matFG4","matfg4");
	ecrirematrice(mapfg5,"matFG5","matfg5");

}

function drawresultimage (){

	// draw the results
	dessinermatrice( pathmap,context7, "chemin.png");

	dessinermatrice( mapbg1,context7, document.getElementById("imageBG1").value);
	dessinermatrice( mapbg2,context7, document.getElementById("imageBG2").value);
	dessinermatrice( mapbg3,context7, document.getElementById("imageBG3").value);
	dessinermatrice( mapbg4,context7, document.getElementById("imageBG4").value);
	dessinermatrice( mapbg5,context7, document.getElementById("imageBG5").value);

	dessinermatrice( arrowmap,context7, "arrow.png");

	dessinermatrice( mapfg1,context7, document.getElementById("imageFG1").value);
	dessinermatrice( mapfg2,context7, document.getElementById("imageFG2").value);
	dessinermatrice( mapfg3,context7, document.getElementById("imageFG3").value);
	dessinermatrice( mapfg4,context7, document.getElementById("imageFG4").value);
	dessinermatrice( mapfg5,context7, document.getElementById("imageFG5").value);

}

function resetbgselectedtile() {

	document.getElementById('BGtilenumber').innerHTML=0;
	context3.clearRect(0, 0, canvas3.width, canvas3.height);
}


function resetfgselectedtile() {

	document.getElementById('FGtilenumber').innerHTML=0;
	context6.clearRect(0, 0, canvas6.width, canvas6.height);
}


function importresults(text) {

	
	
	var jsonresult = JSON.parse(text);
	

	long = jsonresult.long;
	larg = jsonresult.larg;
	mapnumber = jsonresult.mapnumber;
	
	document.getElementById("longueur").value = long;
	document.getElementById("largeur").value = larg;
	document.getElementById("mapnumber").value = mapnumber;

	for ( j=0 ; j< jsonresult.matrices.length ; j++ ) {

		//alert(jsonresult.matrices[j].name + jsonresult.matrices[j].image + jsonresult.matrices[j].matrice[0] );

		if (jsonresult.matrices[j].name === "pathmap") {
			pathmap = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name === "arrowmap") {
			arrowmap = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name === "collisionmap") {
			collisionmap = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapbg1") {
			document.getElementById("imageBG1").value = jsonresult.matrices[j].image;
			mapbg1 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapbg2") {
			document.getElementById("imageBG2").value = jsonresult.matrices[j].image;
			mapbg2 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapbg3") {
			document.getElementById("imageBG3").value = jsonresult.matrices[j].image;
			mapbg3 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapbg4") {
			document.getElementById("imageBG4").value = jsonresult.matrices[j].image;
			mapbg4 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapbg5") {
			document.getElementById("imageBG5").value = jsonresult.matrices[j].image;
			mapbg5 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapfg1") {
			document.getElementById("imageFG1").value = jsonresult.matrices[j].image;
			mapfg1 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapfg2") {
			document.getElementById("imageFG2").value = jsonresult.matrices[j].image;
			mapfg2 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapfg3") {
			document.getElementById("imageFG3").value = jsonresult.matrices[j].image;
			mapfg3 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapfg4") {
			document.getElementById("imageFG4").value = jsonresult.matrices[j].image;
			mapfg4 = jsonresult.matrices[j].matrice;
		} else if (jsonresult.matrices[j].name ==="mapfg5") {
			document.getElementById("imageFG5").value = jsonresult.matrices[j].image;
			mapfg5 = jsonresult.matrices[j].matrice;
		}
	} 

	drawbackgroundimage();
	selectnewimageforbackground();
	drawfirstgroundimage();
	selectnewimageforfirstground();
	drawresultimage ();

}








