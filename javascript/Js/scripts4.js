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

console.log('Operadoes Aritmeticos')

//Multiplicacao:
console.log(3 * 2)

//Divisao:
console.log(3 / 2)

//Soma:
console.log(3 + 2)

//Subtracao:
console.log(3 - 2)

//Resto da divisao:
console.log(3 % 2)

//Incremento:
let increment= 3
increment ++
console.log(increment)

//Decremento:
let decrement= 3
decrement --
console.log(decrement)

//Exponencial:
let exponencial= 3
exponencial **
console.log(3 ** 2)

console.log('Grouping')

let total1= 3 + 2 * 5
console.log(total1)

let total2= (3 + 2) * 5
console.log(total2)

let total3= 3 - 2 / 5
console.log(total3)

let total4= (3 - 2) / 5
console.log(total4)

console.log('Igual e Diferente')

let one= 1
let two= 2

//Igual: '=='
console.log(two == 1)
console.log(one == '1')

//Diferente '!='
console.log(one != two)
console.log(one != 1)
console.log(one != '1')

//Estritamente igual: '==='
console.log(one ==='1')
console.log(one === 1)

//Estritamente diferente: '!=='
console.log(two !== '2')
console.log(two !== 2)

//Maior que: '>'
console.log(one > two)

//Maior igual a: '>='
console.log(one >= 1)
console.log(two >= 1)

//Menor que: '<'
console.log(one < two)

//Menor igual a: '<='
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
