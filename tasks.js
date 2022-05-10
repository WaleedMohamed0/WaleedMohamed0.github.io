counter = 0
countLeft = 0

document.querySelector('#addBtn').onclick = function()
{
    if (document.querySelector('.new_Task input').value.length == 0)
    {
        alert('Please Enter a Task')
    }
    else
    {
        counter =counter + 1
        document.getElementById("count").innerHTML = counter + " items left"
        document.getElementById("clearCompleted").style.visibility = "visible"
        document.getElementById("completed").style.visibility = "visible"
        document.getElementById("All").style.visibility = "visible"
        document.getElementById("Active").style.visibility = "visible"
        document.getElementById("noTasksId").style.display= 'none'
        document.querySelector('.tasks_Space').innerHTML +=
        `<div class = "task" id = "taskId">
        <input type = "checkbox" class = "check" id = "checkId">
        <label for = "checkbox"></label>
        <span id = "taskNameID">
          ${document.querySelector('.new_Task input').value}
        </span>
        
        </div><hr id = "hrID">
        `;

    current_Tasks = document.querySelectorAll(".task")
    hr = document.querySelectorAll('#hrID')
    // taskText = document.querySelectorAll('#taskNameID')
        for (var i =0; i<current_Tasks.length;i++)
        {
            current_Tasks[i].onclick = function()
            {
               if(this.firstElementChild.checked)
               {
                   this.firstElementChild.disabled = true
                   this.style.textDecoration= 'line-through'
                   this.style.color= 'grey'
                   countLeft = countLeft + 1
               }
            }
        }
    }
}

document.querySelector("#clearCompleted").onclick = function()
{
    counter = counter - countLeft
    document.getElementById("count").innerHTML = counter + " items left"
    countLeft =0
    for (var i =0; i<current_Tasks.length;i++)
    {
        if(current_Tasks[i].firstElementChild.disabled)
        {
            hr[i].remove()
            current_Tasks[i].remove()
        }      
    }
    
}

document.getElementById("moon").onclick = function()
{
    document.body.classList.toggle("darkBody")
    document.getElementById("moon").classList.toggle("iconDark")
    document.getElementById("addTaskInputID").classList.toggle("addTaskInputDark")
    document.getElementById("containerID").classList.toggle("DarkContainer")
    document.getElementById("tasks_SpaceID").classList.toggle("tasks_SpaceDark")
    document.getElementById("FooterID").classList.toggle("DarkText")
}

document.getElementById("completed").onclick = function()
{
    var x=document.querySelectorAll("#All,#Active")
        for(var i =0;i<x.length;i++)
        {
            x[i].style.color = "grey"
            x[i].style.fontWeight = "normal"
        }
    this.style.color = "blue"
    this.style.fontWeight = "bold"
    for (var i =0; i<current_Tasks.length;i++)
    {
        if(!current_Tasks[i].firstElementChild.disabled)
        {
            hr[i].style.display= "none"
            current_Tasks[i].style.display= "none"
        }
        else
        {
            hr[i].style.display= "flex"
            current_Tasks[i].style.display= "flex"
        }
    }
}
document.getElementById("All").onclick = function()
{
    var x=document.querySelectorAll("#completed,#Active")
        for(var i =0;i<x.length;i++)
        {
            x[i].style.color = "grey"
            x[i].style.fontWeight = "normal"
        }
    this.style.color = "blue"
    this.style.fontWeight = "bold"
    for (var i =0; i<current_Tasks.length;i++)
    {
        hr[i].style.display= "flex"
        current_Tasks[i].style.display= "flex"
    }
}
document.getElementById("Active").onclick = function()
{
    var x=document.querySelectorAll("#All,#completed")
        for(var i =0;i<x.length;i++)
        {
            x[i].style.color = "grey"
            x[i].style.fontWeight = "normal"
        }
    this.style.color = "blue"
    this.style.fontWeight = "bold"
    for (var i =0; i<current_Tasks.length;i++)
    {
        if(!current_Tasks[i].firstElementChild.disabled)
        {
            hr[i].style.display= "flex"
            current_Tasks[i].style.display= "flex"
        }
        else
        {
            hr[i].style.display= "none"
            current_Tasks[i].style.display= "none"
        }
    }
}