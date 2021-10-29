import React from "react";

export default function NextVid(props) {
  return (
    <div>
      {props.recommVids.map((vid) => {
        return <p onClick={props.handleClick}>{vid.title}</p>;
      })}
    </div>
  );
}
