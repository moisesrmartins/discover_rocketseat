console.log('Estudo de Criacao e Adicao de Elementos')

console.log('Criacao')
const div1= document.createElement('div');
div1.innerText= "Espero que aproveitem"


console.log('Adicao')
const body1= document.querySelector('body')
body1.append(div1)


console.log('Criacao')
const div2= document.createElement('div');
div2.innerText= "Meu primeiro site ainda em desenvolvimento"


console.log('Adicao')
const body2= document.querySelector('body')
body2.prepend(div2)