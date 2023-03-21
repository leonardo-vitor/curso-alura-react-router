import styles from './footer.module.css';
import {ReactComponent as RegisteredBrand} from 'assets/marca_registrada.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <RegisteredBrand />
        Desenvolvido por Leonardo Vitor dos Santos
    </footer>
  )
}
