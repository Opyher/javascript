function verificar(){
    var data = new Date()  
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#result')

    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert("[ERRO] Verifique os dados!")
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        if (formSex[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}