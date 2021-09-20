console.log('Consolidando o Estudo de Js')

console.log('sistema de notas escolares')

//90 para cima = A:

//Entra 80 e 89 = B:

//Entre 70 e 79 = C:

//Entre 60 e 69 = D:

//Entre 50 e 59 = E:

//Menor que 50 = F:

function getScore(score){
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

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(94))
console.log(getScore(82))
console.log(getScore(76))
console.log(getScore(64))
console.log(getScore(55))
console.log(getScore(38))
console.log(getScore(-1))

console.log('Fluxo de caixa familiar')

let family1= {
    incomes: [8100, 2500, 350, 220]
}

let family2= {
    expenses: [4500, 315, 214, 116]
}

function sum(array){
    let total= 0;

    for (let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes= sum(family1.incomes)
    const calculateExpenses= sum(family2.expenses)

    const total= calculateIncomes - calculateExpenses

    const itsOk= total >= 0

    let balanceText= 'negativo'

    if(itsOk){
        balanceText= 'positivo'
    }

    console.log(`Seu saldo e ${balanceText}: ${total}`)

}

calculateBalance()

console.log('Celsius to Farenheit')

//transformDegree('50F')

function transformDegree1(degree){

    const celsiusExists= degree.toUpperCase().includes('C')
    const farenheitExits= degree.toUpperCase().includes('F')

    //Fluxo ideal, F -> C
    let updatedDegree1= Number(degree.toUpperCase().replace("F", ""));
    let formula1= (farenheit) => (farenheit - 32) * 5/9
    let degreeSign1= 'C'

    return formula1(updatedDegree1) + degreeSign1
}

function transformDegree2(degree){

    const celsiusExists= degree.toUpperCase().includes('C')
    const farenheitExits= degree.toUpperCase().includes('F')

    //Fluxo alternativo, C -> F
    let updatedDegree2= Number(degree.toUpperCase().replace("C", ""));
    let formula2= celsius => celsius * 9/5 + 32
    let degreeSign2= 'F'

    return formula2(updatedDegree2) + degreeSign2
}

function transformDegree3(degree){

    const celsiusExists= degree.toUpperCase().includes('C')
    const farenheitExits= degree.toUpperCase().includes('F')

    //Fluxo de Erro
    if(!celsiusExists && !farenheitExits){
        throw new Error('Grau nao identificado')
    }
}

try{
    console.log(transformDegree1('50F'))
    console.log(transformDegree2('10C'))
    transformDegree3('30Z')
} catch(error){
    console.log(error)
}