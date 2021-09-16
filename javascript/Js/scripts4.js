console.log('Estudo de Expressoes e Operadores')

let number1

(function(){
  console.log('oi')
})()

//Se for acrescentado um '=' e um numero qualquer como '1'
//'Function' ficara invalido e fara com que o programa falhe

let number3 = 1

console.log(++number3)

let number4 = 1

console.log(number4 + 2)
console.log(true ? 'tchau' : 'nada')

console.log('New')

let name1= new String('Moises')
let age1= new Number('17')
let date1= new Date('2003-09-22')
console.log(name1)
console.log(age1) 
console.log(date1)

console.log('Aplicacao do Delete')

console.log(typeof 'Moises')
const person1= {
    name2: 'Moises',
    age2: 17,
    date2: '2003-09-21'
}
console.log(person1)

const person2= {
    name3: 'Moises',
    age3: 17,
    date3: '2003-09-21'
}
delete person2.date3
console.log(person2)

const person3= {
    name4: 'Moises',
    age4: 17,
    date4: '2003-09-21'
}
delete person3.date4
delete person3.age4
console.log(person3)
