let numero1 = parseInt(prompt("Digite o primeiro número"))
let numero2 = parseInt(prompt("Digite o segundo número"))
let mensagem = ""
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Você não digitou um valor válido")
} else {
    for (let i = numero1; i <= numero2; i++) {
        if (i % 2 == 0) {
            mensagem += i + " "
        }
        alert(mensagem)
    }

}