import React, { Component } from "react";
import axios from 'axios'; // ADDED
import TabScreen from "./screens/TabScreen";

export default class FooterTabs extends Component {

  state = {
    info: []
  };

  render() {
    return (
      <TabScreen/>
    );
  }

  componentDidMount = () => {
    this.getTotalData();
  }

  getTotalData = () => {
    axios.get('http://localhost:3000/devices/all')
    .then((response) => {
      let data = response.data;
      this.setState({ info: data });
      console.log(data);
      console.log("data has been received!");
    })
    .catch(() => {
      alert("DIDNT RECEIVE DATA");
    })
  }

}