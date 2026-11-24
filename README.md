# SBA 12 - Movie Finder API

## Project Overview

The Movie Finder API is a RESTful server built with Node.js, Express, and Axios. It allows users to search for movies by title and retrieve detailed information about a movie using its IMDb ID.

## Project Features

- Search for movies by title
- Retrieve movie details using an IMDb ID
- Communicate with the external OMDb API using Axios
- Organize routes and controllers into separate files
- Validate missing or empty movie titles
- Return JSON responses
- Handle API errors using try...catch
- Protect the API key using environment variables
- Apply Axios timeout protection

## Technologies Used

- Node.js
- JavaScript (ES Modules)
- Express.js
- Axios
- dotenv
- OMDb API
- Git and GitHub

## Installation and Setup

### 1. Clone the repository

git clone https://github.com/BallNChain24FEnd/AshleyWhite-SBA-12_RESTful-server-API.git

### 2. Enter the project directory

cd AshleyWhite-SBA-12_RESTful-server-API

### 3. Install dependencies

npm install

### 4. Configure environment variables

Create a .env file in the project root.

Add the following:

OMDB_API_KEY=your_omdb_api_key_here
PORT=3015

Replace the placeholder with your own OMDb API key.

Never commit your .env file to GitHub.

### 5. Start the server

node server.js

The server runs at:

http://localhost:3015

## API EndPoints, Error Handling, Testing, Security, 

API Endpoints, Error Handling, Testing, Security details are documented in TESTING.md.

## Resources

- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- Axios: https://axios-http.com/
- dotenv: https://www.npmjs.com/package/dotenv
- OMDb API: https://www.omdbapi.com/
- MDN JavaScript: https://developer.mozilla.org/

## Reflection

This assessment helped me understand how to build a
RESTful server using Express and connect it to an
external API using Axios.

I practiced organizing my application into separate
routes and controllers, retrieving query parameters
and route parameters, and returning JSON responses.

One important lesson was understanding the difference between the search parameter "s" and the IMDb ID parameter "i" when communicating with OMDb.

I also learned how to protect API keys with environment variables, validate incoming requests, and handle errors using try...catch.

Testing the endpoints helped me better understand HTTP status codes, especially 200, 400, 404, and 500.

This project strengthened my understanding of backend development and how servers communicate with external APIs.
