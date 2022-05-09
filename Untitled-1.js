document.getElementById('addTodo').addEventListener('click', async () => {
    let input = document.getElementById('todoText');
    let title = input.value;

    if (title) {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, completed: false})
        });

        let todo = await res.json();
        todoToHTML(todo);

        input.value = '';
    }
})

async function getAllTodos() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    let todos = await res.json();

    //console.log(todos)
    todos.forEach(todo => todoToHTML(todo));
}

window.addEventListener('DOMContentLoaded', getAllTodos)

function todoToHTML({id, completed, title}) {
    let todoList = document.getElementById('todos');

    todoList.insertAdjacentHTML('beforeend', `
        <div class="form-check" id="todo${id}">
            <label class="form-check-label">
                <input onchange="toggleCompleteTodo(${id})" type="checkbox" class="form-check-input" ${completed && 'checked'}>
                ${title}
            </label>
            <button onclick="deleteTodo(${id})" type="button" class="btn-close" aria-label="Close" style="font-size: 10px ;"></button>
        </div>`
    )
}

async function deleteTodo (id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let data = await res.json();
    console.log(data);

    if (data) {
        document.getElementById(`todo${id}`).remove()
    }
}

async function toggleCompleteTodo (id) {
    let completed = document.querySelector(`#todo${id} input`).checked;

    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({completed})
    });
    let data = await res.json();

    console.log(data);
}