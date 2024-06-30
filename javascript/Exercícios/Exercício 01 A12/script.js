function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/dia.jpg'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = 'black'
    }
}