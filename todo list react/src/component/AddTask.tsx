import { ChangeEvent, useState } from "react";

function addTask({ addTask }: { addTask: (task: string) => void }) {
  const [showinputtext, setshowinputtext] = useState(false);
  const [tasktext, settasktext] = useState("");
  const[addt , setaddt] = useState(true);

  function addtaskclick() {
    if (!showinputtext) {
      setshowinputtext(true);
      setaddt(false)
    }
  }
  function textchange(event : ChangeEvent<HTMLTextAreaElement>){
    settasktext(event.target.value)
  }
  function addclick(){
    setshowinputtext(false);
    addTask(tasktext);
    setaddt(true)
  }

  return (
    <>
      { addt &&   <button  onClick={addtaskclick} id="addtask"><span className="material-symbols-outlined">
add_circle
</span> Add Task</button>}
      {showinputtext && (
        <>
          <textarea id = "task" placeholder="enter your text" onChange={textchange}></textarea>
          <button onClick={addclick}>add</button>
          
        </>
      )}
    </>
  );
}

export default addTask;
