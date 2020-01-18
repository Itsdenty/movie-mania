# turing-fullstack-challenge

Turing challenge app is an e-commerce app built with react frontend and node and express backend

The endpoints are hosted on heroku [ here ](https://movie-mania-20.herokuapp.com/api/v1/).

## Made With
  ### UI
    * HTML for writing the webpage
    * CSS for styling
    * Javascript to add some behaviour
    * React for responsive ui
    * Redux for state management and data pesistence
  
  ### Server
    * Nodejs for server-side logic
    * Babel for transpiling
    * Express for api routes implementation
    * Heroku for hosting services
    * Swagger for documentation

  ### Caching technique
    * Redis Server for caching
  
  ### Test-Driven Development
    * Mocha, Chai and Supertest for api route testing

## Installation.
  * Install [Nodejs](https://nodejs.org/en/download/)
  * Setup Redis server [Redis](https://redis.io/)
  * Clone this repo ``` git clone https://github.com/Itsdenty/movie-mania.git ```
  * Run ```npm install``` to install the required dependencies
  * copy .env.example and rename to .env and add the necessary credentials for each key.
  * Run ```npm test``` to fireup the tests
  * Run ```npm start``` to start the server
  * Navigate to http://localhost:3100/api/v1/

## Server project structure
  * Server bootstrapping available inside ```server/app.js```
  * All route definition files available inside ```server/routes```
  * Database/redis configuration and helper classes available inside ```server/database```
  * Validation and auth middlewares available inside ```server/middlewares```
  * The swagger documentation ui available inside ```server/public/dist```
  * Utility and helper functions/classes available inside ```server/utils```
  * Controller functions for co-ordinating request/response available inside ```server/controllers```
  * Processor function for handling database interactions, Redis server interaction and  other data processing available insid ```server/processors```
  * swagger documention definitions available inside ```server/swagger```
  * Mocha test definition available inside ```server/tests```

## Features of the UI
* Users can navigate to home page and search for movie using the search input field.
* User can view the movie details by clicking on the view details button on the movie card overlay.

## Available APIs
For details on available endpoints, check the **Documentation** out [ here ](https://movie-mania-20.herokuapp.com/api-docs/).

## License and Copyright
&copy; Abd-afeez Abd-hamid

Licensed under the [MIT License](LICENSE).
