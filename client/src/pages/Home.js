import React, { Component } from "react";
import NextVid from "../components/nextvid/NextVid";
import Comment from "../components/comment/Comment";
import DisplayVid from "../components/displayVideo/DisplayVid";
import VDescription from "../components/vDescription/VDescription";
import "./home.scss";
import axios from "axios";

const apiUrl = "http://localhost:8080";

export default class Home extends Component {
  state = {
    heroVid: null,
    recommVids: null,
  };

  componentDidMount() {
    axios
      .get(`${apiUrl}/videos`)
      .then((res) => {
        this.setState({ recommVids: res.data });
        return axios.get(`${apiUrl}/videos/${res.data[0].id}`);
      })
      .then((res) => {
        this.setState({ heroVid: res.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prefState) {
    if (prevProps.match.params.id !== this.props.match.id) {
      axios
        .get(`${apiUrl}/videos/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({ heroVid: res.data });
        })
        .catch((res) => {
          this.setState({ heroVid: res.data });
        });
    }
  }

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
          </section>
        </article>
      )
    );
  }
}
