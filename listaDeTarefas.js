import BotaoConclui from './components/concluirTarefa.js'
import BotaoDeleta from './components/deletaTarefa.js'

import { gerarUUID } from './components/uuid.js' // ou ajuste o caminho se estiver em outra pasta


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

    const novaTarefa = {
    id: gerarUUID(),
    conteudo: valor,
    concluida: false
}

    adicionarTarefaNaTela(novaTarefa)
    salvarTarefa(novaTarefa)

    itemTarefa.value = ''
}



function adicionarTarefaNaTela(tarefaObj) {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    tarefa.dataset.id = tarefaObj.id

    if (tarefaObj.concluida) {
        tarefa.classList.add('done')
    }

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('content')
    paragrafo.innerText = tarefaObj.conteudo

    tarefa.appendChild(paragrafo)
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    lista.appendChild(tarefa)

    console.log(`Tarefa renderizada: id=${tarefaObj.id}, concluida=${tarefaObj.concluida}`)

}



// Salva no localStorage
function salvarTarefa(tarefaObj) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    tarefas.push(tarefaObj)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

novaTarefa.addEventListener('click', criarTarefa)

