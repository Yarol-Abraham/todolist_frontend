import { useState, useEffect } from 'react';
import listCSS from './list.module.css';
import useTodo from '../../../hooks/todoRedux/useTodo';
import DeleteTodo from './delete';
function ListItem ({todo}) {
    const [ getChecked, setChecked ] = useState(true);
    const { handleUpdateTodo, todoList: { todolist } } = useTodo();

    const handleChecked = (todo)=>{ 
        if(todo.state === "incomplete") setChecked(false);
     };

    const handleItemState = (todo)=>{
        if(todo.state === "completed"){
            handleUpdateTodo("incomplete", todo._id);
            setChecked(false);
        }else if(todo.state === "incomplete"){
            handleUpdateTodo("completed", todo._id);
            setChecked(true);
        };
    }

    useEffect(() => {
        handleChecked(todo);
        // eslint-disable-next-line
    }, [todolist]);

    return (
        <li className={listCSS.list_item} >
            <div className={listCSS.li_Item_1}>
                <input 
                    type="checkbox"
                    checked={getChecked}
                    onChange={() => handleItemState(todo) }
                />
                <label
                    className={
                        getChecked ? listCSS.label_completed : ""
                    }
                >{todo.name}</label>
            </div>
            <DeleteTodo _id={todo._id} />    
        </li>
    )
};

export default ListItem;
