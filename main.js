let input_task = document.querySelector("#text-task");
let create_task = document.querySelector(".add-task-btn");
let list_tasks = document.querySelector(".list");
let edit_task = document.querySelector(".edit-task-btn");
let done_task = document.querySelector(".done-task-btn");
let del_task = document.querySelector(".del-task-btn");


input_task.addEventListener('keypress',(e) =>
{
    if(e.keyCode == 13)
    {
        let task = 
        {
            name: input_task.value,
            id: generateId(),
        }
        addTask(task);
    }
})
create_task.addEventListener('click',(e)=>
{
    let task = 
    {
        name: input_task.value,
        id: generateId(),
    }
    addTask(task);
})

function generateId()
{
    return Math.floor(Math.random() * 3000);
}
function addTask(task)
{
    if(task.name == '') 
    {
        alert("Oops, the field is empty!\nPlease insert a new task")
    }
    else
    {
        let li = createTagLi(task);
        list_tasks.appendChild(li);
        input_task.value = '';
    }
    
}
function createTagLi(task)
{
    let li = document.createElement('li');
    li.classList.add('tasks');
    let span = document.createElement('span');
    span.classList.add('task-box');
    span.innerHTML = task.name;

    let div = document.createElement('div');
    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-task-btn');
    btnEdit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5b3a92" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /> <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" /> <line x1="16" y1="5" x2="19" y2="8" /> </svg>';

    let btnDel = document.createElement('button');
    btnDel.classList.add('del-task-btn');
    btnDel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5b3a92" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="4" y1="7" x2="20" y2="7" /> <line x1="10" y1="11" x2="10" y2="17" /> <line x1="14" y1="11" x2="14" y2="17" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>';

    div.appendChild(btnEdit);
    div.appendChild(btnDel);
    li.appendChild(span);
    li.appendChild(div);
    return li;
}

