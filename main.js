function carregar() {
    var nomeEmpresa = document.getElementById('textnome')
    var res = document.getElementById('res')

    if (nomeEmpresa.value == 1000) {
        console.log('[ERRO]:/ É preciso preencher todos os campos!')
    } else {
        var vtipo = document.getElementsByName('radtipo')
        var tipo = ''

        if (vtipo[0].checked) { //Caso escolha Janela 4f faça isso
            tipo = 'Deseja Criar projeto Janela 4f <a href="janela-4f/janela4f.html"><button id="botao">SIM</button></a>'
            
        } else if (vtipo[1].checked) { //Caso escolha Janela 2f faça isso
            tipo = 'Deseja Criar projeto Janela 2f <a href="janela-2f/janela2f.html"><button id="botao">SIM</button></a>'
            
        } else if (vtipo[2].checked) { //Caso escolha Porta Pivotante faça isso
            tipo = 'Deseja Criar projeto Porta Pivotante <a href="portapivo/portapivo.html"><button id="botao">SIM</button></a>'
            
        } else if (vtipo[3].checked) { //Caso escolha Porta Correr 4 folhas faça isso
            tipo = 'Deseja Criar projeto Porta Correr 4f <a href="portacor4f/porta4f.html"><button id="botao">SIM</button></a>'
            
        } else if (vtipo[4].checked) { //Caso escolha Porta Correr 2 folhas faça isso
            tipo = 'Deseja Criar projeto Porta Correr 2f <a href="portacor2f/porta2f.html"><button id="botao">SIM</button></a>'
            
        } else if (vtipo[5].checked) { //Caso escolha Bascula Pivotante faça isso
            tipo = 'Deseja Criar projeto Bascula <a href="bascula/bascula.html"><button id="botao">SIM</button></a>'
            
        }
        res.innerHTML = `Seja Bem-Vindo ${nomeEmpresa.value}! 
        <br>${tipo}.`  
    }
}
