import React from 'react';
import {Container , Logo , Logoutbtn} from '../index'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from '../../store/Authslice';
import authservice from '../../Appwrite/auth';
import { Link } from 'react-router-dom'

function Header() {
    const authstatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItem = [
       {/* here all the itema are listing which you want to show in the navbar*/},
        {
            name : "Home",
            slug : "/",
            active: true
        } ,
        {
            name : "Login",
            slug: "/login",
            active : !authstatus
        } ,
        {
            name: "Logout",
            slug: "/logout",
            active: !authstatus
        },
        {
            name : 'All Post',
            slug: "/all-post",
            active: !authstatus
        },{
            name: "Add Post",
            slug: "/add-post",
            active : !authstatus
        }
        
    ]


    return(
        <header className='py-4 shadow bg-slate-400'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width= '40px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItem.map((items) => items.active ? (
                            <li  key={items.name}>  
                            {/* //always u  have to pass a key in the navbar for the listing */}
                                <button className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full ' 
                                onClick={() => navigate(items.slug)}>{items.name}</button>
                            </li>
                        ) : null
                        )}
                        {authstatus && (
                            <Logoutbtn/>
                        )}
                    </ul>
                </nav>

            </Container>
        </header>
    )
}

export default Header;