// import React from "react";
import ReactDOM from "react-dom/client";

import { MainComponent, NavbarComponent } from "./MainComponent";

// Making Header
const Container = () => (
  <div className="container">
    <NavbarComponent />
    <MainComponent />
  </div>
);

// const e = React.createElement;
// const par = e("div", { className: "title" }, [
//   e("h1", {}, "Home"),
//   e("h2", {}, "Home2"),
//   e("h3", {}, "Home3"),
// ]);

// const child = <h1>This is just a starting</h1>;
// const par = (
//   <div className="title">
//     {child}
//     <h1>HOME1</h1>
//     <h2>HOME2</h2>
//     <h3>HOME3</h3>
//   </div>
// );

// Functional Component start with capital letter

// const Child2 = () => {
//   return <h1>This is begining of JSX</h1>;
// };

// const Par2 = () => (
//   <div className="title">
//     <Child2></Child2>
//     {Child2()}
//     <Child2 />
//     <h1>HOME1</h1>
//     <h2>HOME2</h2>
//     <h3>HOME3</h3>
//   </div>
// );

//

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Container());

// User logo : <img width="48" height="48" src="https://img.icons8.com/color/48/user.png" alt="user"/>
// Logo : <img width="48" height="48" src="https://img.icons8.com/color/48/disney-logo.png" alt="disney-logo"/>
