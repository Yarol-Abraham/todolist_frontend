//redux
import { useDispatch, useSelector } from 'react-redux';
import { 
    todoSort,
    todoListAll,
    createTodo, 
    deleteTodo,
    deleteTodoAll,
    updateStateTodo
} from '../../redux/actions/todo/todoActions';

function useCreateTodo() {
    const dispatch = useDispatch(); 
    const _createTodo = (data)=> dispatch( createTodo(data) );
    const _updateStateTodo = (state, _id) => dispatch( updateStateTodo(state, _id) );
    const _todoListAll = (url, pages, sort)=> dispatch( todoListAll(url, pages, sort) );
    const _todoSort = (sort)=> dispatch( todoSort(sort) );
    const _deleteTodo = (_id) => dispatch( deleteTodo(_id) );
    const _deleteTodoAll = () => dispatch( deleteTodoAll() );
    const todoList =  useSelector( state => state.todoList );
    
    function handleTodoSort(sort) {
        _todoSort(sort);
    }

    function handleTodoListAll(url, pages, sort) {
        _todoListAll(url, pages, sort);
    };

    function handleCreateTodo(data) {
        _createTodo(data);
    };

    function handleUpdateTodo(state, _id) {
        _updateStateTodo(state, _id);
    };

    function handleDeleteTodo(_id) {
        _deleteTodo(_id);
    };
    function handleDeleteTodoAll() {
        _deleteTodoAll();
    };
    return {
        handleTodoSort,
        handleTodoListAll,
        handleCreateTodo,
        handleUpdateTodo,
        handleDeleteTodo,
        handleDeleteTodoAll,
        todoList
      }

};
 
export default useCreateTodo;