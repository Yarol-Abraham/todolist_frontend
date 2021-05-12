import listCSS from './list.module.css';
import { useLocation } from 'react-router-dom';
import useTodo from '../../../hooks/todoRedux/useTodo';

function DeleteTodo({ _id }) {
    const location = useLocation();
    const { handleDeleteTodo } = useTodo();

    return (
    <>
        {
            location.pathname === "/completed" ? 
            (
                <div className={listCSS.li_Item_2}>
                    <button 
                        className={listCSS.btn_delete}
                        onClick={()=> handleDeleteTodo(_id) }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#bdbdbd">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            ) 
            : null
        }
        </>
    );

};

export default DeleteTodo;