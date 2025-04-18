/**Adicione 7 dias à data actual. */
const date = new Date();
date.setDay(7);
const stringDate = date.toString();
console.log(stringDate)