// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello using React"
// );
/* Here this {} object is there to give attribute like id etc.
Ex: {id:"heading"}
Here this heading --> react h1 element --> it will be a js object.
props: things which we will pass to the element.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
/*
 This render method take this react element (js object) and then it put it 
 h1 element where it want to put.

    How render works ?
 --> Ans: https://www.telerik.com/blogs/understand-how-rendering-works-react#:~:text=Rendering%20is%20React's%20process%20of,the%20UI%20need%20an%20update.
*/

/*
    How to create below stucture?
---> 1. <div id="parent">
        <div id="child">
           <h1></h1>
        </div> 
        </div> 
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hello I created nested divs")
//   )
// );

// root.render(parent);

/*
    How to create below stucture if inside there are siblings?
    --> we can pass an array of differnt types of tags inside 3rd parameter
    of createElement.
---> 1. <div id="parent">
        <div id="child">
           <h1></h1>
           <h1></h1>
        </div> 
        </div> 
*/
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello h1 created "),
//     React.createElement("h1", {}, "Hello h2 created "),
//   ])
// );
/*
 This will throw error :
react.development.js:199 Warning: Each child in a list should have a unique "key" prop.

will resolve in next episode
 */
// root.render(parent);

/*
 But what if there is more nested structure like  this then 
 --> U can code it but it will look ugly for that there is something
 k/as jsx --> [We will not use createElement in  future]

 <div id="parent">
        <div id="child">
           <h1></h1>
           <h1></h1>
        </div> 
        <div id="child">
           <h1></h1>
           <h1></h1>
        </div> 
        </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello in h1"),
    React.createElement("h2", {}, "Hello in h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello in h1"),
    React.createElement("h2", {}, "Hello in h2"),
  ]),
]);

root.render(parent); // ReactElement(Object)==> HTML(Browser Understands)
