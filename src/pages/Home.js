import React, { Component } from "react";
import NextVid from "../components/nextvid/NextVid";
import Comment from "../components/comment/Comment";
import DisplayVid from "../components/displayVideo/DisplayVid";
import VDescription from "../components/vDescription/VDescription";
import "./home.scss";
import axios from "axios";

const apiKey = "?api_key=deda3838-4e85-4bc0-9f18-19c63f0ff960";
const apiUrl = `https://project-2-api.herokuapp.com`;

export default class Home extends Component {
  state = {
    heroVid: null,
    recommVids: null,
  };

  componentDidMount() {
    axios
      .get(`${apiUrl}/videos${apiKey}`)
      .then((res) => {
        this.setState({ recommVids: res.data });
        return axios.get(`https://project-2-api.herokuapp.com/videos/${res.data[0].id}?api_key=c587c3cb-f196-4e06-8603-5cb8858f17d3`);
      })
      .then((res) => {
        this.setState({ heroVid: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prefState) {
    if (prevProps.match.params.id !== this.props.match.id) {
      axios
        .get(`${apiUrl}/videos/${this.props.match.params.id}${apiKey}`)
        .then((res) => {
          this.setState({ heroVid: res.data });
        })
        .catch((res) => {
          this.setState({ heroVid: res.data });
        });
    }
  }

  // handleClick = (event, id) => {
  //   const currentVid = this.state.recommVids.find((video) => video.id === id);

  //   this.setState({
  //     heroVid: currentVid,
  //     recommVids: null.filter((video) => currentVid.id !== video.id),
  //   });
  // };

  render() {
    if (this.state.heroVid === null) {
      return <p>Loading...</p>;
    }
    return (
      this.state.recommVids &&
      this.state.heroVid && (
        <article>
          <DisplayVid heroVid={this.state.heroVid} />
          <section className="home">
            <div className="home__column">
              <VDescription heroVid={this.state.heroVid} />

              <Comment heroVid={this.state.heroVid} />
            </div>

            <NextVid heroVid={this.state.heroVid} recommVids={this.state.recommVids} />
          </section>{" "}
        </article>
      )
    );
  }
}
