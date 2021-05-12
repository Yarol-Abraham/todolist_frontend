import sortCSS from './sort.module.css';
import useTodo from '../../../hooks/todoRedux/useTodo';
function Sort({ url }) {
    const { handleTodoListAll, handleTodoSort } = useTodo();
    const handleSortUp = ()=>{
        handleTodoSort("createAt");
        handleTodoListAll(url, 1, "createAt");
    }
    const handleSortDown = ()=>{
        handleTodoSort("-createAt");
        handleTodoListAll(url, 1, "-acreateAt");
    }
    return(
        <div className={sortCSS.main_sort} >
            <button
                onClick={handleSortUp}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className={sortCSS.sort_svg} viewBox="0 0 20 20" fill="#fff">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>

            <button
                onClick={handleSortDown}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className={sortCSS.sort_svg} viewBox="0 0 20 20" fill="#fff">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
           
        </div>
    );

};


export default Sort;