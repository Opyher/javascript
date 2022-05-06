function verificar(){
    let inicio = document.getElementById('inptIni').value
    let fim = document.getElementById('inptFim').value
    let passo = document.getElementById('inptPas').value
    let res = document.getElementById('result')
    res.innerHTML = ''
    
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert("DADOS INCOMPLETOS")
    }else{
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i <= f){
            for(let c = i; c <=f ; c+= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >=f ; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}