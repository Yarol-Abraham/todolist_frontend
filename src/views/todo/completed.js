import { useEffect } from 'react';
import Layout from '../layout/layout';
import todoCSS from './todo.module.css';
import FormTodo from './form/form';
import Sort from './sort/sort';
import ListItem from './list/list';
import Modal from './modal';
import useTodo from '../../hooks/todoRedux/useTodo';
import Pagination from './pagination/pagination';

function Completed() {
    const url = "/all/complete";
    const { handleTodoListAll,  todoList: { todolist } } = useTodo();

    useEffect(() => {
        handleTodoListAll(url);
     // eslint-disable-next-line
    }, []);

    return (
        <Layout>
        <div className="container">
           
            <FormTodo />
            <Sort url={url} />
             <ul className={todoCSS.list}>
                {
                    todolist.length > 0 ?
                        todolist.map( todo =>(
                            <ListItem todo={todo} key={todo._id} /> 
                        ))
                    : 
                    <li>
                        <p className={todoCSS.message}>
                            There are no more tasks on the list
                        </p>
                    </li>
                } 
                <li className={todoCSS.li_delete_all}>
                   <Modal />
                </li>  
            </ul> 
            <Pagination url={url} />
        </div>
     </Layout>
    );

};

export default Completed;