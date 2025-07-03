

function verificar() {


let idade = document.getElementById('idade').value


let msg = document.getElementById('msg')
    if (idade == '') {
        msg.innerHTML = 'Digite sua idade!!'
        msg.style.color = 'black'
    } else if (idade < 16) {
        msg.innerHTML = 'Você não possui idade para votar!'
        msg.style.color = 'black'
    } else if (idade < 18  || idade >= 70 && idade < 105) {
        msg.innerHTML = 'Você pode votar, caso queira!'
        msg.style.color = 'black'
    } else if (idade > 100) {
        msg.innerHTML = 'Era uma vez...'
        msg.style.color = 'black'
    } else {
        msg.innerHTML = 'Você é obrigado a votar!'
        msg.style.color = 'black'
    }
}
