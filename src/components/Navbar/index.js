import { useLocation } from 'react-router-dom';
import NavbarLink from '../NavbarLink';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <header>
            <nav className={styles.navbar}>
                <ul className={styles.link}>
                    <NavbarLink to="/">Início</NavbarLink>
                    <NavbarLink to="/sobre-mim">Sobre mim</NavbarLink>
                </ul>
            </nav>
        </header>
    )
}
