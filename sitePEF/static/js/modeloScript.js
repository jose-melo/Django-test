$(document).ready(() => {
	var forca, apoioS, apoioD= 0;
	var forcas = 1 , as = 1, ad = 1;
	var dirAtual = 0, angulo;
	function palavra (palavra, num){
		return '#' + palavra + num;
	}
	function direcao(){
		
		if(dirAtual == 0){
			return 0
		}
		
		if(dirAtual == 1){
			return 90
		}
		if(dirAtual == 2){
			return 180
		}
		if(dirAtual == 3){
			return 270
		}
	}
	function gira(){
		if(dirAtual < 3){
			dirAtual++
		}else if(dirAtual == 3){
			dirAtual = 0
		}
	}
	
	function atualiza(){
		angulo = direcao();
		$(palavra("forca", 0)).css({
         		'-moz-transform':'rotate('+angulo+'deg)',
          		'-webkit-transform':'rotate('+angulo+'deg)',
        		'-o-transform':'rotate('+angulo+'deg)',
  	 		    '-ms-transform':'rotate('+angulo+'deg)',
       		    'transform': 'rotate('+angulo+'deg)'
   			})
	}
	function eixoY(){
		if(dirAtual == 0)
			return 160
		if(dirAtual == 1)
			return 140
		if(dirAtual == 2)
			return 125
		if(dirAtual == 3)
			return 140
	}
	/*Rotacao*/
	$('.rotation').click(function(){
		gira();
		atualiza(angulo)
	})
	
	/*Movimento de clique da força*/
	$(palavra("forca", 0)).click(function(){
		$(palavra("forca", 0)).attr('style', 'background:#99ff99;')
		atualiza();
		forca = 1
			$('#barra').click(function(e){
				if(forca== 1){
					 let x = e.offsetX-20
					 let y = eixoY();
					 $('<img src="seta.png" class="forca" id="forca"'+forcas+' style="background: transparent no-repeat; border: none ; transform: rotate('+angulo+'deg) ">').appendTo('.Sforca').animate({
					 		'marginLeft' : x,
					 		'marginTop' : y
							}, 500);
					 $( palavra("forca", 0)).attr('style', 'background: transparent no-repeat;')
						 atualiza();
						forcas++;
						forca = 0
				}
			})
	})
	/*Apoio simples*/
	$(palavra("aS", 0)).click(function(){
		$(palavra("aS", 0)).attr('style', 'background-color:#99ff99;')
		apoioS = 1
			
			$('#barra').click(function(e) {
				if(apoioS == 1){
					
					let x = e.offsetX - 20
					let y = 160
				 
					$('<img src="apoio simples.png" class="forca" id="forca"'+forcas+' style="margin-left: 175px; background: transparent no-repeat; border: none ;">').appendTo('.Sforca').animate({
					 		'marginLeft' : x,
					 		'marginTop' : y
						}, 500);
						
					$( palavra("aS", 0)).attr('style', 'background: transparent no-repeat;')
					apoioS = 0
				}
			})
	})
	/*Apoio duplo*/
	$(palavra("aD", 0)).click(function(){
		$(palavra("aD", 0)).attr('style', 'background-color:#99ff99;')
		apoioD = 1
			$('#barra').click(function(e) {
				if(apoioD == 1){
	
					 let x = e.offsetX - 20
					 let y = 160
		 
					 $('<img src="apoioDuplo.png" class="forca" id="forca"'+forcas+' style=" margin-left: 350px; background: transparent no-repeat; border: none ;">').appendTo('.Sforca').animate({
					 		'marginLeft' : x,
					 		'marginTop' : y
							}, 500);
						
					$( palavra("aD", 0)).attr('style', 'background: transparent no-repeat;')
					apoioD = 0
				}
			})
	})	
})
