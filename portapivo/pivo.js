function pdf(){
    var h = document.getElementById('btnprincipal')
    var d = document.getElementById('gerarpdfbtn')

    if(d == 0){
        alert(erro)
    } else {
        window.print()
    }
}
function somarAltura(){
    var vaoA = document.getElementById('vaoA')
    var va = document.getElementById('va')

    if (vaoA.value == 0){
        va.innerHTML = ''
    } else {
        var somA = vaoA.value - 15
        va.innerHTML = `${somA}`
    }
}
function somarLargura(){
    var vaoL = document.getElementById('vaoL')
    var vl = document.getElementById('vl')

    if (vaoL.value == 0){
        vl.innerHTML = ''
    } else {
        var somL = vaoL.value - 7
        vl.innerHTML = `${somL}`
    }
}