let btnGravar = document.querySelector('[data-js="btnGravar"]')

btnGravar.addEventListener('click', function() {
    const iptNome = document.querySelector('[data-js="iptNome"]')
    const iptDataNascimento = document.querySelector(
        '[data-js="iptDataNascimento"]',
    )
    const iptCPF = document.querySelector('[data-js="iptCPF"]')
    const iptSexo = document.querySelector('[data-js="iptSexo"]')
    const iptModeloVeiculo = document.querySelector(
        '[data-js="iptModeloVeiculo"]',
    )
    const iptPrecoVeiculo = document.querySelector('[data-js="iptPrecoVeiculo"]')
    const iptQtdParcelas = document.querySelector('[data-js="iptQtdParcelas"]')



    if (iptNome.value === '' || iptNome.value === null) {
        alert('O nome do cliente é obrigatório!')

        return
    }

    if (iptDataNascimento.value === '' || iptDataNascimento.value === null) {
        alert('A data de nascimento é obrigatório!')

        return
    }

    if (iptDataNascimento.value === '' || iptDataNascimento.value === null) {
        alert('A data de nascimento é obrigatório!')

        return
    }

    if (iptCPF.value === '' || iptCPF.value === null) {
        alert('O CPF do cliente é obrigatório!')

        return
    }

    if (iptSexo.value === '' || iptSexo.value === null) {
        alert('O sexo do cliente é obrigatório!')

        return
    }

    if (
        iptPrecoVeiculo.value <= 0 ||
        iptPrecoVeiculo.value === '' ||
        iptPrecoVeiculo.value === null
    ) {
        alert('O valor do veículo não podem ser "0" ou vazio!')

        return
    }



    const idade = calculaIdade(new Date(iptDataNascimento.value))
    const valorSeguro = calculoSeguro(iptPrecoVeiculo.value, idade, iptSexo.value)
    const valorParcela = calcularValorParcela(valorSeguro, iptQtdParcelas.value)


    const infoContrato = {
        id: Math.floor(Math.random() * 100),
        nome: iptNome.value,
        dataNascimento: iptDataNascimento.value,
        idade: idade,
        cpf: iptCPF.value,
        sexo: iptSexo.value,
        modeloVeiculo: iptModeloVeiculo.value,
        precoVeiculo: iptPrecoVeiculo.value,
        qtdParcelas: iptQtdParcelas.value + 'x',
        valorParcela: valorParcela,
        valorSeguro: valorSeguro,
    }


    createRowContrato(infoContrato)

    gravaContrato(infoContrato)


})

/**
 * Insere os dados em localStorage
 * @param {Object} infoContrato
 */
function gravaContrato(infoContrato) {
    const contratos = addContrato(infoContrato)

    localStorage.setItem('contrato', JSON.stringify(contratos))
}

function addContrato(contrato) {
    const contratos = getContratos()

    const novosContratos = {...contratos, [contrato.id]: contrato }

    return novosContratos
}

function getContratos() {
    const contratos = localStorage.getItem('contrato')

    if (contratos) {
        return JSON.parse(contratos)
    }

    return {}
}

function loadContratos() {
    const contratos = getContratos()

    for (const id in contratos) {
        const contrato = contratos[id]

        createRowContrato(contrato)
    }
}



/**
 * Calcula a idade do cliente
 * @param {Date} dataNascimento
 */
function calculaIdade(dataNascimento) {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth() + 1
    const diaAtual = dataAtual.getDate()

    const anoNascimento = dataNascimento.getFullYear()
    const mesNascimento = dataNascimento.getMonth() + 1
    const diaNascimento = dataNascimento.getDate()

    let idade = anoAtual - anoNascimento

    if (
        mesAtual < mesNascimento ||
        (mesAtual === mesNascimento && diaAtual < diaNascimento)
    ) {
        idade -= 1
    }

    return idade
}

/**
 * Cria a linha do contrato
 * @param {Object} infoContrato
 */
function createRowContrato(infoContrato) {
    const tbodyContratos = document.querySelector('[data-js="tbodyContratos"]')

    const rowContrato = document.createElement('tr')
    rowContrato.dataset.id = iptCPF
    rowContrato.classList.add('rowContrato')

    const arrValues = Object.values(infoContrato)

    arrValues.map(info => {
        const td = document.createElement('td')
        td.classList.add('center')
        td.innerHTML = info

        rowContrato.appendChild(td)
    })

    tbodyContratos.appendChild(rowContrato)
}

/**
 * Calcula o valor do seguro
 * @param {number} valorVeiculo
 * @param {number} idadeCliente
 * @param {string} sexoCliente
 * @param {number} iptQtdParcelas

 * @returns
 */
function calculoSeguro(valorVeiculo, idadeCliente, sexoCliente) {

    const valorBase = valorVeiculo * 0.03
    const valorSeguro =
        valorBase +
        calcularAcrescimoIdade(valorBase, idadeCliente) +
        calcularAcrescimoSexo(valorBase, sexoCliente)

    return valorSeguro.toFixed(2)
}

/**
 * Calcula o acréscimo da parcela de acordo com a idade do cliente
 * @param {number} valorBase
 * @param {number} idadeCliente
 * @returns
 */
function calcularAcrescimoIdade(valorBase, idadeCliente) {
    if (idadeCliente >= 18 && idadeCliente <= 25) {
        return valorBase * 0.1
    } else if (idadeCliente >= 26 && idadeCliente <= 30) {
        return valorBase * 0.05
    } else if (idadeCliente >= 31 && idadeCliente <= 35) {
        return valorBase * 0.02
    }

    return 0
}

/**
 * Calcula o acréscimo da parcela de acordo com o sexo do cliente
 * @param {number} valorBase
 * @param {string} sexoCliente
 * @returns
 */
function calcularAcrescimoSexo(valorBase, sexoCliente) {
    if (sexoCliente === 'M') {
        return valorBase * 0.1
    } else {
        return 0
    }
}
/**
 * Calcula o valor da parcela do seguro
 * @param {number} valorSeguro
 * @param {number} qtdParcelas
 * @returns
 */
function calcularJurosParcela(qtdParcelas, valorSeguro) {


    if (qtdParcelas < 6) {
        alert("Sem acréscimo")
        return valorSeguro

    } else if (qtdParcelas >= 7 && qtdParcelas <= 9) {

        alert("3% de juros adicionado")
        return valorSeguro * 0.03

    } else if (qtdParcelas >= 10 && qtdParcelas <= 12) {

        alert("5% de juros adicionado")
        return valorSeguro * 0.05
    }

}
/**
 * Calcula o valor da parcela do seguro
 * @param {number} valorSeguro
 * @param {number} qtdParcelas
 * @returns
 */
function calcularValorParcela(valorSeguro, qtdParcelas, ) {
    return (valorSeguro / qtdParcelas).toFixed(2)

}



// carrega os contratos na tela

loadContratos()