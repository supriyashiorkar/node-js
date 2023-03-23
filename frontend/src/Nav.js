
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <>
    <img src='https://mms.businesswire.com/media/20200312005079/en/779225/23/Code_Logo.jpg'alt='no img'className='logo'/>
      {auth ? <ul className='nav-ui'>
        <li><Link to="/">Product</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse( auth).name})</Link></li>
        {/* <li>{auth?<Link onClick={logout} to="/signup">Logout</Link>:
        <Link to="/signup">SignUp</Link>}</li>

<li><Link to="/login">login</Link></li> */}


      </ul>
        :
        <ul className='nav-ui nav-right'>
          <li><Link to="/signup">SignUp</Link></li>

          <li><Link to="/login">login</Link></li>
        </ul>
      }
    </>

  )
}
export default Nav;