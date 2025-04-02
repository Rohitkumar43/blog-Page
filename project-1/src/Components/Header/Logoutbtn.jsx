import React from 'react';
import { useDispatch } from 'react-redux';
import {Authservice} from '../../Appwrite/auth'
import { logout } from '../../store/Authslice';

function Logoutbtn(){
    const dispatch = useDispatch();
    const logouthandler = Authservice.logout().then( () => {
        dispatch(logout());
    });
    return(
        <button className='inline-block px-4 py-2 duration-200 hover: bg-blue-400 rounded-full' onClick={logouthandler}>Logout</button>
    )
}

export default Logoutbtn;