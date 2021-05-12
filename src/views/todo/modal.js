import { useState } from 'react';
import todoCSS from './todo.module.css';
import useTodo from '../../hooks/todoRedux/useTodo';
function Modal() {
    const [ openModal, setOpenModal  ] = useState(false);
    const { handleDeleteTodoAll }= useTodo();
    
    const handleDeleteAll = (state)=>{ setOpenModal(state); };
    
    const handleOnclickDelete = ()=>{
        handleDeleteTodoAll();
        handleDeleteAll(!openModal);
    }
    
    return(
       <>
            <div
                id="modal"
                className={openModal ? todoCSS.modal_show : todoCSS.modal_hide }
            >
                <div className={todoCSS.content_modal}>
                    <p>Are you sure to delete everything?</p>
                    <div className={todoCSS.content_buttons}>
                        <button onClick={handleOnclickDelete} >yes, delete all</button>
                        <button
                            onClick={()=> handleDeleteAll(!openModal)}
                        >no, cancel</button>
                    </div>
                </div>
            </div>
            <button 
                className={todoCSS.btn_delete_all}
                onClick={()=> handleDeleteAll(!openModal)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                delete all
            </button>
       </>
    )    
};

export default Modal;