// import React from "react";

import React, { Component } from "react";

import data from "../data/video-details.json";
import NextVid from "../components/nextvid/NextVid";
import Comment from "../components/comment/Comment";
import DisplayVid from "../components/displayVideo/DisplayVid";
import VDescription from "../components/vDescription/VDescription";
import "./home.scss";
import axios from "axios";

// const API_URL_COMMENTS

export default class Home extends Component {
  state = {
    heroVid: data[1],
    recommVids: data,
  };

  // componentDidMount() {
  //   axios.get(API_URL_COMMENT_LIST).then((res) => {
  //     console.log(res.data.results);
  //     this.setState({comments: res.data.results[0]}, () => {
  //       const filteredArray = res.data.filter((commentCall) => {
  //         return commentCall.id !== this.state.comments.id;
  //       });
  //       this.setState({coms: filteredArray});
  //     })
  //   }).catch(err);
  // }

  handleClick = (event, id) => {
    console.log("handleClick");
    const currentVid = this.state.recommVids.find((video) => video.id === id);

    this.setState({
      heroVid: currentVid,
      recommVids: data.filter((video) => currentVid.id !== video.id),
    });
  };
  render() {
    console.log(this.state);
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
