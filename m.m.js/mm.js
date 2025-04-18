/**Gere um número aleatório entre 10 e 100. */



let min = 10
let max = 100


function geradorDeNrAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(geradorDeNrAleatorios(min, max))