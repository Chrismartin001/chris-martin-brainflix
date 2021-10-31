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
          <section>
            <img></img>
            <div>
              <div>
                <h2>{comment.name}</h2>
                <p>{comment.timestamp}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
          </section>
        );
      })}
    </article>
  );
}
