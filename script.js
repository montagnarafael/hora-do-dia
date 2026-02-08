function carregar() {

let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()

if (hora >= 0 && hora < 12 ){
    img.src = './img/manha.jpg'
    document.body.style.background = 'rgb(208, 203, 203)'
    msg.innerHTML = `Bom dia! Agora são ${hora} Horas e ${minutos} Minutos.`
}else if (hora >= 12 && hora <= 18) {
    img.src = './img/tarde.jpg'
    document.body.style.background = 'rgb(153, 194, 255)'
    msg.innerHTML = `Boa Tarde ! Agora são ${hora} Horas e ${minutos} Minutos.`
}else {
    img.src = './img/noite.jpg'
    document.body.style.background = 'rgb(145, 148, 155)'
    msg.innerHTML = `Boa Noite ! Agora são ${hora} Horas e ${minutos} Minutos.`
}
}