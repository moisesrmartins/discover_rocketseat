console.log('Estudo de Estilos e Classes')

console.log('Estilos')
const element1= document.querySelector('body')

element1.style.backgroundColor="#f9f3D2"
console.log(element1.style.backgroundColor)


console.log('Classes')

const element2= document.querySelector('body')
element2.classList.add('active')
element2.classList.add('green')

console.log(element2.classList)

element2.classList.remove('active')
element2.classList.toggle('active')