import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        url: "Dummy",
      },
    };
    // console.log(this.props.name + "Child Constructor call");
  }

  async componentDidMount() {
    console.log("Component Mount");
    // const data = await fetch("https://api.github.com/users/AbhiIkhar");
    // const jsonData = await data?.json();

    // console.log(jsonData);

    // this.setState({
    //   userInfo: jsonData,
    // });

    // Should cleanup this interval because its SPA so
    // web page will not load only required thing will change on the same page so
    // need to cleanup this interval.

    this.timer = setInterval(() => {
      console.log("I am learning react");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Update");
  }

  componentWillUnmount() {
    // Cleaning up the interval
    clearInterval(this.timer);
    console.log("Component Will unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render call");
    const { name, url } = this.state.userInfo;
    return (
      <div className="user">
        {/* <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          INCREASE
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          DECREASE
        </button> */}
        {/* Here this is use so that I can access the variable of this instance only */}
        <h3>Name : {name}</h3>
        <h3>URL: {url}</h3>
      </div>
    );
  }
}
export default UserClass;

// Classes are the special function in javascript

// There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.

// Methods can be plain functions, async functions, generator functions, or async generator functions.
