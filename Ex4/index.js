let media = 0;


for (let i = 1; i <= 5; i++) {

    let numero = parseFloat(prompt(`Digite a nota ${i}`))
    if (isNaN(numero)) {
        alert("Você não inseriu um valor válido")
    } else {
        media += numero
    }
}
media = media/5;
alert(media)