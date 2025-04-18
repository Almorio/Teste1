const Aluno = {
    nome: "Almorio Adolfo",
    notas: [29, 20, 15]
}
const media = Aluno.notas(num => num.lenght / 3)

console.log.apply(media)