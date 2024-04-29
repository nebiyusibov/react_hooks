import { useState } from "react"

function Form() {
    const [toDo,settoDo]=useState("")
    const [todos,settodos]=useState([])
    function addToDO(e) {
        e.preventDefault()
        settodos([...toDo,todos])
        settoDo("")
    }
    function toDoValue(e) {
        settoDo(e.target.value)
    }
  return (
    <div>
      <form action="" onSubmit={addToDO}>
        <input type="text"  onChange={toDo} value={(e)=>toDoValue(e)}/>
      </form>
      <ol>
        {todos.map((x)=>(
            <li key={x.id}>{x.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default Form
