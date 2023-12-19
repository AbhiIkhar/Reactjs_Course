# Architecture

1. Monolithic :
   - Everything is there is single project
   - It is very bulkier and hard to manage.
2. Microservices: [most of the companies follows this]
   - Project is divided into micro services like Backend Service, UI, Auth, DB, SMS sending ,Email notification this is k/as separation of concern or single responsibility principle.
   - How this services interact with other ?
     - They run on different ports.
     - Every service can be deploy on different end points like
       UI is at "/" , BE is at "/api" sms is at "/sms" using this different end points these micorservices talk to each other.

## How to use external microservices in our application.

- By fetching there API's in our application but how to do that. by 2 approach.
- Approach:1 Loads ==> API CALL [TAKE 500 MS] ==> RENDER [Poor UX]
- Approach:2 Loads ==> Renders ==> API ==> Rerender [Better UX]

Note: We use Approach-2 in react.
