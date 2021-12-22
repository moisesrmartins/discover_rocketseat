function mudaFoto (foto) {
    document.getElementById("icone").src=foto;
}
function calc_total () {
    var quantidade= parseInt(document.getElementById('txtquantidade').value);
    preco= quantidade * 1500;
    document.getElementById('txtpreco').value= preco
}