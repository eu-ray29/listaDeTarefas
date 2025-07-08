import BotaoConclui from './components/concluirTarefa.js'
import BotaoDeleta from './components/deletaTarefa.js'

const lista = document.querySelector('[data-list]')
const itemTarefa = document.querySelector('[data-form-input]')
const novaTarefa = document.querySelector('[data-form-button]')

// Carregar tarefas do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || []
    tarefasSalvas.forEach(tarefa => {
        adicionarTarefaNaTela(tarefa)
    })
})

const criarTarefa = (evento) => {
    evento.preventDefault()

    const valor = itemTarefa.value.trim()
    if (valor === '') return

    const novaTarefa = { conteudo: valor, concluida: false }
    adicionarTarefaNaTela(novaTarefa)
    salvarTarefa(novaTarefa)

    itemTarefa.value = ''
}

// Adiciona a tarefa na tela
function adicionarTarefaNaTela(tarefaObj) {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class='content'>${tarefaObj.conteudo}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    lista.appendChild(tarefa)
}

// Salva no localStorage
function salvarTarefa(tarefaObj) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    tarefas.push(tarefaObj)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

novaTarefa.addEventListener('click', criarTarefa)
