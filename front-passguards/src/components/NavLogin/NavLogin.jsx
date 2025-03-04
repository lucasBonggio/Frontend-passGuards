import './NavLogin.css';
import logo from '../../img/logo.png';

export default function NavLogin(){

    return(
        <div className="contenedor-navLogin">
            <img className='logo-login' src={logo} alt="" />
        </div>
    )
}