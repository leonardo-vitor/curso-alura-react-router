import styles from './notFound.module.css';
import dogImage from 'assets/erro_404.png';
import MainButton from 'components/MainButton';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigation = useNavigate();

    return (
        <>
        <div className={styles.contentContainer}>
            <span className={styles.text404}>404</span>

            <h1 className={styles.title}>Ops! Página não encontrada.</h1>

            <p className={styles.paragraph}>
                Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.paragraph}>
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div className={styles.btnContainer} onClick={() => navigation(-1)}>
                <MainButton size='lg'>Voltar</MainButton>
            </div>

            <img src={dogImage} alt="Página não encontrada" className={styles.dogImage} />
        </div>
        
        <div className={styles.whiteSpace}></div>
        </>
    )
}
