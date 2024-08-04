import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
      <div className="">
        <h1 className="">About Us</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
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
