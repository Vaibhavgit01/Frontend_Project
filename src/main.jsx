import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Onebhk from "./Pages/Services/Onebhk.jsx"
import Twobhk from "./Pages/Services/Twobhk.jsx"
import Threebhk from "./Pages/Services/Threebhk.jsx"
import Contact from "./Pages/Contact.jsx"
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Profiletest from './Pages/Profiletest.jsx'
import { AuthProvider} from './Components/context/Authcontext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Onebhk",
        element: <Onebhk/>
      },
      {
        path: "Twobhk",
        element: <Twobhk/>
      },
      {
        path: "Threebhk",
        element: <Threebhk/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "Login",
        element: <Login/>
      },
      {
        path: "Register",
        element: <Register/>
      },
      {
        path: "Profiletest",
        element: <Profiletest/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
