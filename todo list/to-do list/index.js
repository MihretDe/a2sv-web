document.getElementById("add").addEventListener("click" , function(){
    x = document.getElementById("myForm");
    x.style.display = x.style.display === 'none' ? 'block' : 'none';
})
document.getElementById("addtask").addEventListener("click" , function(){
    x = document.getElementById("task").value;
    const y = document.getElementById("tasks");
    const p = document.createElement("p");
    p.innerHTML= x;
    const taskdiv = document.createElement("div");
    taskdiv.className = "task-item"; 
    
    const taskContent = document.createElement("div");
    taskContent.className = "task-content";

    const editbutton = document.createElement("button");
    editbutton.textContent = "edit";
    editbutton.className = "edit"

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    deletebutton.id = "delete";

    deletebutton.addEventListener("click" , function(){
        taskdiv.outerHTML = "";
    })

    taskContent.appendChild(p);
    taskContent.appendChild(editbutton);
    taskContent.appendChild(deletebutton);

    const editSection = document.createElement("div");
    editSection.className = "edit-section"; 

    editbutton.addEventListener("click" , function(){
        edited = document.createElement("textarea");
        edited.id = "second";
        const editbutton1 = document.createElement("button");
        editbutton1.textContent = "save";
        edited.value = x;
        editbutton1.type = "button";
        editbutton1.addEventListener("click" , function(){
            p.innerHTML = document.getElementById("second").value;
            x = document.getElementById("second").value;
            editSection.removeChild(edited);
            editSection.removeChild(editbutton1);

        })
    
        editSection.appendChild(edited); 
        editSection.appendChild(editbutton1);
    }
    )

    taskdiv.appendChild(taskContent);
    taskdiv.appendChild(editSection);
    y.appendChild(taskdiv)
    document.getElementById("task").value = '';
    z = document.getElementById("myForm");
    z.style.display = 'none';
})
