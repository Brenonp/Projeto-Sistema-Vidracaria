function qtdPecas(){
    var qTdbtn = document.getElementById('qtdbtn')
    var qTd1 = document.getElementById('qtd1')
    var qTd2 = document.getElementById('qtd2')

    if(qTdbtn.value == 0) {
        qTd1.innerHTML = ''
        qTd2.innerHTML = ''
    }else{
        qTd1.innerHTML = `${qTdbtn.value}`
        qTd2.innerHTML = `${qTdbtn.value}`
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
    var vaf = document.getElementById('vaf')
    var vam = document.getElementById('vam')

    if (vaoAbtn.value == 0){
        vaoA.innerHTML = ''
        vaf.innerHTML = ''
        vam.innerHTML = ''
    } else {
        var somA = vaoAbtn.value - 20
        vaoA.innerHTML = `${vaoAbtn.value}`
        vaf.innerHTML = `${somA - 35}`
        vam.innerHTML = `${somA}`
    }
}
function somarLargura(){
    var vaoLbtn = document.getElementById('vaoLbtn')
    var vaoL = document.getElementById('vaoL')
    var vlf = document.getElementById('vlf')
    var vlm = document.getElementById('vlm')

    if (vaoLbtn.value == 0){
        vaoL.innerHTML = ''
        vlf.innerHTML = ''
        vlm.innerHTML = ''

    } else {
        var somL = vaoLbtn.value / 2
        vaoL.innerHTML = `${vaoLbtn.value}`
        vlf.innerHTML = `${somL}`
        vlm.innerHTML = `${somL + 50}`

    }
}