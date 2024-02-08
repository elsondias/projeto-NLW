const perguntas = [
    {
        pergunta: "O que significa a sigla 'JS'?",
        respostas: [
            "JavaScript",
            "Just Sayin'",
            "Java Style",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '==' em JavaScript?",
        respostas: [
            "Comparação estrita",
            "Comparação solta",
            "Concatenação de strings",
        ],
        correta: 1
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "let",
            "var",
            "ambas as opções",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que é executada após um determinado período de tempo",
            "Uma função passada como argumento para outra função para ser executada mais tarde",
            "Uma função que inicia um loop infinito",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'querySelector'?",
        respostas: [
            "Selecionar elementos de uma matriz",
            "Selecionar elementos com base em uma classe CSS",
            "Selecionar elementos com base em seu ID",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'parseInt' faz em JavaScript?",
        respostas: [
            "Converte uma string em um número inteiro",
            "Arredonda um número para o inteiro mais próximo",
            "Converte um número em uma string",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma variável global em JavaScript?",
        respostas: [
            "Uma variável definida dentro de uma função",
            "Uma variável definida fora de todas as funções",
            "Uma variável que só pode ser acessada por funções específicas",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'push' faz em um array?",
        respostas: [
            "Remove o último elemento do array",
            "Adiciona um elemento no início do array",
            "Adiciona um elemento no final do array",
        ],
        correta: 2
    },
    {
        pergunta: "O que significa DOM em JavaScript?",
        respostas: [
            "Documento de Objeto Mínimo",
            "Modelo de Objeto de Documento",
            "Desenvolvimento de Orientação para Módulos",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */",
        ],
        correta: 0
    },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)
    }


    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}