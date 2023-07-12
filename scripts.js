var taskList = document.getElementById("task-List");
var taskInput = document.getElementById("task-Input");

function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerText = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            li.remove();
        };

        var editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = function() {
            var updatedTask = prompt("Edit task", span.innerText);
            if (updatedTask !== null) {
                span.innerText = updatedTask.trim();
            }
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
