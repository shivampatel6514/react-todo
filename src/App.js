import './App.css';
import { useState } from 'react';
import ToDoLists from './ToDoLists';
function App() {

  const [inpulList, setInpulList] = useState('');
  const [items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInpulList(event.target.value)
  };
  const listSave = () => {
    setItems((oldItems) => {
      return [...oldItems, inpulList];
    })
    setInpulList("");

  };
  const deleteItems = (id) =>{
    console.log(id);
    setItems((oldItems) => {
      return oldItems.filter((arrElem ,index) => {
        return index !== id;
      })
    })
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Todo's" value={inpulList} onChange={itemEvent} />
          <button onClick={listSave} > + </button>

          <ol>

            {
              items.map((itemvalue, i) => {
                return(  
                  <ToDoLists 
                    key={i} 
                    id={i} 
                    text={itemvalue}
                    onSelect={deleteItems}
                  />);
              })
            }
                {/* return <li key={i}>{itemvalue}</li> */}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
