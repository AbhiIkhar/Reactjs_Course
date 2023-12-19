# Assignment

1. What is the difference between Named Export, Default export and \* as export?
   => There can be more than 1 export but only 1 default export in a file .
   makes them available as properties of the myModule object. It's important to note that while the _ import is used to import all exports, the _ export is used to export all members from a module. This is different from named exports, where you specify the individual exports by name[ES6].

2. What is the importance of config.js file?
   => It is use to store the constant/hard coded values into separate files.

3. What are React Hooks?
   ==> They are utlility function of react , which provide extra functionality. Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

4. Why do we need A useState Hook ?
   ==> Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
