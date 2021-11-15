import React from "react";
import Uploading from "../components/Uploading/Uploading";

export default function Upload() {
  // const handleFormSubmit = (event) => {
  //   event.preventDefualt();
  //   const newVideo = {
  //     title: event.target.title.value,
  //     description: event.target.description.value,
  //   };
  //   axios.post(`${apiURL}/videos`, newVideo).then((res) => {
  //     console.log(res);
  //   });
  //   alert("Video uploaded");
  //   console.log(back);
  //   back.push("/");
  // };
  return (
    <div>
      <Uploading />
    </div>
  );
}
