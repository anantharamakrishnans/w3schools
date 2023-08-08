
import './App.css';
import ToDoItems from './ToDoItem/ToDoItem';
import MyComponent from './MyComponent/MyComponent';

function App() {
  return (
    <div className="App">
        <h1> ToDo List </h1>                     
        <ul> 
           <li>             
              <input type='checkbox' /> To Do Item 1 
           </li>

           <li>             
              <input type='checkbox' /> To Do Item 2
           </li>

           <li>             
              <input type='checkbox' />To Do Item 3
           </li>

           <ToDoItems item="4"></ToDoItems> 

        </ul>
        <MyComponent></MyComponent>
    </div>
  );
}

export default App;
