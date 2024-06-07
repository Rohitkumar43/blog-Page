import React, { Children, useState } from 'react';
// FOR LOGIN WE WILL TAKE TOO MANY THINGS IN IMPORT FOR THE FORM 
import { Link , useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/Authslice'; 
import {Button , Input , Logo} from './index'
import { useDispatch } from 'react-redux';
import authservice, { Authservice } from '../Appwrite/auth';
import {useForm} from 'react-hook-form';

function Login(){
    const {navigate} = useNavigate();
    const {register , handlesubmit} = useForm();
    const {error , setError} = useState;
    const {dispatch} = useDispatch;

    const login = async(data) => {
        setError("") // always use this syntax for the setError in the login form 
        try {
            const session = await authservice.login(data)
            if(session) {
                const userData = await authservice.getCurreentUser();
                if(userData){
                    dispatch(authLogin(userData));
                    navigate("/")
                } 
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return(
        <div className='flex items-center justify-center w-full'>
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
            <div className="mb-2 flex justify-center">
                <span className='inline-block w-full max-w[100px]'>
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign in Your Account</h2>
            <p>
                Do&apos; t have any account ?&nbsp;
                <Link to="/signup"
                className='font-medium text-primary transition-all duration-200 hover: underline'>SignUp
                </Link>
            </p>
            // if any error then display thsi one error 
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            </div>
            <form onSubmit={handlesubmit(login)} className='mt-8'>
                <div className="space-y-5">
                    <Input
                    label = "Email:"
                    palceholder = "Enter Your Email"
                    type= "email"
                    {...register("email") , {required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }}}
                    />
                    <Input
                    label="Password"
                    palceholder="Enter Your password"
                    type="password"
                    {...register("password") , {required: true , validate : {
                        matchPatern: (value) => 'a-z' || 'A-Z' 
                    }}}/>
                    <button className='w-full' type='onsubmit'>Sign In</button>
                </div>
            </form>

        </div>
    )
}

export default Login;