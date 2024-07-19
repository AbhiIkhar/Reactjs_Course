import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    console.log("Parent Constructor called");
  }

  // componentDidMount() {

  // }

  render() {
    console.log("Parent Render called");
    return (
      <div className="about">
        <h1>About Us</h1>
        {/* <UserClass /> */}
        <User />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <UserClass name="Abhishek Ikhar - Class" location="Pune" />
//     </div>
//   );
// };

export default About;
