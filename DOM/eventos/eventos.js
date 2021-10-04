console.log('Estudo de Eventos')

function print() {
    console.log('print')
}

const h1= document.querySelector('h1')
h1.addEventListener('mouseover', print)

const h4= document.querySelector('h4')
h4.addEventListener('click', print)
h4.addEventListener('click', function() {
    console.log('acumular')
})

const input= document.querySelector('input')
input.onclick= function(event){
    console.log(event)
}