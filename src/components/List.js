import React from 'react'

function List({items,SetItems}) {
   const handleRemove=(id)=>{
      const newItems =[...items].filter((item)=>item.id!==id)
      SetItems(newItems)
   }
const add=(id)=>{
 const newItems= [...items].map(
    (item)=>{
      if(item.id===id){
        item.count=item.count+1;
      }
      return item
    }
  )
  SetItems(newItems)
}
const sub=(id)=>{
  const newItems= [...items].map(
     (item)=>{
       if(item.id===id){
         if(item.count===1){
           alert("Count cant be 0");
           return ;
         }
         item.count=item.count-1;
       }
       return item
     }
   )
   SetItems(newItems)
 }
 
   
    return (
        <div className="task">
          {items.map(
          (item)=><div className="contain" key={item.id}>
          <div className="itask" >{item.task}</div>
          <div className="div-contents">
            <button onClick={()=>handleRemove(item.id)}>remove</button>
           
            <button id="add"onClick={()=>add(item.id)}>+</button>
            <p>{item.count}</p> 
            <button id="sub" onClick={()=>sub(item.id)}>-</button>
          </div>
        </div>
          )}
          
        </div>
    )
}

export default List
