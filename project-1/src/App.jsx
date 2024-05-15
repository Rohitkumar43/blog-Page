
import { useState , useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './Appwrite/auth'
import {login , logout} from './store/Authslice'

function App() {
  const [loading , setloading] = useState(false);
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

  return (
    <>
      <h1>a blog in the App </h1>
    </>
  )
}

export default App
