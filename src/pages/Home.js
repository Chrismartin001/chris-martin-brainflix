import React, { Component } from "react";
import data from "../data/video-details.json";
import NextVid from "../components/nextvid/NextVid";
import Comment from "../components/comment/Comment";
import DisplayVid from "../components/displayVideo/DisplayVid";
import VDescription from "../components/vDescription/VDescription";
import "./home.scss";
import axios from "axios";

const apiKey = "?api_key=deda3838-4e85-4bc0-9f18-19c63f0ff960";
const apiUrl = `https://project-2-api.herokuapp.com${apiKey}`;

export default class Home extends Component {
  state = {
    heroVid: data[1],
    recommVids: data,
  };

  // componentDidMount() {
  //   axios.get(apiUrl).then((res) => {
  //     console.log(res.data);
  //     this.setState({recommVids: res.data.results[0]}, () => {
  //       const filteredArray = res.data.filter((commentCall) => {
  //         return commentCall.id !== this.state.recommVids.id;
  //       });
  //       this.setState({coms: filteredArray});
  //     })
  //   });
  //   .catch(err);
  // }

  handleClick = (event, id) => {
    const currentVid = this.state.recommVids.find((video) => video.id === id);

    this.setState({
      heroVid: currentVid,
      recommVids: data.filter((video) => currentVid.id !== video.id),
    });
  };
  render() {
    return (
      <article>
        <DisplayVid heroVid={this.state.heroVid} />
        <section className="home">
          <div className="home__column">
            <VDescription heroVid={this.state.heroVid} />

            <Comment heroVid={this.state.heroVid} />
          </div>

          <NextVid heroVid={this.state.heroVid} recommVids={this.state.recommVids} handleClick={this.handleClick} />
        </section>{" "}
      </article>
    );
  }
}
