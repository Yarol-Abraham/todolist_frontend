const UseSelectCheck = () => {

    function selectCheck(check, labelSelect) {
        if(check.checked){
            labelSelect.style.textDecorationLine = "line-through";
        }else{
            labelSelect.style.textDecorationLine = "none";
        };
    };

    function selectLiCheck(check, labelSelect){
        if(check.checked){
            labelSelect.style.textDecorationLine = "none";
            check.checked = false;
        }else{
            check.checked = true;
            labelSelect.style.textDecorationLine = "line-through";
        };
    };


    return { selectCheck, selectLiCheck }

};
 
export default UseSelectCheck;