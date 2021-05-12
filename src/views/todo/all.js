import { useEffect } from 'react';
import Layout from '../layout/layout';
import todoCSS from './todo.module.css';
import FormTodo from './form/form';
import Sort from './sort/sort';
import ListItem from './list/list';
import Pagination from './pagination/pagination';
//redux
import useTodo from '../../hooks/todoRedux/useTodo';

const All = () => {
    const url = "/";
    const { handleTodoListAll, todoList: { todolist } } = useTodo();

    useEffect(() => {
        handleTodoListAll(url);
        // eslint-disable-next-line
    }, []);
    return (
        <Layout>
           <div className="container">
               <FormTodo  />
               <Sort url={url} />
                <ul className={todoCSS.list} id="listHtml">
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
}
 
export default All;