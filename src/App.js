import './App.css';
import React,{useState} from 'react'
import Form from './components/Form'
import List from './components/List'
function App() {
  
  const [taskno,SetTaskno]=useState(0)
  const [items,SetItems]=useState([])
  

    
  return (
    <div className="App">
     <h1>SHOPPING LIST</h1>
     <div className="container">
     
     <Form items={items} SetItems={SetItems}/>
     
     </div>
    
    </div>
  );
}

export default App;
