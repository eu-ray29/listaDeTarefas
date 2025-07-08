import BotaoConclui from './components/concluirTarefa.js'

import BotaoDeleta from './components/deletaTarefa.js'

const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const itemTarefa = document.querySelector('[data-form-input]')
    const valor = itemTarefa.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class='content'>${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    itemTarefa.value = ''
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

