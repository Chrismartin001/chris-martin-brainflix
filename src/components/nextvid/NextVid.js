import React from "react";
import "./NextVid.scss";
import { Link } from "react-router-dom";

export default function NextVid(props) {
  return (
    <section>
      <hr className="hidden-line" />
      <div className="next-video">
        <h2 className="title">Next Vidoes</h2>
        {props.recommVids
          .filter((vid) => vid.id != props.heroVid.id)
          .map((vid) => {
            return (
              <div
                onClick={(event) => {
                  props.handleClick(event, vid.id);
                }}
                className="video"
              >
                {" "}
                <Link to={`/vidoes/${vid.id}`}>
                  <img src={vid.image} alt={vid.title} className="video__img" />
                  <p onClick={(event) => props.handleClick(event, vid.id)}></p>
                </Link>
                <div className="video__box">
                  <p className="video__box--text">{vid.title}</p>
                  <p className="video__box--channel">{vid.channel}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
