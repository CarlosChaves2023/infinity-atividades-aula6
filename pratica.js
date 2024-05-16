//Atividades - aula 6

//Ativ. 01
function contaVogais(texto = ''){

    var cont = 0
    for(i of texto.toLowerCase()){
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
            cont += 1
            
        }
    }
    return cont
}

var nome = contaVogais('AEIOUAEIOU')
console.log(nome)


//Ativ.02
function quadrado(a){
    return a**2
}

var num = quadrado(11)
console.log(num)

//Ativ. 03
function circulo(raio){
    let area = Math.PI * (raio ** 2)
    let perim = Math.PI * raio * 2
    return `Área = ${area.toFixed(2)}\nPerímetro = ${perim.toFixed(2)}`
}

var valores = circulo(3)
console.log(valores)

//Ativ. 04
function numPrimo(num){
    if(num <= 1){
        return `O número ${num} não é primo`
    } else {
        let cont = 0
        for(let i = 1; i <= num; i++ ){
            if(num % i == 0){
                cont++
               
            }
    }
    if (cont == 2){
        return `O número ${num} é primo`
    } else {
        return `O número ${num} não é primo`
    }     
}
}
var valor = numPrimo(3)
console.log(valor)

//Ativ. 05
function soma(a, b){
    return a + b
}

function subtração(a, b){
    return a - b
}

function multiplicacao(a, b){
    return a * b
}

function divisao(a, b){
    return a / b
}


var resultado = function(a, b, operacao){
    return operacao(a, b)
}

var valor = resultado(4, 2, divisao)
console.log(valor)

//Ativ. 06
const soma = function(a, b){
    return a + b
}

var valor = soma(3, 4)
console.log(valor)

//Ativ. 07
function valorPagamento(valorPrestacao, diasAtraso){
    var totalPrestacoes = []
    var somaPrestacoes = 0
    while(true){
        valorPrestacao = Number(prompt(`Digite o valor da prestação(digite "0" para sair):`))
            if(valorPrestacao != 0){
            diasAtraso = Number(prompt(`Digite a quantidade de dias em atraso:`))
            var valorJuros = valorPrestacao * (0.01 / 30) * diasAtraso
            var totalPagamento = valorPrestacao + valorJuros
            somaPrestacoes += totalPagamento
           
            
            valorPrestacao = valorPrestacao.toFixed(2)
            valorJuros = valorJuros.toFixed(2)
            totalPagamento = totalPagamento.toFixed(2)
            totalPrestacoes.push(totalPagamento)

            alert(`
            Valor da Prestação = ${valorPrestacao}
            Valor do Juros = ${valorJuros}
            Total do Pagamento = ${totalPagamento}
            `)

            console.log(valorPrestacao)
            console.log(valorJuros)
            console.log(totalPagamento)
            console.log(totalPrestacoes)

            }else if(valorPrestacao == 0){
                break
        }
       
    }
    somaPrestacoes = somaPrestacoes.toFixed(2)
    alert(`Soma dos Pagamentos do Dia = ${somaPrestacoes}`)
    console.log(`Soma dos pagamentos do dia = ${somaPrestacoes}`)

}

var pagamento = valorPagamento()

