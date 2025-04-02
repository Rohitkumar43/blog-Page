import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import { AuthLayout , Login } from './Components/index.js'


import AddPost from "./Pages/Addpost.jsx";
import Signup from './Pages/Signup.jsx'
import Editpost from "./Pages/Editpost.jsx";

import Post from "./Pages/Post.jsx";

import Allpost from "./Pages/Allpost.jsx";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <Allpost />
            </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <Editpost />
            </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },

    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
