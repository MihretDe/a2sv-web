interface todo{
    title: string;
}
let addButton: HTMLElement | null = document.getElementById("add");
let form: HTMLElement | null = document.getElementById("myForm");
let addTaskButton: HTMLElement | null = document.getElementById("addtask");
let taskInput: HTMLInputElement | null = document.getElementById("task") as HTMLInputElement;
let tasklist: HTMLElement | null = document.getElementById("tasks");
 addButton?.addEventListener("click" , function(){
    if (form)
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
})
addTaskButton?.addEventListener("click" , function(){
    if (taskInput && tasklist && form){
        const task: todo = {title : taskInput.value};
        const p: HTMLParagraphElement = document.createElement("p");
        p.innerHTML= task.title;

        const taskdiv:HTMLDivElement = document.createElement("div");
        taskdiv.className = "task-item"; 
        
        const taskContent:HTMLDivElement = document.createElement("div");
        taskContent.className = "task-content";

        const editbutton: HTMLButtonElement = document.createElement("button");
        editbutton.textContent = "edit";
        editbutton.className = "edit"

        const deletebutton: HTMLButtonElement = document.createElement("button");
        deletebutton.textContent = "delete";
        deletebutton.id = "delete";

        deletebutton.addEventListener("click" , function(){
            taskdiv.outerHTML = "";
        })

        taskContent.appendChild(p);
        taskContent.appendChild(editbutton);
        taskContent.appendChild(deletebutton);

        const editSection:HTMLDivElement = document.createElement("div");
        editSection.className = "edit-section"; 

        editbutton.addEventListener("click" , function(){
            const edited: HTMLTextAreaElement = document.createElement("textarea");
            edited.id = "second";
            const editbutton1: HTMLButtonElement = document.createElement("button");
            editbutton1.textContent = "save";
            edited.value = task.title;
            editbutton1.type = "button";
            editbutton1.addEventListener("click" , function(){
                p.innerHTML = edited.value;
                task.title = edited.value;
                editSection.removeChild(edited);
                editSection.removeChild(editbutton1);

            })
        
            editSection.appendChild(edited); 
            editSection.appendChild(editbutton1);
        }
        )

        taskdiv.appendChild(taskContent);
        taskdiv.appendChild(editSection);
        tasklist.appendChild(taskdiv)
       taskInput.value = '';
        form.style.display = 'none';
}})
