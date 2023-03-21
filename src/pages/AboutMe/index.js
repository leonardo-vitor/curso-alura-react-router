import TemplatePost from "components/TemplatePost";
import styles from './aboutMe.module.css';
import coverImage from 'assets/sobre_mim_capa.png';
import homerSimpson from 'assets/sobre_mim_foto.png'

export default function AboutMe() {
  return (
    <TemplatePost coverImage={coverImage} title="Sobre Mim">
      <h3 className={styles.subtitle}>Doh! Me chamo Homer Simpson</h3>

      <img src={homerSimpson} alt="Homer Simpson" className={styles.abouteMeImage} />

      <p className={styles.paragraph}> 
        Homer Jay Simpson (12 de maio de 1956) é um personagem de desenho animado criado por Matt Groening. Ele é o patriarca da família Simpson, uma série de televisão da FOX. Sua primeira aparição na televisão ocorreu em 19 de abril de 1987. Matt Groening o criou enquanto este estava na sala de espera do escritório de James L. Brooks. Ele havia sido chamado para apresentar uma série de curtas baseado em Life in Hell, mas, em vez disso, criou um elenco de novos personagens. Ele nomeou o pai da família com o nome de seu pai, Homer Groening. Homer é o único personagem que aparece em todos os episódios.
      </p>

      <p className={styles.paragraph}> 
        Homer é o pai desajeitado da família Simpson. Com sua esposa, Marge, ele tem três filhos: Bart, filho de quem não gosta, e Lisa e Maggie, duas garotas. Como o sustentador da família, ele trabalha na Usina Nuclear de Springfield. Homer encarna vários estereótipos cômicos de estadunidenses da classe trabalhadora: é rude, acima do peso, incompetente, grosseiro, preguiçoso, ignorante e adora comer rosquinhas; entretanto, é bastante dedicado à sua família.
      </p>

      <p className={styles.paragraph}> 
        Homer é um dos mais influentes personagens fictícios da televisão, havendo sido descrito pelo jornal britânico The Sunday Times como "a maior criação dos desenhos da era moderna". Também foi votado como a maior personagem da televisão de todos os tempos pelos telespectadores do Channel 4.
      </p>

      <p className={styles.paragraph}> 
        Homer nasceu e foi criado em Springfield (apesar de em um episódio se sugerir que ele nasceu em Toronto, no Canadá, e um outro sugerir que ele nasceu em Connecticut, nos Estados Unidos). Alguns analistas indicam que provavelmente ele nasceu ou foi criado em alguma fazenda ou área rural de Springfield por volta de 19 de abril (o dia em que a série foi ao ar). Homer é filho de Abraham "Abe" Simpson e de Mona Simpson (também conhecida por Penelope Olson). Seu meio-irmão, Herbert Powell, era dono de uma fábrica de automóveis antes de Homer acabar com a empresa. Em um episódio posterior, Homer tenta se reaproximar de Herb permitindo que ele fique com sua família. Herb inventa uma máquina que traduz o que os bebês falam (testado na Maggie) para fala humana compreensível, ganhando de volta seus milhões. Herb nasceu pelo relacionamento do pai de Homer com uma carnavalesca e trabalha atualmente como inventor. A meia-irmã de Homer, Abbie, é fruto do relacionamento de Abe Simpson e uma mulher inglesa que Abe conheceu durante a Segunda Guerra Mundial. Se a história de Natal do vovô sobre um ataque no Pacífico em 1941 fosse verdadeira, Homer também seria sobrinho do irmão de Abraham, Cyrus.
      </p>
    </TemplatePost>
  )
}
