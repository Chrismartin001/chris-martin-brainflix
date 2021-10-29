// import React from "react";

import React, { Component } from "react";
import TopBar from "../components/topBar/TopBar";
import data from "../data/video-details.json";
import NextVid from "../components/nextvid/NextVid";

export default class Home extends Component {
  state = {
    heroVid: data[0],
    recommVids: data,
  };
  handleClick = () => {
    console.log("handleClick");
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <TopBar />
        {/* <Description heroVid={this.state.heroVid} /> */}
        <NextVid recommVids={this.state.recommVids} handleClick={this.state.handleClick} />
      </div>
    );
  }
}
