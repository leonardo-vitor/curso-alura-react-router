import { NavLink } from 'react-router-dom';
import styles from './navLink.module.css';

export default function NavbarLink({ children, to }) {
    return (
        <NavLink to={to} className={({ isActive }) => `${styles.link} ${isActive ? styles.link__active : ""}`}>
            {children}
        </NavLink>
    )
}
