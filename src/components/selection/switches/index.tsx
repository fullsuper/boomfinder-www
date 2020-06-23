import React, { Component } from "react";
import Switch from "@material-ui/core/Switch/index";

class Switches extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: false,
    checkedE: true,
    checkedF: true,
    checkedG: true
  };

  handleChange = (name: any) => (event: any, checked: any) => {
    this.setState({ [name]: checked });
  };

  render() {
    return (
      <div>
        <Switch
          classes={{
            checked: "text-primary",
          }}
          checked={this.state.checkedA}
          onChange={this.handleChange("checkedA")}
          aria-label="checkedA"
        />
        <Switch
          classes={{
            checked: "text-secondary",
          }}
          checked={this.state.checkedB}
          onChange={this.handleChange("checkedB")}
          aria-label="checkedB"
        />

        <Switch
          classes={{
            checked: "text-dark",
          }}
          checked={this.state.checkedC}
          onChange={this.handleChange("checkedC")}
          aria-label="checkedC"
          disabled
        />
        <Switch
          classes={{
            checked: "text-dark",
          }}
          checked={this.state.checkedD}
          onChange={this.handleChange("checkedD")}
          aria-label="checkedD"
        />
        <Switch
          classes={{
            checked: "text-success",
          }}
          checked={this.state.checkedE}
          onChange={this.handleChange("checkedE")}
          aria-label="checkedE"
        />

        <Switch
          classes={{
            checked: "text-danger",
          }}
          checked={this.state.checkedF}
          onChange={this.handleChange("checkedF")}
          aria-label="checkedF"
        />

        <Switch
          classes={{
            checked: "text-warning",
          }}
          checked={this.state.checkedG}
          onChange={this.handleChange("checkedG")}
          aria-label="checkedG"
        />
      </div>
    );
  }
}

export default Switches;
