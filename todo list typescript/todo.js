var addButton = document.getElementById("add");
var form = document.getElementById("myForm");
var addTaskButton = document.getElementById("addtask");
var taskInput = document.getElementById("task");
var tasklist = document.getElementById("tasks");
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () {
    if (form)
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
});
addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener("click", function () {
    if (taskInput && tasklist && form) {
        var task_1 = { title: taskInput.value };
        var p_1 = document.createElement("p");
        p_1.innerHTML = task_1.title;
        var taskdiv_1 = document.createElement("div");
        taskdiv_1.className = "task-item";
        var taskContent = document.createElement("div");
        taskContent.className = "task-content";
        var editbutton = document.createElement("button");
        editbutton.textContent = "edit";
        editbutton.className = "edit";
        var deletebutton = document.createElement("button");
        deletebutton.textContent = "delete";
        deletebutton.id = "delete";
        deletebutton.addEventListener("click", function () {
            taskdiv_1.outerHTML = "";
        });
        taskContent.appendChild(p_1);
        taskContent.appendChild(editbutton);
        taskContent.appendChild(deletebutton);
        var editSection_1 = document.createElement("div");
        editSection_1.className = "edit-section";
        editbutton.addEventListener("click", function () {
            var edited = document.createElement("textarea");
            edited.id = "second";
            var editbutton1 = document.createElement("button");
            editbutton1.textContent = "save";
            edited.value = task_1.title;
            editbutton1.type = "button";
            editbutton1.addEventListener("click", function () {
                p_1.innerHTML = edited.value;
                task_1.title = edited.value;
                editSection_1.removeChild(edited);
                editSection_1.removeChild(editbutton1);
            });
            editSection_1.appendChild(edited);
            editSection_1.appendChild(editbutton1);
        });
        taskdiv_1.appendChild(taskContent);
        taskdiv_1.appendChild(editSection_1);
        tasklist.appendChild(taskdiv_1);
        taskInput.value = '';
        form.style.display = 'none';
    }
});
