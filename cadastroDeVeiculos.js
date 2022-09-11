const veiculos = [] // BANCO DE VEÍCULOS

function executarMenu() {
    const resultado = prompt(`
    (1) - Cadastrar automóvel
    (2) - Pesquisar automóvel
    (3) - Excluir automóvel
    (4) - Alterar automóvel
    (0) - Sair
`)

    if (resultado == "1") {
        criarAutomovel()
    }

    if (resultado == "2") {
        pesquisaAutomovel()
    }

    if (resultado == "3") {
        excluirAutomovel()
    }

    if (resultado == "4") {
        alteraAutomovel()
    }

    if (resultado != "0") {
        executarMenu()
    }
}

function criarAutomovel() {
    const veiculo = {
        modelo: prompt('Digite o modelo do veiculo').toUpperCase(),
        marca: prompt('Digite a marca do veiculo').toUpperCase(),
        placa: prompt('Digite a placa do veiculo').toUpperCase(),
        ano: prompt('Digite o ano do veiculo').toUpperCase(),
    }

    let isPlaca = true

    veiculos.forEach(veiculos => {
        if (veiculos.placa == veiculo.placa){
            console.log('Placa já existe')
            isPlaca = false
        }
    });

    if (isPlaca == true) {
        veiculos.push(veiculo)
    }

}

function pesquisaAutomovel() {
    let resposta = prompt('Digite se a pesquisa é por Placa, Modelo ou Marca').toUpperCase()
    let isThis = true

    if (resposta == 'PLACA') {

        let placa = prompt('Digite a placa:').toUpperCase()
        veiculos.forEach(veiculo => {
            if (veiculo.placa == placa) {
                isThis = false
                alert(`${veiculo.modelo} - ${veiculo.marca} - ${veiculo.placa} - ${veiculo.ano}`)
            }
        });

        if (isThis) {
            alert('Placa não encontrada!')
        }
    }

    if (resposta == 'MODELO') {

        let modelo = prompt('Digite o modelo do veículo:').toUpperCase()

        veiculos.forEach(veiculo => {
            if (veiculo.modelo == modelo) {
                isThis = false
                alert(`${veiculo.modelo} - ${veiculo.marca} - ${veiculo.placa} - ${veiculo.ano}`)
            }
        });

        if (isThis) {
            alert('Modelo não encontrado!')
        }
    }

    if (resposta == 'MARCA') {

        let marca = prompt('Digite a marca do veículo:').toUpperCase()
        veiculos.forEach(veiculo => {
            if (veiculo.marca == marca) {
                isThis = false
                alert(`${veiculo.modelo} - ${veiculo.marca} - ${veiculo.placa} - ${veiculo.ano}`)
            }
        });

        if (isThis) {
            alert('Marca não encontrada!')
        }
    }
}

function excluirAutomovel () {

    let resposta = prompt('Digite a placa do veículo que quer excluir:').toUpperCase()
    let indice = 0
    let isPlaca = true
    veiculos.forEach(veiculo => {
        if (veiculo.placa == resposta) {
            veiculos.splice(indice, 1)
            isPlaca = false
        }
        indice ++
    });
    if (isPlaca) {
        alert ('Placa não Encontrada!')
    }
    

}

function alteraAutomovel (){

    let placa = prompt('Digite a placa do veículo que quer alterar modelo e marca:').toUpperCase()
    let isPlaca = true
    
    veiculos.forEach(veiculo => {
        if (veiculo.placa == placa) {
            
            let modelo = prompt ('Digite o modelo:').toUpperCase()
            let marca = prompt ('Digite a marca:').toUpperCase()
    
            veiculo.modelo = modelo
            veiculo.marca = marca
            isPlaca = false
        }
    });

    if (isPlaca) {
        alert ('Placa não Encontrada!')
    }

}



executarMenu()


// alterar atributo objeto: objeto.atributo = 'novoAtributo'
// deletar atributo objeto: delete objeto.atributo;
// adicionar mais 1 atributo: objeto['atributo3'] = 'atributo que não existia'