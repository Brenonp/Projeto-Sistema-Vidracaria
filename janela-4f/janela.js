function qtdPecas(){
    var qTdbtn = document.getElementById('qtdbtn')
    var qTd1 = document.getElementById('qtd1')
    var qTd2 = document.getElementById('qtd2')
    var qTd3 = document.getElementById('qtd3')
    var qTd4 = document.getElementById('qtd4')

    if(qTdbtn.value == 0) {
        qTd1.innerHTML = ''
        qTd2.innerHTML = ''
        qTd3.innerHTML = ''
        qTd4.innerHTML = ''
    }else{
        qTd1.innerHTML = `${qTdbtn.value}`
        qTd2.innerHTML = `${qTdbtn.value}`
        qTd3.innerHTML = `${qTdbtn.value}`
        qTd4.innerHTML = `${qTdbtn.value}`
    }
}
function pdf(){
    var h = document.getElementById('btnprincipal')
    var d = document.getElementById('gerarpdfbtn')

    if(d == 0){
        alert(erro)
    } else {
       /* h.innerHTML = ''
        d.innerHTML = ''*/
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
    var vlf1 = document.getElementById('vlf1')
    var vlf2 = document.getElementById('vlf2')
    var vlm1 = document.getElementById('vlm1')
    var vlm2 = document.getElementById('vlm2')

    if (vaoLbtn.value == 0){
        vaoL.innerHTML = ''
        vlf1.innerHTML = ''
        vlf2.innerHTML = ''
        vlm1.innerHTML = ''
        vlm2.innerHTML = ''
    } else {
        var somL = vaoLbtn.value / 4
        vaoL.innerHTML = `${vaoLbtn.value}`
        vlf1.innerHTML = `${somL}`
        vlf2.innerHTML = `${somL}`
        vlm1.innerHTML = `${somL + 50}`
        vlm2.innerHTML = `${somL + 50}`
    }
}