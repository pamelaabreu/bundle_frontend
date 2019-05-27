import React, { Component } from "react";
import "./Pack.css";

export default (class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      bags: null,
      lists: null,
      width: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    const { width } = this.state;
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="home">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {width}
            </li>
          </ol>
        </nav>
      </>
    );
  }
});
