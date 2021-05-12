import { useEffect } from 'react';
import Layout from '../layout/layout';
import todoCSS from './todo.module.css';
import FormTodo from './form/form';
import Sort from './sort/sort';
import ListItem from './list/list';
import useTodo from '../../hooks/todoRedux/useTodo';
import Pagination from './pagination/pagination';

function Incomplete() {
    const url = "/all/incomplete";
    const { handleTodoListAll, todoList: { todolist } } = useTodo();

    useEffect(() => {
        handleTodoListAll(url);
         // eslint-disable-next-line
    }, [])

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
            </ul> 
            <Pagination url={url} />
        </div>
     </Layout>
    );

};

export default Incomplete;