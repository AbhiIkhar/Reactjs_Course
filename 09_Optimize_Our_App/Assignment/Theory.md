# When and why do we need lazy()?

- In our application the web bundler bundles down the whole code into 1 single js file.
- All the big big components are there in this single js file.
- Which makes this file very bulkier which increase the load time.
- That's we need split our code into different bundles and need to load those code which is required so that we can do using lazy().

# What is suspense?

- Suspense make sure that until the current component code is not get loaded fully till that time it load something else.

# Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

- Because we were loading the grocerry component lazily so it was not present in the bundle when main file get loaded.
- When we click on grocerry link at that time the code of grocerry was not present.
- But react render cycle was running so it throw this error.

# Advantages and disadvantages of using this code splitting pattern?

### Advantage:

      - Faster Loading
      - Great User experience

### Disadvantage :

     -

# When do we and why do we need suspense?

- When we are loading any component lazily.
- Because when we load any component lazily then it's code is not present in the current bundle.
- When it requires it loaded in another bundler.
- But loading of code takes more time than rendering so it can throw a error by react as react will not have any code to render
- so we use suspense which helps us to provide some other code to load till the time the code is getting loaded.
