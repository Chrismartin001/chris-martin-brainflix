import "./DisplayVid.scss";

export default function DisplayVid(props) {
  return (
    <div className="video">
      <video controls poster={props.heroVid.image}></video>
    </div>
  );
}
