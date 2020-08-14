
document.getElementById("menu-toggle").onclick = sliderMenu;

function sliderMenu(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
}

function mostrarFecha() {
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var f = new Date();
    document.getElementById("fecha").innerHTML = (diasSemana[f.getDay()] + " " + f.getDate() + " " + meses[f.getMonth()] + " " + f.getFullYear());
}