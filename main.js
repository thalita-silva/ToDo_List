let input_task = document.querySelector("#text-task");
let create_task = document.querySelector(".add-task-btn");
let list_tasks = document.querySelector(".list");
let del_task = document.querySelector(".del-task-btn");
let btn_update_task = document.querySelector(".update-task-btn");
let btn_close_edit = document.querySelector("#close-edit-btn");
let task_edit = document.querySelector("#edit-task");
let task_edit_window = document.querySelector(".task-edit-window");
let input_name_task = document.querySelector("#input-new-name");
let task_id = document.querySelector("#task-id");
const ids = Number.MAX_VALUE;

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
btn_close_edit.addEventListener('click',(e)=>
{
    change_window();
})
btn_update_task.addEventListener('click',(e)=>
{
    e.preventDefault();
    print('hereeee');
    let id_task = task_id.innerHTML.replace('#','');
    let task = 
    {
        name: input_name_task.value,
        id: id_task
    }
    let act_task = document.getElementById(''+id_task+'');
    if(act_task)
    {
        let li = createTagLi(task);
        list_tasks.replaceChild(li,act_task);
        change_window();
    }
    else
    {
        alert('Task not found!');
    }
    
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
    li.id = task.id;
    let span = document.createElement('span');
    span.classList.add('task-box');
    span.innerHTML = task.name;

    let div = document.createElement('div');
    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-task-btn');
    btnEdit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5b3a92" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /> <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" /> <line x1="16" y1="5" x2="19" y2="8" /> </svg>';
    btnEdit.setAttribute('onclick','editTask('+task.id+')');
    
    let btnDel = document.createElement('button');
    btnDel.classList.add('del-task-btn');
    btnDel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5b3a92" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="4" y1="7" x2="20" y2="7" /> <line x1="10" y1="11" x2="10" y2="17" /> <line x1="14" y1="11" x2="14" y2="17" /> <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /> <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>';
    btnDel.setAttribute('onclick','delTask('+task.id+')');
    div.appendChild(btnEdit);
    div.appendChild(btnDel);
    li.appendChild(span);
    li.appendChild(div);
    return li;
}
function delTask(idTask)
{
    let confirm = window.confirm("!! Atention !!\nAre you sure that you wanna delete this task?")
    if(confirm)
    {
        let task = document.getElementById(''+idTask+'');
        if(task)
        {
            list_tasks.removeChild(task);
        }
    }
}
function editTask(idTask)
{
    let update = document.getElementById(''+idTask+'');
    if (update)
    {
        task_id.innerHTML = '#ssss' + idTask;
        input_name_task.value = update.innerText;
        change_window();
    }
}
function change_window()
{
    task_edit.classList.toggle('open');
    task_edit_window.classList.toggle('open');
}
