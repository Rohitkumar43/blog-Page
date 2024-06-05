
import { useState , useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './Appwrite/auth'
import {login , logout} from './store/Authslice'
import {Footer , Header} from './Components'

function App() {
  const [loading , setloading] = useState(false); // loading while the data is fetch from server or 3rd party
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.getCurreentUser().then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout());
      }
    }).finally(() => setloading(false))
  })



  // CONDITINAL RENDERING 
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full">
        <Header/>
        <main>
          TODO:
         {/* <outlet/> // react-router dom   */}
        </main>
        <Footer/>
      </div>
    </div>

  ) : null;
}

export default App
