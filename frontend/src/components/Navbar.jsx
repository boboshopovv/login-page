import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className='navbar'>
            <div className='nav-items'>
                <Link to ='/' className='nav-link'>Home</Link>
                <Link to ='/login' className='nav-link'>Login</Link>
                <Link to ='/signup' className='nav-link'>Signup</Link>
            </div>
        </nav>
    )
}

export default Navbar