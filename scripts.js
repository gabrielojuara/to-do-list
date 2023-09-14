const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhalistadeitens = []



function adcionartarefa() {
  minhalistadeitens.push({
    tarefa: input.value,
    concluida: false
  })

  mostrartarefas()
  input.value = ''
}

function mostrartarefas() {
  let novaLi = ''

  minhalistadeitens.forEach((item, index) => {

    novaLi = novaLi + `

    <li  class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="checkTarefa" onclick="concluirtarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/lixeiro img-PhotoRoom.png-PhotoRoom.png" alt="tarefa-para-lixo" onclick="deletarItem(${index})">
            </li>

    `

  })


  listaCompleta.innerHTML = novaLi
  localStorage.setItem('lista', JSON.stringify(minhalistadeitens))

}

function concluirtarefa(index) {
  minhalistadeitens[index].concluida = !minhalistadeitens[index].concluida

  mostrartarefas()
}

function recarregartarefas() {
  const tarefasLocalStorage = localStorage.getItem('lista')

  if (tarefasLocalStorage) {
    minhalistadeitens = JSON.parse(tarefasLocalStorage)
  }

  mostrartarefas()
}

function deletarItem(index) {
  minhalistadeitens.splice(index, 1)

  mostrartarefas()
}
recarregartarefas()
button.addEventListener('click', adcionartarefa)
