1. UseEffect :

- has 2 parameter
- In first parameter there is callback function and u can also return the clean up.
- In 2nd parameter(DEFAULT) u can pass dependency array.

When it is needed ?

- Whenever u want perform some activity after component render.

- NO Dependency array empty -> it will call at every given component render
- Dependency array empty -> it will call at first render
- Dependency array present -> it will call first and dependent item change.

## NOTE: UseEffect only invoke the effect callback function when state of its component changes

# TODO : https://remix.run/blog/remixing-react-router

2. Learn About Routing

3. There are 2 types of Routing in an application

   - Client Side Routing (In react we are using client side routing)
   - Server Side Routing

4. TODO: Study GraphQL and why it is used ?
