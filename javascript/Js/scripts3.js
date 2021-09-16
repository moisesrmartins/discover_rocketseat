console.log('Estudo de Arrays')

console.log('Array com construtor')

let myArray1= new Array('a', 'b', 'c')
console.log(myArray1)

let myArray2= new Array(10)
console.log(myArray2)

console.log('Elementos do Array')

console.log([
    'a',
    {type: 'array'},
    function() {return 'bom dia'},
][2])

console.log([
    'a',
    {type: 'array'},
    function() {return 'bom dia'},
][2]())

console.log('Manipulacao de Arrays')

let word= 'Marionete'
console.log(Array.from(word))

let techs1= ['html', 'css', 'js']
techs1.push('nodejs')
console.log(techs1)

let techs2= ['html', 'css', 'js']
techs2.unshift('sql')
console.log(techs2)

let techs3= ['html', 'css', 'js']
techs3.pop()
console.log(techs3)

let techs4= ['html', 'css', 'js']
techs4.shift()
console.log(techs4)

let techs5= ['html', 'css', 'js']
console.log(techs5.slice(1, 2))

let techs6= ['html', 'css', 'js']
techs6.splice(1, 2)
console.log(techs6)

let techs7= ['html', 'css', 'js']
let index= techs7.indexOf('css')
console.log(index)