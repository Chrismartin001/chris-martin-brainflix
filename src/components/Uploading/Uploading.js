import React from "react";
import Bike from "../../assets/images/Upload-video-preview.jpg";
import "./uploading.scss";

export default function Uploading() {
  return (
    <article>
      <hr />
      <img src={Bike} alt="Bike rider riding a blue and black bike" />

      <h2 className="comment__header">Upload Video</h2>

      <form className="comment">
        <label className="comment__lable">TITLE YOUR VIDEO</label>
        <input type="text" name="content" className="comment__title" required placeholder="Add a title to your video" />
        <label className="comment__lable">ADD A VIDEO DESCRIPTION</label>
        <input type="text" name="content" className="comment__description" required placeholder="Add a description to your video" />
        <button className="comment__button">Publish</button>
      </form>
    </article>
  );
}
