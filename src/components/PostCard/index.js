import MainButton from 'components/MainButton'
import { Link } from 'react-router-dom'
import styles from './postCard.module.css'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img src={`/assets/posts/${post.id}/capa.png`} alt={post.title} className={styles.cover} />
        <h2 className={styles.title}>{post.title}</h2>
        <MainButton>Ler</MainButton>
      </div>
    </Link>
  )
}
