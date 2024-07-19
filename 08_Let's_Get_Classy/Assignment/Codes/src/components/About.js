import UserClass1 from "./UserClass1";
import UserClass2 from "./UserClass2";
import { Component } from "react";
class About extends Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Constructor");
    return (
      <div className="about">
        <h1>About Us</h1>
        <UserClass1 name="userclass-1" game="Class1" />
        <br />
        <UserClass2 name="userclass-2" game="Class2" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <UserClass1 name="userclass-1" game="Class1" />
//       <br />
//       <UserClass2 name="userclass-2" game="Class2" />
//     </div>
//   );
// };

export default About;
