## Optimise Our App

1. We should use Single Reponsibility principle.
2. Modularize code : easy to maintain,more readable and testable.
3. what do we need our custom hook ?
   - Because it makes our code more readable and reuseable.

## Challenge :

1. Make a custom hook for using localstorage , session etc and publish it on npm.
2. Use Linkter and read about it

## useOnlineStatus hook :

- To tell whether user is online or offline.
- If user do some activity on our app then we can tell him that u r offline.

# How to write the utility function - Hook ?

- Finalizing the contract. [input and output of the hook]
  - Do I need any input from the caller ?
  - What I have to return

# How to make large scale production based application ?

1. Parcel is web pack bundler which bundles all your js file in to 1 single file , all your components are come to this single file.
2. More the component more the size of ur js file.
3. Inorder to make ur application faster u need to reduce the size of this js file.
4. But how ?
5. You need to bundle down ur code in to small chunks and use the code which is needed.
6. ## This is known as Chunking, Code Splitting, Dynamic Bundling,Lazy Loading and onDemand loading , Dynamic Import.
7. ex: makeMyTrip ==> here we can spilt the app into logical chunks :flight,buses, cars etc.
8. Similarly let's consider a scenario that we have grocessary also.

## Why simply by using lazy() we were not able to load our grocerry page ?

- Because react render the component very fast.
- As grocerry were lazy component so it was not present at that time.
- React throw error
- To mitigate this error use - > Suspense inside that you have to fallback function which should load in until the code of Grocerry is present.
