# Previous Requirements

## Node.js
 You need node.js installed in your computer to run this API. Current LTS version is 18 and latest version available is 19, both work fine with the API:
 https://nodejs.org/en/

## NPM
 NPM must be installed on your machine because it's the package manager used to define the API dependencies:
 https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

# Launch the API
To run the api download the code.

Run the next commands on the folder where the downloaded code is:

1. Install all the dependencies with:

npm i

2. Launch the API

npm run start

The API runs by default at the port 9988. Test that it works by getting into the URL:

http://localhost:9989/welcome

You should see a message saying "Welcome not logged in user!".

The port may be in use in your machine. If that's the case, change the variable API_PORT to a port that it's in usage and re-launch the API.



# Examples

Example calls to the API

To get the TOKEN:
curl -d '{"email": "admin", "password":"admin"}' -H "Content-Type: application/json" -X POST http://localhost:9988/login

Authenticated calls:
curl -d '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWF0IjoxNjcxMTkyMDM2LCJleHAiOjE2NzExOTkyMzZ9.G1NMRjbB18gNhFgqkjMYi2UXvZCid6WXVorqjk0Kq_g"}' -H "Content-Type: application/json" -X POST http://localhost:9988/welcome

curl -d '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWF0IjoxNjcxMTk1MTYzLCJleHAiOjE2NzEyMDIzNjN9.KRisX_05n8gZ9evPmA0r2KgUcgZM-yLpqmGKk5DuHuk"}' -H "Content-Type: application/json" -X POST http://localhost:9988/products