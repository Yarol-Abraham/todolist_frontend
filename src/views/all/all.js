import { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import allCSS from './all.module.css';
import UseSelectCheck from '../../hooks/useSelectCheck';
import {  useLocation } from 'react-router-dom';
let data = [
    
    {
        id: 1,
        name: "tarea1",
        state: true,
        delete: false
    },

    {
        id: 2,
        name: "tarea2",
        state: true,
        delete: false
    },
    
    {
        id: 3,
        name: "tarea3",
        state: false,
        delete: false
    },

    {
        id: 4,
        name: "tarea4",
        state: false,
        delete: false
    }

];

const All = () => {
    const [ getData, setData ] = useState(data);
    const location = useLocation();
    const { selectCheck, selectLiCheck } = UseSelectCheck();
    function handleLiCheck(el){
        const check = document.getElementById(`${el.id}`);
        const labelSelect = document.getElementById(`${el.name}`);
        selectLiCheck(check, labelSelect);
    };

     function handleCheck(el) {
        const check = document.getElementById(`${el.id}`);
        const labelSelect = document.getElementById(`${el.name}`);
        selectCheck(check, labelSelect);
    };
    
    function stateData(location) {
        if(location.state === "all"){
           setData(data);
        }
        else if(location.state === "active"){
           setData(data.filter(el => el.state !== true && el.delete !== true ));  
        }
        else if(location.state === "completed"){
           setData(data.filter(el => el.state !== false && el.delete !== true ));
        }
    }

    function handleDelete(el) {
        const modify = getData.filter(search => search.id !== el.id );
        setData(modify);
    }

    function handleDeleteAll() {
        setData([]);
    }

    useEffect(() => {
        stateData(location);
    }, [location]);
    
    return (
        <Layout>
           <div className="container">
                <form className={allCSS.form_default}>
                    <input
                        type="text"
                        name="add"
                        placeholder="add details"
                    />
                    <input 
                        type="submit"
                        name="add_submit"
                        value="Add"
                    />
                </form>
                <ul className={allCSS.list}>
                    {
                        getData.map(el => (
                            <li key={el.id}>
                                <div className={allCSS.li_Item_1}>
                                    <input 
                                        id={el.id} 
                                        checked={el.state}
                                        type="checkbox" 
                                        onChange={ ()=> handleCheck(el) }
                                    />
                                    <label
                                        style={{ textDecorationLine: el.state ? 'line-through' : 'none'}}
                                        id={el.name}
                                        onClick={ ()=> handleLiCheck(el) }
                                    >{el.name}
                                    </label>
                                </div>
                               <div  className={allCSS.li_Item_2}>
                                   {
                                       location.state === "completed" ? (
                                        <button 
                                        onClick={ ()=> handleDelete(el) }
                                        className={allCSS.btn_delete}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#bdbdbd">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                       ): null
                                   }
                               </div>
                            </li>
                        ))
                    }
                    {
                        location.state === "completed" ? (
                            <li className={allCSS.li_delete_all}>
                                <button 
                                    onClick={ handleDeleteAll }
                                    className={allCSS.btn_delete_all}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    delete all
                                </button>
                            </li>
                        ): null
                    }
                </ul>
               
           </div>
        </Layout>
     );
}
 
export default All;