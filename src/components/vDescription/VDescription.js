import react from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./vDescription.scss";

export default function VDescription(props) {
  return (
    <main className="container">
      <h1>{props.heroVid.title}</h1>
      <hr />
      <div className="container__info">
        <div className="container__info--left">
          <h4>By {props.heroVid.channel}</h4>
          <h3>
            {" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "numeric",
              day: "2-digit",
            }).format(props.heroVid.timestamp)}
          </h3>
        </div>
        <div className="container__info--right">
          <h4>
            <img className="container__info--icons" src={views} />
            {props.heroVid.views}
          </h4>
          <h3>
            <img className="container__info--icons" src={likes} />
            {props.heroVid.likes}
          </h3>
        </div>
      </div>
      <hr />
      <p>{props.heroVid.description}</p>
      <p className="container__footer">3 comments</p>
    </main>
  );
}
