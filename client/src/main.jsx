import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import DashBoard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
              {
                path:"/",
                element:<Home/>
              },
              {
                path:"/signin",
                element:<Signin/>
              },
              {
                path:"/signup",
                element:<Signup/>
              },
              {
                path:"/dashboard",
                element:<DashBoard/>
              },
              {
                path:"/about",
                element:<About/>
              }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
