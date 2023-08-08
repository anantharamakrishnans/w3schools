import './todo.css';

function ToDoItems(props){
    const sometext = "Hello World!!";
    return(
        <>
            <li className='item' style={{backgroundColor:"red"}}> {/* Overriding css              */}
                <input type='checkbox' /> To Do Item {props.item} {sometext}
            </li>
        </>
    );
}

export default ToDoItems;