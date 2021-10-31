// import React from "react";

import React, { Component } from "react";
import TopBar from "../components/topBar/TopBar";
import data from "../data/video-details.json";
import NextVid from "../components/nextvid/NextVid";
import Comment from "../components/comment/Comment";
import DisplayVid from "../components/displayVideo/DisplayVid";
import VDescription from "../components/vDescription/VDescription";

export default class Home extends Component {
  state = {
    heroVid: data[1],
    recommVids: data,
  };
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
      <div>
        <TopBar />
        <DisplayVid heroVid={this.state.heroVid} />
        <VDescription heroVid={this.state.heroVid} />
        <Comment heroVid={this.state.heroVid} />

        <NextVid heroVid={this.state.heroVid} recommVids={this.state.recommVids} handleClick={this.handleClick} />
      </div>
    );
  }
}
