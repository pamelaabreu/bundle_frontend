import React, { Component } from "react";
import axios from "axios";
import BASEURL from "../../services/backendUrlConnect";
import PackingPage from "./PackingPage/PackingPage";
import "./PackingOverview.css";

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
      console.log(tripDetails)
      this.setState({
        tripInfo: tripDetails.trip,
        categories,
        bags: tripDetails.bags,
        lists: tripDetails.lists,
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
        break;
      case "reminders":
        this.setState({ page: name });
        break;
      default:
        break;
    }
  };

  componentWillUnmount() {}

  tabs = (page) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <button className="btn" onClick={this.handleOnClick("packing")}>
              <span className={(page === "packing" ? "":"text-muted")}>Packing</span>
            </button>
            <button className="btn "
            onClick={this.handleOnClick("reminders")}
            >
              <span
                className={(page === "packing" ? "text-muted":"")}
                
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

  render() {
    const { loading, page, bags, bagTypes } = this.state;
    return (
      <>
        {this.tabs(page)}
        {loading ? (
          <h1>Loading</h1>
        ) : page === "packing" ? (
          // ( this.renderPack(bags, bagTypes))
          <PackingPage bags={bags} bagTypes={bagTypes}/>
        ) : (
        <h1>Reminders</h1>// <RemindersPage /> 
        )}
      </>
    );
  }
});
