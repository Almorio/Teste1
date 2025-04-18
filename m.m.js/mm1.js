/**Encontre o maior e o menor número dentro de um array usando Math.max() e
Math.min(). */

let numeros = [25, 5, 8, 4, 6, 15, 10, 14, ]
const menor = Math.min(...numeros)
const maior = Math.max(...numeros)

console.log("Menor:", menor)
console.log("Maior", maior)