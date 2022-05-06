let num = document.querySelector('input#txtn')
let tab = document.querySelector('select#select')
let res = document.querySelector('div#result')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, v){
    if(v.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        let n = Number(num.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adiconado`
        tab.appendChild(item)
        res.innerHTML = ''
        
    } else {
        window.alert('VALOR INVALIDO OU JÁ EXISTENTE')
    }
    num.value = ''
    num.focus()
}

function verificar(){
    if(valores.length == 0){
        window.alert('ADICIONE VALORES ANTES DE FINALIZAR') 
    } else {
        let tot = valores.length
        let orq = valores.sort()
        let soma = 0

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrado</p>`
        res.innerHTML += `<p>O maior valor informado é ${orq[tot-1]}</p>`
        res.innerHTML += `<p>O menor valor informado é ${orq[0]}</p>`
        for(let c in valores){
            soma += valores[c]
        }
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/tot}</p>`
        
    }
    
}