import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement("h1", {}, "Hello I am building foundation");
/*
 Above syntax is not developer friendly

 We are writing code for human ==> then for machine.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxheading = (
  <div>
    <h1>Hello </h1>
  </div>
);

/*
Jsx is not valid javascript it can not be understand JS Engine because JS Engine
understand ES6 + all versions

If JS engine can't understand this code then how JS Engine able to run it ?
--> This JSX code get transpiled-(converted into browser understandable code) by Parcel with
help of babel.

How babel-[it is library not created by facebook] is doing this ?
--> Takes jsx and convert into js 


How the above code is working ?
--> JSX => React.createElement => JS object => HTMLElement with help of render
*/

console.log(jsxheading);
console.log(head);
/*
 jsxheading is also a react element ==> js object

 jsxheading === head
*/
// root.render(head);

root.render(jsxheading);
/*
JSX -- Javascript syntax which is easier to create ReactElement
It is syntatical sugar
React and JSX are different 

JSX == Jsx is not html in js , it is html like syntax or xml like.
*/
