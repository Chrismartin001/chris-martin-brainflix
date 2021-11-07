import React from "react";
import "./Comment.scss";

export default function Comment(props) {
  return (
    <article>
      <h2 className="comment__header">Join the Conversation</h2>
      <form className="comment">
        <div className="comment__overlay2">
          <figure className="comment__avatar"></figure>
          <input type="text" name="content" className="comment__title--box" required placeholder="Add a new comment" />{" "}
        </div>
        <button className="comment__button">Comment</button>
      </form>

      {props.heroVid.comments.map((comment) => {
        return (
          <section className="comment-Container">
            <hr className="dividers" />
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
            </div>
            <p className="comment-card__text">{comment.comment}</p>
          </section>
        );
      })}
      <hr className="divider" />
    </article>
  );
}

// {comment.timestamp}
