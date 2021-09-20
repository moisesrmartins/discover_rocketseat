console.log('Consolidando o Estudo de Js')

console.log('sistema de notas escolares')

//90 para cima = A:

//Entra 80 e 89 = B:

//Entre 70 e 79 = C:

//Entre 60 e 69 = D:

//Entre 50 e 59 = E:

//Menor que 50 = F:

let score= 100
let scoreA= score >= 90 && score <= 100

let scoreB= score >= 80 && score <= 89

let scoreC= score >= 70 && score <= 79

let scoreD= score >= 60 && score <= 69

let scoreE= score >= 50 && score <= 59

let scoreF= score < 50 && score >= 0

let scoreFinal;

if(scoreA){
    scoreFinal= 'A'
}else if(scoreB){
    scoreFinal= 'B'
}else if(scoreC){
    scoreFinal= 'C'
}else if(scoreD){
    scoreFinal= 'D'
}else if(scoreE){
    scoreFinal= 'E'
}else if(scoreF){
    scoreFinal= 'F'
}else{
    scoreFinal= 'Nota Invalida'
}

console.log(scoreFinal)