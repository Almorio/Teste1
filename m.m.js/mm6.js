//**Gere um número aleatório entre dois valores definidos. */
let min = 50
let max = 100


function geradorDeNrAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(geradorDeNrAleatorios(min, max))