/*Crie uma arrow function que receba um número e retorne seu fatorial.*/
let f = x => x < 3 ? x : x*f(x-1)
console.log(f(3))


let num = x => x
