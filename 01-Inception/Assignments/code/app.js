// const c = document.getElementById("main");
// c.innerHTML = "Revising react with fun";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Task:1
/*
<div id="parent">
        <div id="child">
           <h1></h1>
        </div> 
        </div> 
*/

const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { className: "child" }, "Hello I am child")
);
root.render(element);

/*
Task-2:
<div id="parent">
        <div id="child">
           <h1></h1>
           <h1></h1>
        </div> 
        </div> 
*/

const element2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h1", {}, "Hello H2"),
  ])
);
root.render(element);
