import React from "react";
import ReactDOM from "react-dom/client";

// React Components
// Everything in React is component
/* 2 types of component 
--1.Class Based Component-Old  
--2. Functional Component-New -[Just a js function]
Name START with capital letter
==> A function which return the jsx


3. Why do we need a functional component if it just similar to react element?
--> Ans will be given in nxt session
 */

const Title = () => (
  <div>
    <h1>Hello This is Title </h1>
  </div>
);

// Functional Componenets - start with capital letter
// syntax-1
/*const HeadingComponent1 = () => {
  return (
    <div>
      <h1>Heading Componenets</h1>
    </div>
  );
};
*/
// syntax-2

/*
Component Composition : Putting Component into another Component
Inside JSX u can inject js code using "{}".

How to put react element inside a components?
--> React element is normal js varible so use like that.
*/
const head = 1000;
const pick = 10;
const reactEle = <h1>React Element {pick}</h1>;

// Above headingComponent we can not access in react element before initialization but
// because it is const in TDZ we can't access it.
const Element = () => (
  <h1 className="Ele">
    {head}
    {reactEle}
    <HeadingComponent />
  </h1>
);
// const data = api.getData();
/*
If above "data" is malicious api call which can take your cookies information
then u don't need to worry jsx take care of such cross site scripting attack
*/

// <Title />  === <Title> </Title>
const HeadingComponent = () => (
  <div id="magic">
    <Title />
    <Title></Title>
    {Title()}
    {head}
    {reactEle}
    <h2>{pick}</h2>
    {console.log("Hello .....")}
    <h1>Heading Componenets</h1>
  </div>
);

// How can I render functional component
// root.render(<HeadingComponent/>)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<Element />);

/*
What makes ur code readable ?
--> using jsx
*/
