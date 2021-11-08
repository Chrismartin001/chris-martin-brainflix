import React from "react";
import Bike from "../../assets/images/Upload-video-preview.jpg";
import "./uploading.scss";

export default function Uploading() {
  return (
    <article className="upload">
      <hr className="upload__divider" />
      <h2 className="upload__title">Upload Video</h2>
      <hr className="upload__hidden" />
      <h3 className="upload__thumb-title">VIDEO THUMBNAIL</h3>
      <div className="container1">
        <img className="upload__bike" src={Bike} alt="Bike rider riding a blue and black bike" />

        <section className="comment1">
          <label className="comment1__lable">TITLE YOUR VIDEO</label>
          <input type="text" name="content" className="comment1__title" required placeholder="Add a title to your video" />
          <label className="comment1__lable">ADD A VIDEO DESCRIPTION</label>
          <input type="text" name="content" className="comment1__description" required placeholder="Add a description to your video" />

          <hr className="upload__hidden" />
          <div className="comment1__overlay">
            <button className="comment1__button">Publish</button>
            <h2 className="comment1__cancel">CANCEL</h2>
          </div>
        </section>
      </div>
    </article>
  );
}
