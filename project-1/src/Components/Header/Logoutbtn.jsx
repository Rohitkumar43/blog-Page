import React from 'react';
import { useDispatch } from 'react-redux';
import authservice from '../../Appwrite/auth';
import { logout } from '../../store/Authslice';

function Logoutbtn(){
    const dispatch = useDispatch();
    const logouthandler = authservice.logout().then( () => {
        dispatch(logout());
    });
    return(
        <button className='inline-block px-4 py-2 duration-200 hover: bg-blue-400 rounded-full'>Logout</button>
    )
}

export default Logoutbtn;