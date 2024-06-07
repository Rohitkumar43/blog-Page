import React from 'react';
import appwriteService from '../config/config'
import { Link } from 'react-router-dom';

function Postcard($id , tittle , featureImg , ){
    return(
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featureImg)} alt="" />

                </div>
                <h2 className='font-bold'>{tittle}</h2>
            </div>
        </Link>
    )
}

export default Postcard;