import React, { Component } from "react";

class NewLifeCycle extends Component {
  state = {
    count: 0,
    age: 22
  };

  componentDidMount() {
    console.log("didMount", this.state.count);

    //   setTimeout(() => {

    //   }, 0)
  }

  handleClick = () => {
    console.log(this.state.age);
    this.setState({
      age: this.state.age + 1,
    });
    console.log(this.state.age);

    // setTimeout(() => {
    //   for (let i = 0; i < 100; i++) {
    //     this.setState({ count: i });
    //   }
    //   console.log("count", this.state.count);
    // });
  };


  clickChange = async () => {
    console.log('async render', this.state.age)
    this.setState({
      age: this.state.age + 1
    })
    console.log('async render', this.state.age)
  } 



  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.handleClick}>按钮</button>
        <button onClick={this.clickChange}>按钮2</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default NewLifeCycle;
