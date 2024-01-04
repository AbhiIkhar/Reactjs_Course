# Content

1. [Architecture](#architecture)
2. [How to use external microservices](#how-to-use-external-microservices-in-our-application)
3. [useEffect Hook](#useeffect-hook)

### Architecture

1. Monolithic : Codes/draw.dio
   - Everything is there is single project
   - It is very bulkier and hard to manage.
2. Microservices: [most of the companies follows this]

   - Project is divided into micro services like Backend Service, UI, Auth, DB, SMS sending ,Email notification this is k/as separation of concern or single responsibility principle.
   - How this services interact with other ?
     - They run on different ports.
     - Every service can be deploy on different end points like
       UI is at "/" , BE is at "/api" sms is at "/sms" using this different end points these micorservices talk to each other.

   How this microservices talk to each other ?
   ==> Using API

### How to use external microservices in our application.

- By fetching there API's in our application but how to do that. by 2 approach.
- Approach:1 Loads ==> API CALL [TAKE 500 MS] ==> RENDER [Poor UX]
- Approach:2 Loads ==> Renders ==> API ==> Rerender [Better UX]

Note: We use Approach-2 in react.

### useEffect Hook :

- It takes 2 arguments :
  - Callback Function
  - dependency array

ex: useEffect(()=>{
console.log("Hello callback this is");
},[]);

- When it will be called ?
  => After your components is render it will be called.

### When I try to fetch api from different origin

Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

- Browser blocks if we are fetching someting from different origin.
- TODO : Watch video on youtube.

### Why do we need state varibles and why normal js variable will not work and what super powers state variable gets?

==> We will learn this by making login and logout button

### If we use useState inside a component then will it render whole component or just that element ?

==> It will render whole component.

### But if useState varible is const then how it is updating that useState variable ?

==> Because when we change that varibale using setVarName() function then it is calling the function component again so that const variable is a new variable with updated value.
ex:
function updateVar {
const [var,setVar] = useState("abhi");

    return (<div>
      <button onclick={()=>{
        setVar("krishna") // this will call whole updatVar and now new var will be there with krishna value.
      }}></button>
    <div>)

}

### Whenever there is change in state variable the react trigger the reconcillation cycle and re-render the component again

## TODO: Build a feature as user scroll gave them more restaurant.
