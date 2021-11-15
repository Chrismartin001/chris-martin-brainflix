import React from "react";
import "./uploading.scss";
import Bike from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";

const apiURL = "http://localhost:8080";

export default function Uploading({ history }) {
  const uploadVideo = (event) => {
    event.preventDefault();
    const newVideo = {
      title: event.target.title.value,
      image: `${apiURL}/images/bike.jpg`,
      description: event.target.description.value,
    };
    axios
      .post("http://localhost:8080/videos", newVideo)
      .then(() => console.log("Video posted"))
      .catch((err) => {
        console.log(err);
      });
    alert("Video uploaded");
    history.push("/");
  };

  return (
    <article className="upload">
      <hr className="upload__divider" />
      <h2 className="upload__title">Upload Video</h2>
      <hr className="upload__hidden" />
      <h3 className="upload__thumb-title">VIDEO THUMBNAIL</h3>
      <div className="container1">
        <img className="upload__bike" src={Bike} alt="Bike rider riding a blue and black bike" />

        <form onSubmit={uploadVideo} id="Uploading" className="comment1">
          <label className="comment1__lable">TITLE YOUR VIDEO</label>
          <input type="text" name="title" className="comment1__title" required placeholder="Add a title to your video" />
          <label className="comment1__lable">ADD A VIDEO DESCRIPTION</label>
          <input type="text" name="description" className="comment1__description" required placeholder="Add a description to your video" />

          <hr className="upload__hidden" />
          <div className="comment1__overlay">
            <button form="Uploading" type="submit" className="comment1__button">
              Publish
            </button>
            <h2 className="comment1__cancel">CANCEL</h2>
          </div>
        </form>
      </div>
    </article>
  );
}
