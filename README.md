# RESTful API with Node.js, Express, and MongoDB

## Overview
This is a RESTful API built with Node.js, Express, and MongoDB. It provides endpoints for managing a collection of players stored in a MongoDB database. The API follows RESTful principles and supports CRUD operations (Create, Read and Update - are used)

## Features
- Create a new player
- Retrieve a list of players
- Update an existing player by his/her name

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose (MongoDB object modeling tool)
- Other dependencies (listed in package.json)

## Configuration
1. Make sure you have MongoDB installed and running on your local machine.
2. Create a test database and create a collection named 'players_table'
3. Edit the connection url in the `database.js` file `mongoose.connect("mongodb://localhost:yourPort/yourDataBaseName")`
4. If needed, you can chance the local server port in the `server.js` file. The default port is **3030**.

## Getting Started
To get started with this project, follow these steps:

1. Clone or download this repository to your local machine.
2. Install dependencies: `npm install`
3. Run the server: `npm run dev`


## Author
- Developed by: Cristobal Lara
- GitHub: crilver