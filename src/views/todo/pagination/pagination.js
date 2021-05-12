import { useState, useEffect } from 'react';
import { showAlert, hideAlert } from '../../../utils/alerts'; 
import useTodo from '../../../hooks/todoRedux/useTodo';
import paginationCSS from './pagination.module.css';

function Pagination({ url }) {
    
    const { handleTodoListAll, todoList: { todolist, sort } } = useTodo();
    const [ pages, setPages ] = useState(1);

    const handleNext = ()=>{
        if(todolist.length > 0){
            handleTodoListAll(url, pages + 1, sort);
            setPages( pages + 1 );
        }else{
            showAlert("error", "¡There are no more tasks!");
            setTimeout(hideAlert, 3000);
        }
    }

    const handlePreview = ()=>{
        if(pages > 1){
            handleTodoListAll(url, pages-1, sort);
            setPages(pages-1);
        }
    };

    const handleSort = ()=>{
        setPages(1);
    }

    useEffect(()=>{
        handleSort();
        // eslint-disable-next-line
    }, [sort]);
    return (
        <>
        <div className={paginationCSS.pagination}>
            <button
                onClick={handlePreview}
            >Preview</button>
            <button
                onClick={handleNext}
            >Next</button>
        </div>
        </>
    );

};

export default Pagination;