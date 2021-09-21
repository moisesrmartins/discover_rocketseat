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

console.log('Buscando e encontrando dados em Array')

const booksByCategory1 = [
    {
        category1: "Riqueza",
        books1: [
            {
                title1: "Os segredos da mente milionaria",
                author1: "T. Harv Eker",
            },
            {
                title2: "O homem mais rico da Babilonia",
                author2: "George S. Clason",
            },
            {
                title3: "Pai rico, pai pobre",
                author3: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
];

const booksByCategory2= [
    {
        category2: "Inteligencia Emocional",
        books2: [
            {
                title4: "Você e Insubstituivel",
                author4: "Augusto Cury",
            },
            {
                title5: "Ansiedade – Como enfrentar o mal do seculo",
                author5: "Augusto Cury",
            },
            {
                title6: "Os 7 habitos das pessoas altamente eficazes",
                author6: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategory1= booksByCategory1.length

for(let category1 of booksByCategory1){
    console.log('Total de livros da categoria', category1.category1)
    console.log(category1.books1.length)
}

function countTitle(){
    let title1= []
    let title2= []
    let title3= []

    for(let category1 of booksByCategory1){
        for(let books1 of booksByCategory1){
            if(title1. indexOf(books1.title1) == -1){
                title1.push(books1.title1)
            }
        }
    }

    for(let category1 of booksByCategory1){
        for(let books1 of booksByCategory1){
            if(title2. indexOf(books1.title2) == -1){
                title2.push(books1.title2)
            }
        }
    }

    for(let category1 of booksByCategory1){
        for(let books1 of booksByCategory1){
            if(title3. indexOf(books1.title3) == -1){
                title3.push(books1.title3)
            }
        }
    }

    console.log('Total de titulos', title1.length)
    console.log('Total de titulos', title2.length)
    console.log('Total de titulos', title3.length)

}

countTitle();

function countAuthors(){
    let author4= []
    let author5= []
    let author6= []

    for(let category1 of booksByCategory1){
        for(let books1 of booksByCategory1){
            if(author1. indexOf(books1.author1) == -1){
                author1.push(books1.author1)
            }
        }
    }

    for(let category1 of booksByCategory1){
        for(let books1 of booksByCategory1){
            if(author2. indexOf(books1.author2) == -1){
                author2.push(books1.author2)
            }
        }
    }

    for(let category1 of booksByCategory1){
        for(let books1 of booksByCategory1){
            if(author3. indexOf(books1.author3) == -1){
                author3.push(books1.author3)
            }
        }
    }

    console.log('Total de autores', author1.length)
    console.log('Total de autores', author2.length)
    console.log('Total de autores', author3.length)

}

countAuthors();

const totalCategory2= booksByCategory2.length

for(let category2 of booksByCategory2){
    console.log('Total de livros da categoria', category2.category2)
    console.log(category2.books2.length)
}

function countTitle(){
    let title4= []
    let title5= []
    let title6= []

    for(let category2 of booksByCategory2){
        for(let books2 of booksByCategory2){
            if(title4. indexOf(books2.title4) == -1){
                title4.push(books2.title4)
            }
        }
    }

    for(let category2 of booksByCategory2){
        for(let books2 of booksByCategory2){
            if(title5. indexOf(books2.title5) == -1){
                title5.push(books2.title5)
            }
        }
    }

    for(let category2 of booksByCategory2){
        for(let books2 of booksByCategory2){
            if(title6. indexOf(books2.title6) == -1){
                title6.push(books2.title6)
            }
        }
    }

    console.log('Total de titulos', title4.length)
    console.log('Total de titulos', title5.length)
    console.log('Total de titulos', title6.length)

}

countTitle();

function countAuthors(){
    let author4= []
    let author5= []
    let author6= []

    for(let category2 of booksByCategory2){
        for(let books2 of booksByCategory2){
            if(author4. indexOf(books2.author4) == -1){
                author4.push(books2.author4)
            }
        }
    }

    for(let category2 of booksByCategory2){
        for(let books2 of booksByCategory2){
            if(author5. indexOf(books2.author5) == -1){
                author5.push(books2.author5)
            }
        }
    }

    for(let category2 of booksByCategory2){
        for(let books2 of booksByCategory2){
            if(author6. indexOf(books2.author6) == -1){
                author6.push(books2.author6)
            }
        }
    }

    console.log('Total de autores', author4.length)
    console.log('Total de autores', author5.length)
    console.log('Total de autores', author6.length)

}

countAuthors();