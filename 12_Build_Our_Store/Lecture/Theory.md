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

## Redux :

1. Redux is not mandantory in medium size application.
2. There are lot of components and lots of read and write operations take place then we should use redux it is separate library.

   - State Management library - redux.
   - Zustand

3. Feature We are going to build:

   - Whole Cart Flow

4. Redux Architecture :

   - Redux Store : It is a very big js object and kept in central place and has lots of data in it.
   - In Redux Store we store a data logically separated which is known as slice.

   ![alt text](ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

   ![alt text](<WhatsApp Image 2024-08-04 at 8.10.14 PM.jpeg>)

Steps to Create Redux Store :

1. Install @reduxjs/toolkit and react-redux

2. Build our store.
   - configureStore from @reduxjs/toolkit
     - const appStore = configureStore({});
3. Connect our store to our app : Provider from react-redux
4. Create Cart Slice
5. Dispatch Action
6. Selector

## Why to use Redux ?

- First reason centralized state management for it u don't need to pass state and state management function as props down to
  lower component.
- Stage changes are predictable in redux compare to without redux.
- With the help redux devtools it become very easy to debug the data flow of the application.
- State management Logic is separated from component logic which makes help to make component more focused on UI.
- Adding new feature and refactoring exiting one is easier in this case because state management logic is decoupled.

## Redux is more useful when:

- In my app there are many application state which are used at many places.
- App state is getting change frequently over a time.
- Logic to change the state may be complex.
- If codebase is medium or large size , many people working on it.

## Redux has only 1 single store

Yes, in a typical Redux application, there is a single Redux store for the entire application. This store holds the complete state tree of your app, and it is the single source of truth for the state. Here’s a more detailed explanation:

Single Store in Redux
Single Source of Truth: The Redux store is designed to hold the complete state of your application in one place. This single source of truth simplifies state management and makes it easier to understand how the state changes in response to actions.

Global State Management: With a single store, you can manage the global state of your application consistently. Different parts of the application can access and update the state through the store.

## File Structure for scalable application :

src/
├── components/
│ ├── Cart.js
│ ├── Product.js
│ └── ...
├── containers/
│ ├── CartContainer.js
│ ├── ProductContainer.js
│ └── ...
├── actions/
│ ├── cartActions.js
│ ├── productActions.js
│ └── actionTypes.js
├── reducers/
│ ├── cartReducer.js
│ ├── productReducer.js
│ └── index.js
├── store/
│ └── index.js
├── App.js
├── index.js
└── ...

## components/: This directory contains presentational components, which are primarily concerned with how things look. They receive data and callbacks exclusively via props.

## containers/: This directory contains container components, which are connected to the Redux store. They are responsible for passing state and dispatching actions to presentational components.

## actions/: This directory contains action creators. Each file typically corresponds to a particular feature of your application (e.g., cartActions.js, productActions.js), and there's usually a file for action types (actionTypes.js) that contains all action type constants.

## reducers/: This directory contains reducers, which specify how the application's state changes in response to actions. Each file corresponds to a particular slice of state (e.g., cartReducer.js, productReducer.js), and there's usually an index.js file to combine all reducers.

## store/: This directory contains the store configuration file (index.js), which sets up the Redux store and applies any middleware.

## Different ways of passing handler method

- onClick={handleOnClick}: Use this when you want to pass a function reference as the event handler. Suitable if the function doesn't require arguments or only needs the event object.
- onClick={handleOnClick(items)}: This immediately invokes the function and passes its return value to onClick. This is not suitable for event handling.
- onClick={() => handleOnClick(item)}: Use this when you need to pass arguments to the event handler. It creates an anonymous function that calls handleOnClick with the specified arguments when the event occurs.

## Notes :

- Whenever u r subscribing to the store then make sure that you are subscribing to the right portion of the store. helpfull for good performance of app.

example below :

```

// Good Performance
const store = useSelector((store)=>store.cart.items)

// Poor Performance
const store = useSelector((store)=>store)

const items = store.cart.items;

 Use selector very wisely

```

# When u create redux store i.e 1 reducer global state management obj single.

# In slice there is reducers

# Vanialla(older) -> state can not be mutate

# IN redux/toolkit state needs to mutate
