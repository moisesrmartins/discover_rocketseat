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