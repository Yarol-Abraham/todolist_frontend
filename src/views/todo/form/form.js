import { useState } from 'react';
// import todoCSS from '../todo.module.css';
import formCSS from './form.module.css';

//redux
import useTodo from '../../../hooks/todoRedux/useTodo';

function FormTodo() {

    const [ data, setData ] = useState("");

    const { handleCreateTodo } = useTodo();

    const handleChange = (e)=>{
        setData(e.target.value)
    }

    const handelForm = (e)=>{
        e.preventDefault();
        handleCreateTodo(data);
        setData("");
    };

    return(
        <form 
            className={formCSS.form_default}
            onSubmit={handelForm}
        >
            <input
                type="text"
                name="add"
                placeholder="add details"
                value={data}
                onChange={handleChange}
            />
            <input 
                type="submit"
                name="add_submit"
                value="Add"
            />
        </form>
    )
};

export default FormTodo;