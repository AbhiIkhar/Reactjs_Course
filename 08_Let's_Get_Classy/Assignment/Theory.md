1.  Why do we use super(props) in constructor?
    => Because we want call the constructor method of parent class so all the methods will be propely initialized and later if we do some operation on the current instance of obj using (this) it will not result in any ambiguity.

2.  Why can't we have the callback function of useEffect async ?
    => Because it expect to return undefine or cleanup function but async function return promise implicitly and it can't handle promises proprely.

3.  What is the order of life cycle method calls in Class Based Components?
    => There 2 phases :
    render() => (Constructor and render)
    commit() => (updation on dom took place and componentDidMount())
    After rerender() => (ComponentDidUpdate()) will be called
    After page change => (ComponentWillUnmount())

4.  Why do we use componentDidMount?
    => Inorder to do operation based Componenent's side effect means which is not related to rendering like fetching api.
5.  Why do we use componentWillUnmount? Show with example ? (After component removed from DOM)

=> It uses for cleanup process for better performance.
It's a crucial part of managing resources and subscriptions to
prevent memory leaks and ensure that the component's
behavior is properly cleaned up. Here's why and when we
should use componentWillUnmount
1 Cleanup Resources - If your component has allocated any resources, such as event
listeners, subscriptions, timers, or manual DOM manipulations, it's essential to
release these resources to prevent memory leaks. componentWillUnmount is the
appropriate place to do this.
2 Cancel Pending Requests - If your component has initiated any asynchronous
requests, such as AJAX calls or timers, you should cancel or clean them up to
avoid unexpected behavior after the component is unmounted.

6. How do you create Nested Routes react-router-dom cofiguration

```
import React from 'react';
import { Route } from 'react-router-dom';
// Import your nested route components
import Home from './Home';
import About from './About';
function Layout() {
 return (
 <div>
 <h1>My App</h1>
Episode-08 | Let’s Get Classy 3
 <Route path="/home" component={Home} />
 <Route path="/about" component={About} />
 </div>
 );
}
export default Layout;



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react
-router-dom';
// Import your Layout component that defines nested routes
import Layout from './Layout';
function App() {
 return (
 <Router>
 <Switch>
 <Route path="/" component={Layout} />
 </Switch>
 </Router>
 );
}
export default App;




```

7. Read abt createHashRouter, createMemoryRouter from React Router docs.
   =>
1. createHashRouter - createHashRouter is part of the React Router library and
   provides routing capabilities for single-page applications (SPAs). It's commonly
   used for building client-side navigation within applications. Unlike traditional
   server-side routing, it uses the fragment identifier (hash) in the URL to manage
   and handle routes on the client side. This means that changes in the URL after the

# symbol do not trigger a full page reload, making it suitable for SPAs.

To use createHashRouter, we typically import it from the React Router library and
define our routes using Route components.

```
import { createHashRouter, Route } from 'react-router-dom';
const App = () => (
<createHashRouter>
<Route path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
</createHashRouter>
);


```

createMemoryRouter - createMemoryRouter is another routing component
provided by React Router. Unlike createHashRouter or BrowserRouter,
createMemoryRouter is not associated with the browser's URL. Instead, it
allows you to create an in-memory router for testing or other scenarios where
you don't want to interact with the actual browser's URL.[testing]

```
import { createMemoryRouter, Route } from 'react-router-dom';
const App = () => (
 <createMemoryRouter>
 <Route path="/" component={Home} />
 <Route path="/about" component={About} />
 <Route path="/contact" component={Contact} />
 </createMemoryRouter>
);
```
