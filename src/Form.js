import React, { Component } from 'react'


class Form extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     searchValue: ''
   };
 }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value});
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchValue)
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <label>
          Subreddit Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form
