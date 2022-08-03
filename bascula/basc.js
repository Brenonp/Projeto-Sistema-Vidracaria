function qtdPecas(){
    var qTdbtn = document.getElementById('qtdbtn')
    var qTd1 = document.getElementById('qtd1')

    if(qTdbtn.value == 0) {
        qTd1.innerHTML = ''
    }else{
        qTd1.innerHTML = `${qTdbtn.value}`
    }
}
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
    var vaoAbtn = document.getElementById('vaoAbtn')
    var vaoA = document.getElementById('vaoA')
    var va = document.getElementById('va')

    if (vaoAbtn.value == 0){
        va.innerHTML = ''
        vaoA.innerHTML = ''
    } else {
        var somA = vaoAbtn.value - 10
        va.innerHTML = `${somA}`
        vaoA.innerHTML = `${somA + 10}`
    }
}
function somarLargura(){
    var vaoLbtn = document.getElementById('vaoLbtn')
    var vaoL = document.getElementById('vaoL')
    var vl = document.getElementById('vl')

    if (vaoLbtn.value == 0){
        vl.innerHTML = ''
        vaoL.innerHTML = ''
    } else {
        var somL = vaoLbtn.value - 10
        vl.innerHTML = `${somL}`
        vaoL.innerHTML = `${somL + 10}`
    }
}