import React, { Component, ChangeEvent } from "react";
import Input from "@material-ui/core/Input/index";
import InputLabel from "@material-ui/core/InputLabel/index";
import FormControl from "@material-ui/core/FormControl/index";
import FormHelperText from "@material-ui/core/FormHelperText/index";

class ComposedTextField extends Component {
  state = {
    name: "Composed TextField"
  };

  handleChange = (event: any) => {
    if (event && event.target) {
      this.setState({ name: event.target.value });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-simple">Name</InputLabel>
            <Input
              id="nameSimple"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormControl>
        </div>
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-helper">Name</InputLabel>
            <Input
              id="nameHelper"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-disabled">Name</InputLabel>
            <Input
              id="name22"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-3">
          <FormControl className="mb-3" fullWidth>
            <InputLabel htmlFor="name-error">Name</InputLabel>
            <Input
              id="nameError"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default ComposedTextField;
