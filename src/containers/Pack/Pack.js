import React, { Component } from "react";
import axios from "axios";
import BASEURL from "../../services/backendUrlConnect";
import UnpackedItem from "../../components/UnpackedItem/UnpackedItem";
import BagSelector from "../../components/BagSelectorCard/BagSelectorCard";
import "./Pack.css";

const bag = (items = []) => {
  return (
    <div>
      <div className="row px-3 col-6 col-md-4">
        {items.map((e, i) => {
          return (
            <div className="col-6 col-sm-6 col-md-4 p-0" key={i}>
              {/* <UnpackedItem /> */}
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
      tripInfo: null,
      categories: null,
      page: "packing",
      bags: null,
      bagTypes: { 1: "Personal", 2: "Carry-On", 3: "Checked" },
      currentBag: null,
      currentCategory: null,
      lists: null,
      loading: true
    };
  }

  async componentDidMount() {
    const { trip_id } = this.props.match.params;
    const tripBagsAndLists = axios({
      method: "get",
      url: BASEURL + "/trip/init/" + trip_id
    });
    const allCategories = axios({
      method: "get",
      url: BASEURL + "/categories/all"
    });
    try {
      const [{ data: tripDetails }, { data: categories }] = await Promise.all([
        tripBagsAndLists,
        allCategories
      ]);
      this.setState({
        tripInfo: tripDetails.trip,
        categories,
        bags: tripDetails.bags,
        loading: false
      });
      console.log(tripDetails, categories);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }

  handleOnClick = (name, index) => e => {
    console.log(name, index);

    switch (name) {
      case "packing":
        this.setState({ page: name });
      case "reminders":
        this.setState({ page: name });
      default:
        return;
    }
  };

  componentWillUnmount() {}

  renderPack = (bags, bagTypes) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <button className="btn" onClick={this.handleOnClick("packing")}>
              <span>Packing</span>
            </button>
            <button className="btn ">
              <span
                className="text-muted"
                onClick={this.handleOnClick("reminders")}
              >
                Reminder
              </span>
            </button>
          </div>
          <div className="col-2">
            <div className="row">
              <span className="col-12 text-center">Trip</span>
              <i className="col-12 fas fa-long-arrow-alt-left" />
            </div>
          </div>
        </div>

        {/*  BAG SELECTOR  */}
        <div className="row justify-content-around ">
          {bags.map((e, i) => {
            return (
              <BagSelector
                {...e}
                bag_type={bagTypes[e.type_id]}
                key={bagTypes[e.bag_type]}
                handleOnClick={this.handleOnClick}
                item_count={12}
              />
            );
          })}

          {/* PACKED ITEMS */}
          <div className="my-2 container">
            <div className="row">
              <div className="col-12 btn btn-primary">
                <span className="">Packed Items</span>
              </div>
            </div>
          </div>

          {/* */}
        </div>
      </div>
    );
  };

  renderReminders = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <button className="btn" onClick={this.handleOnClick("packing")}>
              <span>Packing</span>
            </button>
            <button className="btn ">
              <span
                className="text-muted"
                onClick={this.handleOnClick("reminders")}
              >
                Reminder
              </span>
            </button>
          </div>
          <div className="col-2">
            <div className="row">
              <span className="col-12 text-center">Trip</span>
              <i className="col-12 fas fa-long-arrow-alt-left" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  handleResize = () => {};

  render() {
    const { loading, page, bags, bagTypes } = this.state;

    return (
      <>
        {loading ? (
          <h1>Loading</h1>
        ) : page === "packing" ? (
          this.renderPack(bags, bagTypes)
        ) : (
          this.renderReminders()
        )}
      </>
    );
  }
});
