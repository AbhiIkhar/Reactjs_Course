## Planning comes first before coding the app.

## When u want to dynamically pass some data to any components how to do so ? :

-->

1. using prop -(Properties)-just normal arguments to a function.
2. In the component this prop is taken as normal js object .

## Config driven UI [Mostly used in industry now]

1. Controlling UI based on data (coming from backend).
2. Let's say in swiggy website as different courosel based on different city as offer will be different.

## UI layer + Data Layer ==> This togther make our frontend application.

1. Good frontend engineer is one who have knowedlege of api and how data is coming from backend.

## index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Body`. See https://reactjs.org/link/warning-keys for more information.
at RestuarantCard (http://localhost:1234/index.7826abd7.js:4158:13)
at Body
at div
at AppLayout

- In body component u loop over restaurant list so to uniquely identify each object u should pass the key prop to "RestaurantCard" component.

```
CODE:
resList.map((resObj) => (
            <RestuarantCard key={resObj.data.id} resData={resObj} />
          ))

```

resObj.data.id --> is restaurant id
First thing first this key should be unique.

Why keys?
--> So, lets consider in our container some x number of rescard is there and let say one additional rescard comes there now where to place how react will going to know this so it have to rerender whole rescard again but if every rescard has unique keys then definetly react know where to place new card and it will render only that card so key help us to optimise rendering process.

## Note

- Key should be unique so we can use index as our key in map the 2nd parameter is index itself.
- But react itself says that don't use index as key - Why ?
- Why ? ==> learn from official documentation it is bad practise

## TODO : Read about fetch

1. https://developer.mozilla.org/en-US/docs/Web/API/fetch
2. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

## Optional chaining :

1. ex : const nestedProp = obj.first?.second;
   By using ?. operator we r telling to js to implicitly check whether obj.first is null/undefine or not if it is null/undefine expression automatically short-circuits and return "undefined".

2. above ex can be written as const nestedProp = obj?.first
   ===> const nestedProp = obj===null|| obj===undefined ? undefined : obj.first.

#### Rules to use :

1. Optional chaining can not be used on non-declared root object but can be used on root object with value undefined.

2. Optional chaining can with functional calls: When we are using an Api where method might be unavaible so in that case we can use this
   ex: const result = someInterface.customMethod?.();
   But above expression will throw Type error if someInterface is null ok, so better way to write is:
   const result = someInterface?.customMethod?.();

   ```
    A ReferenceError occurs when you try to use a variable that doesn't exist at all. A TypeError occurs when the variable exists, but the operation you're trying to perform is not appropriate for the type of value it contains
   ```

3. Can use like this : const nestedProp = obj?.["prop" + "Name"];

4. console.log(arr?.[42]);
5. Optional chaining is not valid on left hand side of an assignment.

````ex : const obj = {};
       obj?.propety = 1; // invalid syntax```
````
