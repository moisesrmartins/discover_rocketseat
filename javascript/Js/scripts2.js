console.log('Strings e numeros')

let string= "123"
console.log(Number(string))
let number= "321"
console.log(String(number))

console.log('Manipulacao de numero e string')

let phrase= "Dinossauro"
console.log(phrase.length)

let number2= 321.249
console.log(number2.toFixed(2).replace(".", ","))

let word1= 'Praise the Sun'
console.log(word1)

let word2= 'Praise the Sun'
console.log(word2.toUpperCase())

let word3 = 'Praise the Sun'
console.log(word3.toLowerCase())

console.log('Strings e Arrays')

let text1= 'Eu sou muito feliz'
let myArray1= text1.split(" ")
console.log(myArray1)

let text2= 'Comer carne e muito bom'
let myArray2= text2.split("")
console.log(myArray2)

let text3= 'Eu gosto de sorvete'
let myArray3= text3.split(" ")
let phraseWithUnderscore1= myArray3.join("")
console.log(phraseWithUnderscore1)

let text4= 'Viajar pelo mar'
let myArray4= text4.split(" ")
let phraseWithUnderscore2= myArray4.join("_")
console.log(phraseWithUnderscore2.toUpperCase())

let text5= 'Correr pelas florestas'
let myArray5= text5.split(" ")
let phraseWithUnderscore3= myArray5.join(".")
console.log(phraseWithUnderscore3.toLowerCase())

let text6= 'Rios e florestas sao bonitos'
console.log(text6.includes('bonitos'))

let text7= 'Flores sao bonitas'
console.log(text7.includes('girassol'))