import React, { PureComponent } from "react";
import { Data } from "../Data";
import LocationComp from "./location.component";

export default class LocationCont extends PureComponent {
  state = {
    src: "",
    loc: "",
    address: ""
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        const { loc } = this.state;
        Data &&
          Data.find((item) => {
            if (loc === item.Location) {
              this.setState({
                ...this.state,
                src: item.src,
                address: item.address
              });
            }
          });
      }
    );
  };
  handleFunction = {
    handleChange: this.handleChange.bind(this)
  };
  render() {
    return <LocationComp {...this.state} {...this.handleFunction} />;
  }
}
