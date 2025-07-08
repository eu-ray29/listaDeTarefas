const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botao = evento.target
    const tarefaElemento = botao.parentElement
    const id = tarefaElemento.dataset.id;

    

    // Remove do DOM
    tarefaElemento.remove()

    // Remove do localStorage
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
}

export default BotaoDeleta
