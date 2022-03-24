function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade < 13){
                imagem.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21){
                imagem.setAttribute('src', 'imagens/rapaz.png')
            } else if (idade < 40){
                imagem.setAttribute('src', 'imagens/adulto.png')
            } else if (idade < 60){
                imagem.setAttribute('src', 'imagens/meiam.png')
            }else{
                imagem.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 13){
                imagem.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21){
                imagem.setAttribute('src', 'imagens/moca.png')
            } else if (idade < 40){
                imagem.setAttribute('src', 'imagens/adulta.png')
            } else if (idade < 60){
                imagem.setAttribute('src', 'imagens/meiaf.png')
            }else{
                imagem.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        //res.style.lineHeight = '3em'
        res.appendChild(imagem)
    }
}