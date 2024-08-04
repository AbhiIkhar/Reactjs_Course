import { useEffect } from "react";

const User = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("I am learing Frontend Development");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user">
      <h3>Name : {props.name}</h3>
      <h3>LinkedIn Id: abhishek.ikhar@linkedin</h3>
      <h3>Contact Number : 9096726802</h3>
    </div>
  );
};

export default User;
