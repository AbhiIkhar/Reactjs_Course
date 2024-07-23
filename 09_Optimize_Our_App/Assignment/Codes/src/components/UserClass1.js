import { Component } from "react";

class UserClass1 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Constructor");

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log(this.props.name + " ComponentDidMount");
    this.timer = setInterval(() => {
      console.log("Component is mounting");
    }, 1000);
  }
  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + "Render");
    const { name, game } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
        <h3>{name}</h3>
        <h3>Game:{game} </h3>
      </div>
    );
  }
}

export default UserClass1;
