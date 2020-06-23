import React from 'react';
import MenuItem from '@material-ui/core/MenuItem/index';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IntlMessages from '@/utils/IntlMessages';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class TextFields extends React.Component {
  state = {
    name: '',
    title: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
    price: 0,
    pictures: [],
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handlePictureChange = (event: any) => {
    // console.log(this.state.pictures)

    this.state.pictures.push(event.target.value);

    console.log(this.state.pictures)

    this.setState({
      pictures: this.state.pictures,
    });
  };

  render() {
    console.log(this.state.pictures, "hello")

    return (
      <form className="row" noValidate autoComplete="off">
        <div className="col-md-4 col-6">
          <TextField
            id="name"
            label="Room Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
        </div>

        <div className="col-md-4 col-6">
          <TextField
            id="title"
            label="Room Title Name"
            value={this.state.title}
            onChange={this.handleChange('title')}
            margin="normal"
            fullWidth
          />
        </div>

        <div className="col-md-4 col-6">
          <TextField
            id="price"
            label="Price"
            value={this.state.price}
            onChange={this.handleChange('price')}
            margin="normal"
            fullWidth
          />
        </div>

        {/* <div className="col-md-3 col-12">
          <TextField
            id="select-currency"
            select
            label="Select"
            value={this.state.currency}
            onChange={this.handleChange("currency")}
            SelectProps={{}}
            helperText="Please select your currency"
            margin="normal"
            fullWidth
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="col-md-3 col-12">
          <TextField
            id="select-currency-native"
            select
            label="Native select"
            value={this.state.currency}
            onChange={this.handleChange("currency")}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
            margin="normal"
            fullWidth
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div> */}
        <div className="col-md-12 col-12">
          <TextField
            id="multiline-static"
            label="Multiline"
            multiline
            rows="3"
            defaultValue=""
            margin="normal"
            fullWidth
          />
        </div>

        <div className="col-md-4 col-6">
          <Button variant="contained" component="label">
            Upload File
            <input type="file" style={{ display: 'none' }} onChange={this.handlePictureChange}/>
          </Button>
        </div>
        <div className="col-md-12 col-6">
          <GridList cols={6}>
            {Array.from(this.state.pictures).map((pic: string, index: number) => (
              <GridListTile key={index}>
                <img src='https://via.placeholder.com/150x150' alt={pic} />
              </GridListTile>
            ))}
          </GridList>
        </div>

        {/* <div className="col-12">
          <TextField
            id="full-width"
            label="Label"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
          /> 
        </div>*/}
      </form>
    );
  }
}

export default TextFields;
