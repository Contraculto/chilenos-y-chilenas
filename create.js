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

//	Read the sources file
var lineas = fs.readFileSync('DiscursosDePresidentesDeChile.txt').toString().split("\n");

for ( var i = 0; i < 5; i++ ) {
	var texto = lineas.pickRemove();
	console.log(texto);
}
