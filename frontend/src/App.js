import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Annonces from './pages/annonces'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Recruters from './pages/recruters'
import Register from './pages/Register'
import SideBar from './pages/SideBar'
import addCondidat from './pages/condidats/addCondidat'

function App() {
    return ( <>
        <Router >
        <Routes >
        <Route path = '/login'
        element = { < Login / > } />
         <Route path = '/register'   element = { < Register / > }/> 
        <Route path = '/'   element = { < Dashboard / > } /> 
        <Route path = "/" element = { < Dashboard / > } >
        <Route path = 'recruters'element = { < Recruters / > }/>
         < Route path = 'annonces' element = { < Annonces / > }/>
         < Route path = 'test'element = { < SideBar / > }/>
         <  Route path = 'addcondidat' element = { < addCondidat / > }/>
        </Route> </Routes > </Router> < ToastContainer / >
        </>
    )
}

export default App