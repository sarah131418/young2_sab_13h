function add_task(){
    let task = document.querySelector('#input_task').value;
    console.log('task')
    
    let list_task = document.querySelector('.list_task');
    
    let delete_button = document.createElement('button')
    delete_button.textContent = "➖"
    delete_button.style.marginLeft = '10px';
    delete_button.onclick = function() (
        new_task.remove()
    ;

    let new_task = document.createElement('li')
    new_task.textContent= task;
    list_task.appendChild(new_task)

    document.querySelector = ("#input_task").value = ""
}