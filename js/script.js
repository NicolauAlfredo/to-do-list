// Função que adiciona a tarefa
function addTask() {
    // Titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value

    if(taskTitle) {
        // Clonar o template
        const template = document.querySelector('.template')   
        const newTask = template.cloneNode(true)

        // Adicionar o titulo
        newTask.querySelector('.task-title').textContent = taskTitle

        // Remover as classes desnecessárias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        // Adicionar a tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask)

        // Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            compleTask(this)
        })

         // Adicionar o evento de remover tarefa
         const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this)
        })

        // Limpar texto
        document.querySelector('#task-title').value = ''
    }
}

// Função de completar tarefa 
function compleTask(task) {
    const taskComplete = task.parentNode
    taskComplete.classList.toggle('done')
}

// Função de remover tarefa

function removeTask(task) {
    task.parentNode.remove(true)
}

// Evento de adicionar a tarefa
const addBtn = document.querySelector('#add-btn')
addBtn.addEventListener('click', function(e) {
    e.preventDefault()
    addTask()
})