# Higher Order Components

1. It takes a component and returns the component.
2. Higher order component just inhance the code it doesn't modify the component which it takes as input.

## Feature will be build :

1. Promoted label on the some restaurant.
2. Build different sections when going on to the restaurant.

## Points to remember

1. Controlled and Uncontrolled component.
2. Lifting state.
3. UI layer + Data layer

## Pure Function :

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments

## New Challenging Feature to build :

1. We want to build such a feature with which if I opened 1 accordian then others will automatically close.
2. But now the control is in the hands of Category so how to do it ?
3. SO that's why I have to give control to the parent of the Categories.
4. But How to do that ? => Controlled Component
5. Lifting stateup
   https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

6. Context API in React

   - Scenario : If let's say I want to pass the data from highest component to leaf node so how will I do that for that I need to pass the data from 1 component to imediate child component in this way goes on. => Props Drilling
     https://react.dev/learn/passing-data-deeply-with-context

   - Props Drilling : This is not good way to pass the data so what to do then.

7. Here comes React Context in to picture.

   - LoggeIn user information needed at various places
   - Light Theme and Dark Theme information needed in our application

8. Context is wonderfull in small scale and medium scale application but when ur application become to big then the need of Redux comes in to picture - (State management Library)

## Note: It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).
