
$(document).ready(function(){

	$("#resumosBut").mouseenter(function () {
		$("#listaResumos").slideDown();

	});

	$("#listaResumos").mouseleave(function () {
		$("#listaResumos").slideUp();
	});

	$("#resumosBut").mouseleave(function () {
		$("#listaResumos").mouseenter(function () {
			$("#listaResumos").show();
		});
		$("#listaResumos").hide();
	});

});