import React from "react";
import Uploading from "../components/Uploading/Uploading";
import axios from "axios";

const apiURL = "http://localhost:8080";

export default function Upload() {
  const handleFormSubmit = (event) => {
    event.preventDefualt();
    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
  };
  return (
    <div>
      <Uploading />
    </div>
  );
}
