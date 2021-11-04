function verify() {

    var nome = window.document.getElementById('nome').value;
    var datenasc = window.document.getElementById('datenasc').value;
    var cpf = window.document.getElementById('cpf').value;
    var nomeveiculo = window.document.getElementById('nomeveiculo').value;
    var precoveiculo = window.document.getElementById('precoveiculo').value;
    var sexo = window.document.getElementById('sexo').value;

    localStorage.setItem('ID:', '1135468');
    localStorage.setItem('nome', nome);
    localStorage.setItem('datenasc', datenasc);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('nomeveiculo', nomeveiculo);
    localStorage.setItem('precoveiculo', precoveiculo);
    localStorage.setItem('sexo', sexo);

    if (precoveiculo > 0) {

        juros = 3;
        resuljuros = juros * precoveiculo;
        resuljuros /= 100;
        jurosveiculo = resuljuros;
        localStorage.setItem('jurosveiculo', jurosveiculo);
    }


    var data_atual = new Date();

    var data_nascimento = new Date(datenasc);
    // subtração dos anos
    var anos = data_atual.getFullYear() - data_nascimento.getFullYear();
    // analise dos meses
    if (data_atual.getMonth() != data_nascimento.getMonth()) {
        // verifica a diferença de meses
        if (data_atual.getMonth() < data_nascimento.getMonth()) {

            anos--;
        }
    } else {
        // analisa o dia do mes
        if (data_atual.getDate() < data_nascimento.getDate()) {

            anos--;
        }
    }


    if (anos >= 18 && anos <= 25) {

        jurosDZVC = 10;
        resuljurosDZVC = jurosDZVC * precoveiculo;
        resuljurosDZVC /= 100;
        jurosveiculoDZVC = resuljurosDZVC;
        localStorage.setItem('jurosveiculoDZVC', jurosveiculoDZVC);

    }


    if (anos >= 26 && anos <= 30) {

        jurosVSTR = 5;
        resuljurosVSTR = jurosVSTR * precoveiculo;
        resuljurosVSTR /= 100;
        jurosveiculoVSTR = resuljurosVSTR;
        localStorage.setItem('jurosveiculoVSTR', jurosveiculoVSTR);
    }
    if (anos >= 31 && anos <= 35) {

        jurosTRUTRC = 2;
        resuljurosTRUTRC = jurosTRUTRC * precoveiculo;
        resuljurosTRUTRC /= 100;
        jurosveiculoTRUTRC = resuljurosTRUTRC;
        localStorage.setItem('jurosveiculoTRUTRC', jurosveiculoTRUTRC);
    }

    if (anos > 35) {

        console.log("Não se aplica acréscimos");
    }

    if (sexo == 'M') {


        jurosSexoM = 10;
        resuljurosSexoM = jurosSexoM * precoveiculo;
        resuljurosSexoM /= 100;
        jurosveiculoSexoM = resuljurosSexoM;
        localStorage.setItem('jurosveiculoSexoM', jurosveiculoSexoM);

    }

    var parcelasMeses = 12;

    for (let i = 0; i <= parcelasMeses.length; i++) {
        const element = parcelasMeses[i];
    }

    if (parcelasMeses < 6) {

        console.log("Sem acréscimos")
    }
    if (parcelasMeses >= 6 && parcelasMeses <= 9) {

        jurosTRUTRC = 3;
        resuljurosTRUTRC = jurosTRUTRC * precoveiculo;
        resuljurosTRUTRC /= 100;
        jurosveiculoTRUTRC = resuljurosTRUTRC;
        localStorage.setItem('jurosveiculoTRUTRC', jurosveiculoTRUTRC);

    }




}

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Qtd. parcelas";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Valor Parcela";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Valor total";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1x";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Netflix";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2x";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Adam White";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "Microsoft";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);


// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "3x";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "Adam White";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "Microsoft";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);

// Creating and adding data to third row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "4x";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "Adam White";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "Microsoft";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
tbody.appendChild(row_5);

// Creating and adding data to third row of the table
let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "5x";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "Adam White";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "Microsoft";

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
tbody.appendChild(row_6);

let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerHTML = "6x";
let row_7_data_2 = document.createElement('td');
row_7_data_2.innerHTML = "Adam White";
let row_7_data_3 = document.createElement('td');
row_7_data_3.innerHTML = "Microsoft";

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
row_7.appendChild(row_7_data_3);
tbody.appendChild(row_7);

let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.innerHTML = "7x";
let row_8_data_2 = document.createElement('td');
row_8_data_2.innerHTML = "Adam White";
let row_8_data_3 = document.createElement('td');
row_8_data_3.innerHTML = "Microsoft";

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
row_8.appendChild(row_8_data_3);
tbody.appendChild(row_8);


let row_9 = document.createElement('tr');
let row_9_data_1 = document.createElement('td');
row_9_data_1.innerHTML = "8x";
let row_9_data_2 = document.createElement('td');
row_9_data_2.innerHTML = "Adam White";
let row_9_data_3 = document.createElement('td');
row_9_data_3.innerHTML = "Microsoft";

row_9.appendChild(row_9_data_1);
row_9.appendChild(row_9_data_2);
row_9.appendChild(row_9_data_3);
tbody.appendChild(row_9);

let row_10 = document.createElement('tr');
let row_10_data_1 = document.createElement('td');
row_10_data_1.innerHTML = "9x";
let row_10_data_2 = document.createElement('td');
row_10_data_2.innerHTML = "Adam White";
let row_10_data_3 = document.createElement('td');
row_10_data_3.innerHTML = "Microsoft";

row_10.appendChild(row_10_data_1);
row_10.appendChild(row_10_data_2);
row_10.appendChild(row_10_data_3);
tbody.appendChild(row_10);

let row_11 = document.createElement('tr');
let row_11_data_1 = document.createElement('td');
row_11_data_1.innerHTML = "10x";
let row_11_data_2 = document.createElement('td');
row_11_data_2.innerHTML = "Adam White";
let row_11_data_3 = document.createElement('td');
row_11_data_3.innerHTML = "Microsoft";

row_11.appendChild(row_11_data_1);
row_11.appendChild(row_11_data_2);
row_11.appendChild(row_11_data_3);
tbody.appendChild(row_11);

let row_12 = document.createElement('tr');
let row_12_data_1 = document.createElement('td');
row_12_data_1.innerHTML = "11x";
let row_12_data_2 = document.createElement('td');
row_12_data_2.innerHTML = "Adam White";
let row_12_data_3 = document.createElement('td');
row_12_data_3.innerHTML = "Microsoft";

row_12.appendChild(row_12_data_1);
row_12.appendChild(row_12_data_2);
row_12.appendChild(row_12_data_3);
tbody.appendChild(row_12);

let row_13 = document.createElement('tr');
let row_13_data_1 = document.createElement('td');
row_13_data_1.innerHTML = "12x";
let row_13_data_2 = document.createElement('td');
row_13_data_2.innerHTML = "Adam White";
let row_13_data_3 = document.createElement('td');
row_13_data_3.innerHTML = "Microsoft";

row_13.appendChild(row_13_data_1);
row_13.appendChild(row_13_data_2);
row_13.appendChild(row_13_data_3);
tbody.appendChild(row_13);



//   var ano_atual = new Date().getFullYear() + '-' + new Date().getMonth() + 1 + '-' + new Date().getDate();
//   document.write(ano_atual)
//   var ano_informado = datenasc;
//   document.write(parseInt(ano_atual) - parseInt(ano_informado));

// var ano_atual = new Date();
// var ano = ano_atual.getFullYear();
// var mes = ano_atual.getMonth() + 1;
// var dia = ano_atual.getDate();

// var ano_atual = parseInt(ano) + '-' + parseInt(mes) + '-' + parseInt(dia);
// var ano_informado = datenasc;
// document.write(parseInt(ano_atual) - parseInt(ano_informado));