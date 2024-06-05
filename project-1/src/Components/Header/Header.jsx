import React from 'react';
import { useDispatch } from 'react-redux';
import authservice from '../../Appwrite/auth';
import { logout } from '../../store/Authslice';
function Header() {
    return(
        <div>
            <h2> Header</h2>
        </div>
    )
}

export default Header;

