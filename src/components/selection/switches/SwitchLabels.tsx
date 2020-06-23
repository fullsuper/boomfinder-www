import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel/index";
import Switch from "@material-ui/core/Switch/index";

class SwitchLabels extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: false,
    checkedE: true,
    checkedF: true,
    checkedG: true
  };

  render() {
    return (
      <div>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              classes={{
                checked: "text-primary",
              }}
              checked={this.state.checkedA}
              onChange={(event, checked) =>
                this.setState({ checkedA: checked })
              }
            />
          }
          label="A"
        />
        <FormControlLabel
          control={
            <Switch
              classes={{
                checked: "text-secondary",
              }}
              checked={this.state.checkedB}
              onChange={(event, checked) =>
                this.setState({ checkedB: checked })
              }
            />
          }
          label="B"
        />
        <FormControlLabel control={<Switch />} disabled label="C" />

        <FormControlLabel
          control={
            <Switch
              classes={{
                checked: "text-dark",
              }}
              checked={this.state.checkedD}
              onChange={(event, checked) =>
                this.setState({ checkedD: checked })
              }
            />
          }
          label="D"
        />
        <FormControlLabel
          control={
            <Switch
              classes={{
                checked: "text-success",
              }}
              checked={this.state.checkedE}
              onChange={(event, checked) =>
                this.setState({ checkedE: checked })
              }
            />
          }
          label="E"
        />
        <FormControlLabel
          control={
            <Switch
              classes={{
                checked: "text-danger",
              }}
              checked={this.state.checkedF}
              onChange={(event, checked) =>
                this.setState({ checkedF: checked })
              }
            />
          }
          label="F"
        />
        <FormControlLabel
          control={
            <Switch
              classes={{
                checked: "text-warning",
              }}
              checked={this.state.checkedG}
              onChange={(event, checked) =>
                this.setState({ checkedG: checked })
              }
            />
          }
          label="G"
        />
      </div>
    );
  }
}

export default SwitchLabels;
