//	Chilenos y Chilenas
//	An experiment in generative text using chilena presidential speeches.
//	Rodrigo Lanas
//	rodrigo@contraculto.com

//	Requirements
var fs = require('fs');
var underscore = require('underscore');

//	Utilities
Array.prototype.pickRemove = function() {
	var index = Math.floor(Math.random()*this.length);
	return this.splice(index,1)[0];
};

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

//	The program
console.log('Generating a speech');

//	Read the sources file
var lineas = fs.readFileSync('DiscursosDePresidentesDeChile.txt').toString().split("\n");

//	How many paragraphs
var cantidad_parrafos = randomIntFromInterval(100, 250);
console.log('This speech will have ' + cantidad_parrafos + ' paragraphs');

//	Let's do the thing
fs.appendFile('DiscursoGenerado.txt', 'Chilenos y chilenas,\n\n');
for ( var p = 1; p <= cantidad_parrafos; p++ ) {
	var cantidad_lineas = randomIntFromInterval(5, 20);
	for ( var l = 1; l <= cantidad_lineas; l++) {
		var texto = lineas.pickRemove();
		fs.appendFile('DiscursoGenerado.txt', texto + ' ');
	}
	fs.appendFile('DiscursoGenerado.txt', '\n\n');
	console.log('Paragraph ' + p + ': ' + cantidad_lineas + ' lines added');
}
fs.appendFile('DiscursoGenerado.txt', 'Muchas gracias y viva Chile.');
console.log('Speech done');
