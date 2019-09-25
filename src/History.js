import React, { Component } from 'react'

class History extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subName: this.props.subName,
      clickCount: 1
    };
  }


    handleClick = (event) => {
      event.preventDefault();
      this.props.click(this.state.subName);
      this.setState({clickCount:this.state.clickCount + 1});
    }




     render() {
       return(
         <div>
         <button type='button' onClick={this.handleClick}>{this.props.subName}</button>
         <label>Clicked: {this.state.clickCount}</label>
         </div>
     );
     }
}

export default History
