import React , {useEffect , useState} from 'react'
import { Container } from '../Components';
import Postcard from '../Components/Postcard';
import appwriteService from '../Appwrite/database';



function Homepage(){
    const [posts , setposts] = useState([]);
    useEffect(() => {
        appwriteService.getpost([]).then((posts) => {
            if(posts){
                setposts(posts.documents);
            }
        })
    }, []);
    

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}


export default Homepage;