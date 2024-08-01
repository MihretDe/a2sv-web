import React, { useState , useRef, useEffect } from "react";
interface TaskListProps {
    tasks: string[];
    deletebutton: (id: number) => void;
  }
function showlist({ tasks, deletebutton }: TaskListProps) {
  const [editTaskId, setedit] = useState<number | null>(null);
  const [isedditing , setsedditing] = useState(false);
  const [taskt , setTasks] = useState<string []>(tasks)

  const pRef = useRef<(HTMLParagraphElement | null) []> ([]); 

const editbutton = (id:number) => {
    setedit(id);
    setsedditing(true);
}
useEffect(() => {
    if (editTaskId!==null && pRef.current[editTaskId]){
        pRef.current[editTaskId].focus();
    }
});
  
  function savebutton() {
    setedit(null);
    setsedditing(false);
  }
  

const todelete = (id:number) => {deletebutton(id);}
  return (
    <>
      <div className="task-content">
        {tasks.map((task:string , index:number) => (
          <div className="task-item" key={index}>
            <p ref={el => (pRef.current[index] = el)}
                contentEditable={editTaskId === index}>{task}</p>
            {editTaskId !== index && <button onClick={() => editbutton(index)}><span className="material-symbols-outlined">
edit
</span></button>}
            {editTaskId === index && <button onClick={savebutton}><span className="material-symbols-outlined">
check
</span></button>}
            <button onClick={() => todelete(index)}><span className="material-symbols-outlined">
delete_forever
</span></button>
          </div>
        ))}
      </div>
    </>
  );
}
export default showlist;

