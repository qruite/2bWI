
const tasks = [];
printTaskList();


document.getElementById("addTask").addEventListener("click", function (){
    addTask();    
})

function addTask(){
    let taskName = document.getElementById("txtNewTask").value;
    let newTask = { name:taskName,isDone:"" };
    tasks.push(newTask);
    printTaskList();
}

function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function validate(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;

    tasks[index].isDone = isChecked;
    printTaskList();
}

function getHTMLTasks() {
    let html = "";
    let index = 0;

    tasks.forEach(element => {
        let checked = "";
        if(element.isDone){
            checked = "checked";
        };

        html += "<li><input onclick='validate(this)' name='checkbox' type='checkbox' data-index='" + index + "'" + checked + "/>" + element.name + "</li>";
        index++;
    });
    
    return html;        
}


