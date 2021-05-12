export const hideAlert = ()=>{
    const el = document.querySelector('.alert');
    if(el) el.parentElement.removeChild(el);
};

export const showAlert = (type, message)=>{
    hideAlert();
    const markup = `<div class="alert alert--${type}">${message}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
};

export function handleShowAlert(type, message, opacity = 0) {
    showAlert(type, message);
    document.querySelector('.html_app').style.opacity = opacity;
}

export function handleHideAlert(opacity = 1) {
    hideAlert();
    document.querySelector('.html_app').style.opacity = opacity;
}
