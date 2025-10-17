
# 🚀 Backend Wizard API — Stage 0 Task (Node.js + Express)

![GitHub last commit](https://img.shields.io/github/last-commit/your-username/backend-wizard-api)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![Railway](https://img.shields.io/badge/Deployed%20On-Railway-purple)

A simple RESTful API for the Backend Wizards Stage 0 Task.  
The `/me` endpoint returns profile info with a dynamic cat fact fetched from an external API.

## Live API URL
`https://<your-railway-domain>.railway.app/me`

## Response format
```json
{
  "status": "success",
  "user": {
    "email": "solomonoluwatobi307@gmail.com",
    "name": "Solomon Precious",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}

Project Structure

backend-wizard-api/
│── src/
│   │── routes/
│   │   └── me.js
│   │── services/
│   │   └── catService.js
│   │── app.js
│── index.js
│── package.json
│── .env.example
│── README.md

Run locally

git clone https://github.com/<your-username>/backend-wizard-api
cd backend-wizard-api
npm install
npm run dev
# then test: curl http://localhost:3000/me

Deploy on Railway

1. Connect GitHub repo to Railway


2. Deploy the project


3. Add PORT=3000 if needed


4. Visit https://<your-railway-domain>.railway.app/me



Author

Built by Solomon Precious

