## TODO: https://legacy.reactjs.org/docs/faq-structure.html

## TODO: https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers

2. 2 types of Export/Import

   - Default Export/Import
     export default Header ==> import Header from Header;
   - Named Export/Import
     - export const Component;==> import {Compon_name} from Component;

3. Can I do default export along with name export ?
   --> Yes.

4. Task : We are creating features which will filter out top rated restaurant.

- Here first I have to change my data.
- Now how My UI change , here comes react comes in picture, it gives our normal js variable a super power but how ? ==> here hooks comes into picture.

# React Hooks [Normal Js utility functions]

- useState() - 80% =>( Superpowerfull state variables in react)
- useEffect() - 20%
  other use very less no. of times

1. useState()
   => Whenever state variable updates react rerender the components. React sync your UI with the data layer. As soon as data layer changes the UI layer changes. React is good at DOM operation , it makes it very fast so our UI changes quickly.

2. How react is doing this ?
   - How react works ?
   - Reconcillation algorithm -React Fiber:
     - It uses diffing algo to compare 2 virtual dom
     - Virtual dom is js object representation of actual dom stored in memory.
     - Comparing virtual dom is very less costlier than actual dom
     - Once after doing the comparision and finding what changed it reflect that changes on real DOM.
     - Once our state variable changes the react does the reconcillation and rerendering.
