$(document).ready(function() {
	//alert("existe");
    // llamada al boton en index.html
    $("#exteriores").click (function () {
    window.location.href = "exteriores.html";
    });
    $("#interiores").click (function () {
    swal("Interiores!", "...estamos aún trabajando en esta sección!");
    //window.location.href = "exteriores.html";
    });
    $("#ingenieria").click (function () {
    swal("Ingenieria!", "...estamos aún trabajando en esta sección!");
    //window.location.href = "exteriores.html";
    });
    $("#vr").click (function () {
    swal("VR!", "...estamos aún trabajando en esta sección!");
    //window.location.href = "exteriores.html";
    });
});
