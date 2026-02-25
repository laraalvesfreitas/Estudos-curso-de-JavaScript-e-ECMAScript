function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas <br>`
    if(hora >= 0  && hora <12){
        //Bom dia
        msg.innerHTML += `Bom dia!`
        img.src = 'photomanha.png'
        document.body.style.background = '#f4dc9d'

    }else if(hora<18 ){
        msg.innerHTML += `Boa Tarde!`
       img.src = 'phototarde.png'
       document.body.style.background = '#eb4108'
    } else{
        msg.innerHTML += `Boa noite!`
        img.src = 'photonoite.png'
        document.body.style.background = '#0a1c1b'
    }
}