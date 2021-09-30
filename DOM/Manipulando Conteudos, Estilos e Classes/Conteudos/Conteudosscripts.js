console.log('Estudo de Conteudos')


console.log('textContent')
const element1= document.querySelector('h1')
element1.textContent="Bom dia"
element1.textContent+=" Tudo bem ?"
console.log(element1.textContent)


console.log('innerText')
const element2= document.querySelector('h1')
element2.innerText= "Meu Blog"


console.log('innerHtml')
const element3= document.querySelector('h1')
element3.innerHTML= "Meu Blog <small>Aproveitem</small>"


console.log('Value')
const element4= document.querySelector('input')
element4.value="Escreva para se divertir"


console.log('Manipulando atributos')
const header= document.querySelector('header')
header.setAttribute('id', 'header')

const headerID= document.querySelector('#header')
console.log(headerID)

console.log(headerID.getAttribute('id'))