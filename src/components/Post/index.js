import { useParams, Routes, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import TemplatePost from "components/TemplatePost";
import DefaultPage from "components/DefaultPage";

import NotFound from "pages/NotFound";

import posts from 'json/posts.json';
import styles from './post.module.css'
import './post.css';
import PostCard from "components/PostCard";


export default function Post() {
  const parameters = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  })

  if (!post) {
    return <NotFound />;
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(parameters.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <>
      <Routes>
        <Route path="*" element={<DefaultPage />}>
          <Route index element={
            <TemplatePost coverImage={`/assets/posts/${post.id}/capa.png`} title={post.title}>
              <div className="post-markdown-container">
                <ReactMarkdown>
                  {post.text}
                </ReactMarkdown>
              </div>

              <h2 className={styles.titleOtherPosts}>Outros posts que você pode gostar:</h2>
              <ul className={styles.recommendedPosts}>
                {recommendedPosts.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>

            </TemplatePost>
          } />
        </Route>
      </Routes>
    </>
  )
}
