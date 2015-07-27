var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();


function mostrarFormulario(){ //Prmite mostrar y ocultar el formulario
	$form.slideToggle();
}

function agregarPost() {
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a') //obtiene la informacion de los articulos
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn();

	return false;
}

//Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost );