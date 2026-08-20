function cerrarModal() {
    document.getElementById("modal1").classList.remove("show");
    document.getElementById("modal2").classList.remove("show");
    document.getElementById("modal3").classList.remove("show");
    document.getElementById("modal4").classList.remove("show");
    document.getElementById("modal5").classList.remove("show");
    document.getElementById("modal6").classList.remove("show");
    document.getElementById("modal7").classList.remove("show");
}

function abrirModal() {
    document.getElementById("modal1").classList.add("show");
}

function abrirModal2() {
    document.getElementById("modal2").classList.add("show");
}

function abrirModal3() {
    document.getElementById("modal3").classList.add("show");
}

function abrirModal4() {
    document.getElementById("modal4").classList.add("show");
}

function abrirModal5() {
    document.getElementById("modal5").classList.add("show");
}

function abrirModal6() {
    document.getElementById("modal6").classList.add("show");
}

function abrirModal7() {
    document.getElementById("modal7").classList.add("show");
}



function abrirModalCert(ruta){
    document.getElementById("certificado-img").src = ruta;
    document.getElementById("modal-certificacion").classList.add("show");
}

function cerrarModalCert(){
    document.getElementById("modal-certificacion").classList.remove("show");
}