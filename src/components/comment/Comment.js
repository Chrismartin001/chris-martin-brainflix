import React from "react";
import "./Comment.scss";

export default function Comment(props) {
  return (
    <article>
      <form className="comment">
        <h2 className="comment__header">Join the Conversation</h2>
        <div className="comment__overlay">
          <figure className="comment__avatar"></figure>
          <input type="text" name="content" className="comment__title--box" required placeholder="Add a new comment" />{" "}
        </div>
        <button className="comment__button">Comment</button>
        <hr className="divider" />
      </form>

      {props.heroVid.comments.map((comment) => {
        return (
          <section className="comment-Container">
            <div className="comment-card">
              <img className="comment-card__avatar" />

              <h2 className="comment-card__name">{comment.name}</h2>
              <p className="comment-card__date">
                {" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                }).format(comment.timestamp)}
              </p>

              <p className="comment-card__text">{comment.comment}</p>
            </div>

            <hr />
          </section>
        );
      })}
    </article>
  );
}

// {comment.timestamp}
