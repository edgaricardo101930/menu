$(document).ready(main);

var contador =1;

function main(){
	$('.menu_bar').click(function(){
		//$('nav').toggle();

		if(contador == 0){
			$('nav').animate({
				left: '0'
			});
			contador = 1;
		} else {
			contador = 0;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
}