/**Subtraia 30 dias da data actual */

const date = new Date();
date.setDate(-4);
const string = date.toString();
console.log(string)