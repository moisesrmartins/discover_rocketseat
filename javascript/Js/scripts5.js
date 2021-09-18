console.log('Estudo de If e Else')

console.log('If')

let temperature1= 38

if(temperature1 >= 37){
    console.log('Esta com Febre')
}else {
    console.log('Esta Saudavel')
}

console.log('Else')

let temperature2= 38
let highTemperature1= temperature2 >= 37.5
let mediumTemperature1= temperature2 <= 37.5 & temperature2 >= 37
let lowerTemperature1= temperature2 <= 37

if(highTemperature1){
    console.log('Esta com muita Febre')
}else if(mediumTemperature1){
    console.log('Esta com febre')
}else if(lowerTemperature1){
    console.log('Esta saudavel')
}

let temperature3= 37.3
let highTemperature2= temperature3 >= 37.5
let mediumTemperature2= temperature3 <= 37.5 & temperature3 >= 37
let lowerTemperature2= temperature3 <= 37

if(highTemperature2){
    console.log('Esta com muita Febre')
}else if(mediumTemperature2){
    console.log('Esta com febre')
}else if(lowerTemperature2){
    console.log('Esta saudavel')
}

let temperature4= 36
let highTemperature3= temperature4 >= 37.5
let mediumTemperature3= temperature4 <= 37.5 & temperature4 >= 37
let lowerTemperature3= temperature4 <= 37

if(highTemperature3){
    console.log('Esta com muita Febre')
}else if(mediumTemperature3){
    console.log('Esta com febre')
}else if(lowerTemperature3){
    console.log('Esta saudavel')
}

console.log('Switch')

let expression1= 'a'

switch(expression1){
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('defalt')
        break
}

let expression2= 'b'

switch(expression2){
    case 'a':
        console.log('a')
        
    case 'b':
        console.log('b')
        break
    default:
        console.log('defalt')
        break
}

let expression3= 'default'

switch(expression3){
    case 'a':
        console.log('a')
        
    case 'b':
        console.log('b')
        
    default:
        console.log('defalt')
        break
}

function calculate(number1, operator, number2){
    let result
    switch(operator){
        case "+":
            result= number1 + number2
            break
        case "-":
            result= number1 - number2
            break
        case "*":
            result= number1 * number2
            break
        case "/":
            result= number1 / number2
            break
        default:
            console.log('Nao implementado')
            break
    }

    return result
}

console.log(calculate(3, '+', 2))
console.log(calculate(3, '-', 2))
console.log(calculate(3, '*', 2))
console.log(calculate(3, '/', 2))

console.log('Throw e Try/Catch')

//Throw

function sayMyName(name= ''){
    if(name=== ''){
        throw 'Nome e obrigatorio'
    }

    console.log(name)
}

//Try/Catch

try{
    sayMyName('Moises')
} catch(e){
    console.log(e)
}
console.log('Apos a funcao de erro')