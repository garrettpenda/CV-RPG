var canvas3 = document.getElementById("select");
var context3 = canvas3.getContext('2d');

// get the dimensions

var long = document.getElementById("long").value;
var larg = document.getElementById("larg").value;


var canvas = document.getElementById("map");
var context = canvas.getContext('2d');
canvas.width = long*32;
canvas.height = larg*32;
canvas.addEventListener('click', function(event) {
	var elemLeft = canvas.offsetLeft, elemTop = canvas.offsetTop;
	var x = event.pageX - elemLeft, y = event.pageY - elemTop;
	document.getElementById("test").innerHTML = x + "/" + y;

        // prendre le numéro du tile selectionne
	var numberx = Math.floor(x/32);// numero sur la ligne
	var numbery = Math.floor(y/32);// numero sur la colonne
	document.getElementById("test").innerHTML = numbery + '/' + numberx;

        // le rentrer dans la matrice correspondant à l'endroit ou on a cliquer
	if (document.getElementById("img1").checked) {
		map1[numbery][numberx] =  document.getElementById("test2").innerHTML;
	} else if (document.getElementById("img2").checked) {
		map2[numbery][numberx] =  document.getElementById("test2").innerHTML;
	} else if (document.getElementById("img3").checked) {
		map3[numbery][numberx] =  document.getElementById("test2").innerHTML;
	} else if (document.getElementById("img4").checked) {
		map4[numbery][numberx] =  document.getElementById("test2").innerHTML;
	} else if (document.getElementById("img5").checked) {
		map5[numbery][numberx] =  document.getElementById("test2").innerHTML;
	}

}, false);

var canvas2 = document.getElementById("image");
var context2 = canvas2.getContext('2d');
canvas2.addEventListener('click', function(event) {
	var elemLeft = canvas2.offsetLeft, elemTop = canvas2.offsetTop;
	var x = event.pageX - elemLeft, y = event.pageY - elemTop;
	
        var numberx = Math.floor(x/32);// numero sur la ligne
	var numbery = Math.floor(y/32);// numero sur la colonne
	var nbx = image.width/32; // nombre element par ligne

	context3.clearRect(0, 0,32, 32);
	context3.drawImage(image, 32*numberx,32*numbery, 32, 32, 0, 0, 32, 32);
	document.getElementById("test2").innerHTML = numbery*nbx + numberx + 1;
}, false);
		


// fill the matrices with 0
var map1=[];
var map2=[];
var map3=[];
var map4=[];
var map5=[];
for(j=0;j< larg;j++){
   var line = [], line2 = [], line3 = [], line4 = [], line5 = [];
   for(i=0;i< long;i++){
      line.push(2);
      line2.push(1);
	line3.push(1);
	line4.push(1);
	line5.push(1);
   }
   map1.push(line);
   map2.push(line2);
   map3.push(line3);
   map4.push(line4);
   map5.push(line5);
}

// dessiner la maps ( 60fps )
setInterval(function() {
         context.clearRect(0, 0,canvas.width, canvas.height);
	// draw image on canvas 1
if (document.getElementById("cbox1").checked){
	dessinermatrice(map1, document.getElementById("image1").value);
}
if (document.getElementById("cbox2").checked){
	dessinermatrice(map2, document.getElementById("image2").value);
}
if (document.getElementById("cbox3").checked){
	dessinermatrice(map3, document.getElementById("image3").value);
}
if (document.getElementById("cbox4").checked){
	dessinermatrice(map4, document.getElementById("image4").value);
}
if (document.getElementById("cbox5").checked){
	dessinermatrice(map5, document.getElementById("image5").value);
}
	// draw the lines on the images
	for (i=1;i<canvas.height;i++){
		context.beginPath();
		context.moveTo(0,32*i);
		context.lineTo(canvas.width,32*i);
		context.stroke();
	}
	for (i=1;i<canvas.width;i++){
		context.beginPath();
		context.moveTo(32*i,0);
		context.lineTo(32*i,canvas.height);
		context.stroke();
	}	

	// draw image on canvas 2
	var image = new Image();
	if (document.getElementById("img1").checked) {
		image.src = "images/" + document.getElementById("image1").value;
	} else if (document.getElementById("img2").checked) {
		image.src = "images/" + document.getElementById("image2").value;
	} else if (document.getElementById("img3").checked) {
		image.src = "images/" + document.getElementById("image3").value;
	} else if (document.getElementById("img4").checked) {
		image.src = "images/" + document.getElementById("image4").value;
	} else if (document.getElementById("img5").checked) {
		image.src = "images/" + document.getElementById("image5").value;
	}
	canvas2.width = image.width;
	canvas2.height = image.height;
	context2.drawImage(image,0, 0, image.width, image.height);
	
	// draw the lines on the images
	for (i=1;i<canvas2.height;i++){
		context2.beginPath();
		context2.moveTo(0,32*i);
		context2.lineTo(canvas2.width,32*i);
		context2.stroke();
	}
	for (i=1;i<canvas2.width;i++){
		context2.beginPath();
		context2.moveTo(32*i,0);
		context2.lineTo(32*i,canvas2.height);
		context2.stroke();
	}

	// draw the matrice
	document.getElementById("mat1").innerHTML = "";
	document.getElementById("mat2").innerHTML = "";
	document.getElementById("mat3").innerHTML = "";
	document.getElementById("mat4").innerHTML = "";
	document.getElementById("mat5").innerHTML = "";
	for(j=0;j< map1.length;j++){
   		for(i=0;i< map1[0].length;i++){
	
			document.getElementById("mat1").innerHTML = document.getElementById("mat1").innerHTML + map1[j][i] +",";
			document.getElementById("mat2").innerHTML = document.getElementById("mat2").innerHTML + map2[j][i] +",";
			document.getElementById("mat3").innerHTML = document.getElementById("mat3").innerHTML + map3[j][i] +",";
			document.getElementById("mat4").innerHTML = document.getElementById("mat4").innerHTML + map4[j][i] +",";
			document.getElementById("mat5").innerHTML = document.getElementById("mat5").innerHTML + map5[j][i] +",";
	
    		}
    		document.getElementById("mat1").innerHTML = document.getElementById("mat1").innerHTML + "<br>";
    		document.getElementById("mat2").innerHTML = document.getElementById("mat2").innerHTML + "<br>";
    		document.getElementById("mat3").innerHTML = document.getElementById("mat3").innerHTML + "<br>";
    		document.getElementById("mat4").innerHTML = document.getElementById("mat4").innerHTML + "<br>";
    		document.getElementById("mat5").innerHTML = document.getElementById("mat5").innerHTML + "<br>";
	}
	
}, 40);


// fonction dessiner couche
function dessinermatrice( matrice,imageurl ){

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
				context.drawImage(image, sx, sy, 32, 32, 32*i, 32*j, 32, 32);
			}
		}
	}
}


