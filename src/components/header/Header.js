import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useAuth } from '../../context/AuthContext'
const Header = ()=> {
    const {token,logout} = useAuth
    return(
        <div className={styles.container}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/goods'}>Товары</Link>
            <Link to={'/about'}>О нас</Link>
            <Link to={'/contacts'}>Контакты</Link>
            {
                token ? 
                <button onClick={()=> logout()}>Выйти из аккаунта</button>:
                <Link to={'/authorization'}>Войти в аккаунт</Link>
            }
        </div>
    )
}
export default Header