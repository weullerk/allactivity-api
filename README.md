# Description
NodeJS/Express api that serve routes to create and list a log table.

# Setup
- Provide a enviroment with NodeJS(v16 recommended) and NPM, and run the following commands.
> npm install

- Restore the database on a mysql client with the file base_database.sql on the root folder.

- Open the file db.js on root and configure the database access with your credential.

- On a development environment, run the following to create a hot reload serve.
> npm run dev

- Or the following in production or a environment that is not meant to development.
> npm start

- Access the api available routes with the client of your preference like Postman.

# Available routes
- GET http://localhost:3000/logs/list-logs
- POST http://localhost:3000/logs/create-log

# Made with
- express
- mysql2
- toquenize
- nodemon