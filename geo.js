var geo = navigator.geolocation;
var opciones = {};

function geo_error () {
	console.log('No puedo saber donde estas');
}

function geo_exito(posicion) {
	console.log(posicion);
}



geo.getCurrentPosition(geo_exito, geo_error, opciones);