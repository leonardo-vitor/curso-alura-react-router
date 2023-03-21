import styles from './banner.module.css';
import coloredCircle from '../../assets/circulo_colorido.png';
import myPhoto from '../../assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className='apresentacao'>
                <h1 className={styles.title}>Olá mundo!</h1>
                <p className={styles.paragraph}>
                Homer é o pai desajeitado da família Simpson. Com sua esposa, Marge, ele tem três filhos: Bart, filho de quem não gosta, e Lisa e Maggie, duas garotas. Como o sustentador da família, ele trabalha na Usina Nuclear de Springfield.
                </p>
            </div>

            <div className={styles.images}>
                <img className={styles.coloredCircle} src={coloredCircle} alt="Imagem circulo colorido" aria-hidden={true} />
                <img className={styles.myPhoto} src={myPhoto} alt="Homer Simpson lendo" />
            </div>
        </div>
    )
}
