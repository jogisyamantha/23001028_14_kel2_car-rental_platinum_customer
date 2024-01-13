import logo from '../../assets/logo.png'
import './styles.css'

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <img src={logo} alt='dummy-logo'/>
            <div>
                <a>Our Services</a>
                <a>Why Us</a>
                <a>Testimonial</a>
                <a>FAQ</a>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Navbar;