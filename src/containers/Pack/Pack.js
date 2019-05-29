import React, { Component } from "react";
import axios from 'axios';
import UnpackedItem from "../../components/UnpackedItem";
import "./Pack.css";

const bag = (items = []) => {
  return (
    <div>
      <div className="row px-3 col-6 col-md-4">
        {items.map((e, i) => {
          return (
            <div className="col-6 col-sm-6 col-md-4 p-0" key={i}>
              <UnpackedItem />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default (class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      bags: null,
      currentBag: null,
      currentCategory: null,
      lists: null
    };
  }

  async componentDidMount() {
    const { trip_id } = this.props.match.params;

  }

  componentWillUnmount() {}

  handleResize = () => {};

  render() {
    const { page } = this.state;
    switch (page) {
      case "bags":
          return b
    }
    return <></>;
  }
});
