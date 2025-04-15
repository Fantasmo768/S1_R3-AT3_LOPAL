let numero = parseFloat(prompt("Insira um número para ver a tabuada de 1 a 10"))
let tabuada = 0;
mensagem = ""
if (isNaN(numero)) {
    alert("Você não inseriu um valor válido")
} else {
    for (let i = 1; i <= 10; i++){
        tabuada = numero*i
        mensagem += tabuada + ", "
    }
    alert(`A tabuada de ${numero} em ordem é: ${mensagem}`)
}