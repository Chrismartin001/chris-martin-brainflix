import react from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
// import "./vDesription.scss";

export default function VDescription(props) {
  return (
    <main>
      <h1>{props.heroVid.title}</h1>
      <hr />
      <div>
        <div>
          <p>By {props.heroVid.channel}</p>
          <h3>{props.heroVid.timestamp}</h3>
        </div>
        <div>
          <h3>
            <img src={views} />
            {props.heroVid.views}
          </h3>
          <h3>
            <img src={likes} />
            {props.heroVid.likes}
          </h3>
        </div>
        <p>{props.heroVid.description}</p>
      </div>
    </main>
  );
}
