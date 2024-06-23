import React , {useEffect , useState} from 'react'
import { Container } from '../Components';
import {Postform} from '../Components/Post-form/Postform';
import appwriteService from '../Appwrite/database';
import { useNavigate, useParams } from 'react-router-dom';



function Editpost(){
    const [post , setposts] = useState([]);
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(slug){
            appwriteService.getpost(post).then((post) => {
                if(post){
                    setposts(post);
                }
            })
        } else{
            navigate('/');
        }
    } , [])
    return post ? (
        <div className="py-8">
            <Container>
                <Postform post={post}/>
            </Container>
        </div>
    ) : null
}

export default Editpost;