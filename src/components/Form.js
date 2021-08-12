import React,{useState} from 'react'
import List from './List'
function Form({items,SetItems}) {
const [input,SetInput]=useState("")
const handleChange=(e)=>{
   SetInput(e.target.value);
}
const HandleClick=(e)=>{
    e.preventDefault()
    const newtodo={
    task: input,
    id: new Date().getTime(),
    completed:false,
    count:1
    }
    SetItems([...items].concat(newtodo));
    console.log(items)
    SetInput("");
}
    return (
            <div>
            <form className="todo">
             <input placeholder="add item" value={input}
             onChange={handleChange}
             >
              
             </input>
             <button onClick={HandleClick}>
              ADD
             </button>
            </form>
             <List items={items} SetItems={SetItems}/>
            </div>
    )
}

export default Form
