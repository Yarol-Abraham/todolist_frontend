import { useState, useEffect } from 'react';
import profileCSS from './profile.module.css';
import useAuth from '../../hooks/authRedux/useAuth';
import useUser from '../../hooks/userRedux/useUser';
import Aside from './aside';
const Profile = () => {
    const [ data, setData ] = useState(null);
    const [ imagen, setImagen ] = useState("");
    const [ nameImagen, setNameImagen ] = useState("");
    const { auth: { user } } = useAuth();
    const { handleUpdateMe } = useUser();
    
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };
    const handleImagen = (e) =>{
        setImagen( e.target.files[0] );
        setNameImagen(e.target.files[0].name);
    };
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleUpdateMe(data, imagen);
    };
    
    useEffect(() => {
        setData(user);
    }, [user]);

    return (  
        <main className={`${profileCSS.main} container html_app`}>
            <Aside nameOption="Change password" urlOption="/changedPassword" />
            <div className={profileCSS.Profile}>
            {
                data ? (
                    <form
                    className={profileCSS.form}
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Photo</label>
                    <img 
                        src={`${user.urlPhoto}${user.photo}`} 
                        alt={`${user.name}`} 
                        className={profileCSS.form__user_photo}
                    />
                    <div className={profileCSS.form__photo_upload}>
                        <input 
                            type="file" 
                            name="photo"
                            id="photo"
                            accept="image/*"
                            onChange={handleImagen}
                            className={profileCSS.form__upload}
                        />
                        <label htmlFor="photo">Choose new photo</label>
                    </div>
                        <label 
                        htmlFor="photo" 
                        className={profileCSS.form_name_imagen}
                        >{nameImagen}</label>
                    <input 
                        type="submit"
                        value="Save settings"
                    />
                </form> 
                )
                : null
            }
                    
            </div>
        </main>
    );
}
 
export default Profile;