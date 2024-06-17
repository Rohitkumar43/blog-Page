import { useState , useEffect} from 'react';
import React, { useEffect } from  'react';
import { Container , Postcard } from '../Components';
import appwriteService from '../../Appwrite/database';

function Allpost(){
    const [posts , setposts] = useState([]);
    useEffect(() => {}, []);
    appwriteService.getpost(() => {})
    

    return(
        <div className="py-8">
            <Container>
                <Postcard/>
            </Container>
        </div>
    )
}