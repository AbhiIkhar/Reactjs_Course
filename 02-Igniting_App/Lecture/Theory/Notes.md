# I want to create my own package and want to publish on npm.

0. npm != node package manager it is just package manager.
1. package.json file is the configuration for the npm.
2. What is bunlders ?
   --> It bundle together ur app so that it shift to production.
   a. create react-app ---> Uses webpack bundler
   b.
   ex: webpack, parcel, vite.
3. There are 2 types of dependencies :
   a. dev dependency : It is generally require in dev phase.
   b. normal dependency : It can also use in production.
   **TODO: Read More about it**

Note: we are using parcel as (-D ==> dev dependency) ---> npm install -D parcel
Note :
a. talde (~):If when there is major upgrade then parcel bundler will updrage it automatically when u put (^).

b. caret(^)==>If when there is minor upgrade then parcel bundler will updrage it automatically when u put (^).

Note: Safe to use caret than the talde. major upgrade could break our code.

4. What is package-lock.json ?
   --> Package-lock.json keep track of the exact version of the package, whereas package.json keep approx track, In p-l.json there is "integrity"
   which as sha-512 hash ---> which matches the version of ur packages in dev phase and production phase whether it is similar or not.

5. What is node_modules ?
   ---> node_modules fetches all the code of all the dependencies are there contains the code of ur packages.

6. Why all the packages codes are there in the node modules ?
   --> Because now here u only download parcel but it could have its own dependencies that dependencies can have there own dependencies this is k/as **transitive dependency** so it load whole code.

How npm knows what all dependency parcel have ?
--> With the help of package.json and package-lock.json.

How many package.json and pacakge-lock.json we have?
--> To many [every package has it own]

Why we don't put our node_modules in git or production ?
--> Ans tommorow
Should we put our package.json and p-l.json on git ?
--> Ans tommorow
**1:15:31**
