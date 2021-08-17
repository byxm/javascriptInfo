import React from "react";
import pic from '../assets/1.jpg'
import boat from '../assets/2.jpg'


class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
	src={pic}
	with='100'
	height='100'
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Boat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
	src={boat}
	with='100'
	height='100'
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

// <Mouse> 组件封装了我们需要的行为...
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/* ...但我们如何渲染 <p> 以外的东西? */}
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
          {this.props.render(this.state)}
        </p>
      </div>
    );
  }
}

// react 官网的列子

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }


  render() {
    return (
      <>
        <h1>移动鼠标!</h1>
        <Mouse render={(data) => <Cat mouse={data} />} />
        <Mouse render={(data) => <Boat mouse={data} />} />
      </>
    );
  }
}

export default MouseTracker;
