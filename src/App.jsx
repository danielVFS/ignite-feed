import { Header } from "./components/Header";

import styles from "./App.module.scss";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { posts } from "./core/posts";
import "./global.scss";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
