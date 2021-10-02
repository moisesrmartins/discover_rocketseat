console.log('Estudo de ParentElement e ParentNode')

console.log('parentElement 1')
const body1= document.querySelector('body')
console.log(body1.parentElement)

console.log('parentElement 2')
const element= document.querySelector('h1')
console.log(element.parentElement)

//O "parentElement" tem duas formas de uso

console.log('parentNode')
const head= document.querySelector('head')
console.log(head.parentNode)