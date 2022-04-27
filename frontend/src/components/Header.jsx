 
import {   useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' 

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

   

  return (
    <header>
    <h4>
        <label htmlFor="nav-toggle">
            <span className="fas fa-bars"></span>
        </label>

        Dashboard
    </h4>
    
    <div className="user-wrapper">
        <img src="./../assets/undraw_profile_pic_ic-5-t.svg" 
        width="50px" height="50px" alt="admin" />

        <div>
            <h6>user </h6>
            <small>user</small>
        </div>
    </div>
</header>

  )
}

export default Header
