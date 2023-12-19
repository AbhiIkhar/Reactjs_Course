0. Parcel is like a Manager of babel.

1. It is industry standard to run any command we put that commands in script.
   ex: script{
   "start":"parcel index.html"
   "build":"pacrel build index.html"
   }
   npm start === npm run start
   npm build !== npm run build

2. Jsx is not valid javascript it can not be understand JS Engine because JS Engine
   understand ES6 + all versions

If JS engine can't understand this code then how JS Engine able to run it ?
--> This JSX code get transpiled-(converted into browser understandable code) by Parcel with
help of babel.

How babel-[it is library not created by facebook] is doing this ?
--> Takes jsx and convert into js

How the above code is working ?
--> JSX => React.createElement => JS object => HTMLElement with help of render

## Note : Babel is js compiler ==> It is just piece of software.

## Different Ways to render Functional Component

<!--
1. <Title/>
2. <Title></Title>
3. {Title()}
-->

### How to inject js code in jsx ?

--> Using {}

## Power of jsx :

--> If above "data" is malicious api call which can take your cookies information
then u don't need to worry jsx take care of such cross site scripting attack

## DONE

- Find various tags in jsx :

1. JSX turn into js and its attribute convert into its keys.
2. JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.
3. That's why in React, many HTML and SVG attributes are written in camelCase.
   ex: class ==> className ,stroke-width ==> strokeWidth

## Previous Lecture

- Arrow Function in js -- Will do slowly
- Read About Different Bundlers (Webpack,vite and parcel) - Will read
- Parcel powers - Will read when I want to make project using there feature in cpp
