const containerNewTask = document.querySelector('#container-tasks')
const btnAdd = document.querySelector('#btn-success')
const input = document.querySelector('#input')
const remove = document.querySelector('#remove')
const task = document.querySelector('#task')


btnAdd.addEventListener('click', () => {
    addNewTask()
})

const addNewTask = () => {
    const span = document.createElement('span')
    const div = document.createElement('div')
    const img = document.createElement('img')

    span.textContent = input.value
    div.appendChild(span)

    img.id = 'remove'

    img.src = '../assets/remove.svg'
    div.appendChild(img)

    div.classList.add('task')
    containerNewTask.appendChild(div)

    input.value = ''

    img.addEventListener('click', () => {
        containerNewTask.removeChild(div)
    })
}


