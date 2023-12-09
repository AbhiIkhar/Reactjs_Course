1. What is "NPM"
   -> NPM is package manager for javascript based project , the npm registry consist the code of all the packages , we can say that it store house of all the packages required for our project.

2. What is `Parcel/Webpack`? Why do we need it?
   -> It is web bundler, we need to bundle our code and optimised it so that we can push it for production.

3. What is `.parcel-cache`?
   -> It is cache in parcel web bundler which cache the intermidiate build result so that the future build becomes faster.

4. What is `npx`?
   --> It package executer , Means if we want execute any package so it execute that , even though it is not there in our npm registry it download that and then execute so for running our we use `npx parcel index.html`.

5. What is difference between `dependencies` vs `devDependencies`?
   --> `dependencies` are the packages which are use at both development and production phase. whereas `devDependencies` are only use at the time of development.

6. What is Tree Shaking?
   -> It is concepts with which the unused code is removed.

7. What is Hot Module Replacement?
   ---> With the help of this it does if we change our app then it at real time it updates which we can see on browser.

8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
   own words.
   --> 1. Use of dev build, 2. use to create local server, 3. Hot model replacement, 4. Tree shaking 5. file watching algorithm

9. What is `.gitignore`? What should we add and not add into it?
   --> .gitignore list down all the packages which we didn't want to push on github, It is usefull because there are some packages which can generated like node_modules, dist ,parcel_cache, etc that we don't want to push on github.

10. What is the difference between `package.json` and `package-lock.json`
    -> 1. package.json keep track of versions of all our packages which we install for the projects. 2. `package-lock.json` keep track of exact version of all transitive dependencies and maintain sha-512 key as integrity so that version remain same at production.

11. Why should I not modify `package-lock.json`?
    --> `package-lock.json` keep track of exact version of all transitive dependencies and maintain sha-512 key as integrity so that version remain same at production. If we make changes in our code may not work at production.

12. What is `node_modules` ? Is it a good idea to push that on git?
    --> Storehouse of all transitive dependencies. no because it can be generated using package-lock.json.

13. What is the `dist` folder?
    --> dist folder is self generated folder created by parcel when we build our app so it contain 3 compressed , white space remove files of html,css and js which actually run on server.

14. What is browserlist?
    --> It contain list of all browser which supports our application.

## TODO:

1. Read script types in html mdn : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
2. Read (^)caret and (~)tilda -- Done

3. Read Different Bundler [webpack,vite,parcel] -- > Will Do
4. Tree shaking and Hot model replacement ---> Will DO

5. Make exact setup which we did in class : execute **npm run** test, npm will simply go and check in package.json script section for 'test' key and execute that command in shell or cmd.exe based on your operating system.
