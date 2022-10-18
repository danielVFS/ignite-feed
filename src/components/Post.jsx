import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { commentsData } from "../core/comments";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.scss";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(commentsData);

  const publishedDateFormated = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    const newComment = event.target.comment.value;
    setComments([...comments, newComment]);
    event.target.comment.value = "";
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((c, idx) => {
          if (c.type === "paragraph") {
            return <p key={idx}>{c.content}</p>;
          } else if (c.type === "link") {
            return (
              <p key={idx}>
                <a href="">{c.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment" placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, idx) => {
          return <Comment key={idx} content={comment} />;
        })}
      </div>
    </article>
  );
}
