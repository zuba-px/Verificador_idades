function Verificar() {
    var ano_atual = 2022;
    var ano_informado = document.getElementById("txtano").value;
    var res = document.getElementById('res');
    var idade = ano_atual - ano_informado;




    if (Number(ano_informado) > ano_atual || ano_informado == 0) {
        res.innerHTML = ('[ERRO] Preencha os campos corretamente')
    } else {
        var genero = ''
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }


    if (fsex[0].checked) {
        genero = 'homem'
        if (idade >= 0 && idade <= 10) {
            // Criaça
            img.setAttribute('src', 'criancaM.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'adolescenteH.jpg')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'homem.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idoso.jpg')
        }

    } else if (fsex[1].checked) {
        genero = 'mulher'
        if (idade >= 0 && idade <= 10) {
            // Criaça
            img.setAttribute('src', 'criancaM.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'adolescenteM.jpg')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'mulher.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idosa.jpg')
        }

    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)

}