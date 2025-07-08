const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botao = evento.target
    const tarefaElemento = botao.parentElement
    const id = tarefaElemento.dataset.id // Não usar Number()

    // Alternar visual
    tarefaElemento.classList.toggle('done')

    // ✅ Aqui estava o problema: tarefas não estava sendo declarada
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || []

    const tarefasAtualizadas = tarefasSalvas.map(tarefa => {
        if (tarefa.id === id) {
            return {
                ...tarefa,
                concluida: !tarefa.concluida
            }
        }
        return tarefa
    })

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
}

export default BotaoConclui
