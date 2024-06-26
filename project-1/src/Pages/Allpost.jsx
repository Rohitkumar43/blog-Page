import { useState , useEffect} from 'react';
import React  from  'react';
import { Container , Postcard } from '../Components';
import appwriteService from '../Appwrite/database';

function Allpost(){
    const [posts , setposts] = useState([]);
    useEffect(() => {}, []);
    appwriteService.getpost([]).then((posts) => {
        if(posts){
            setposts(posts.documents);
        }
    })
    

    return(
        <div className="py-8 w-full">
           <Container>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <Postcard post={post}/>

                    </div>
                ))}
            </div>
           </Container>
        </div>
    )
}

export default Allpost;