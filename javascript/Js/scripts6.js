console.log('Estudo de Estruturas de repeticao')

//For:

console.log('de 0 a 9')

for(let i= 0; i < 10; i++){
    console.log(i)
}

console.log('De 0 a 10')

for(let i= 0; i <= 10; i++){
    console.log(i)
}

console.log('De 10 a 1')

for(let i= 10; i > 0; i--){
    console.log(i)
}

//While

let i= 2197402913406
while(i > 10){
    console.log(i)
    i/= 12
}

//for...of

let name= 'Moises'

for(char of name){
    console.log(char)
}

//for...in

let person= {
    name: 'Moises',
    age: 17,
    weight: 80,
    height: 1.83
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}