
# 🚀 Backend Wizard API — Stage 0 Task (Node.js + Express)

![GitHub last commit](https://img.shields.io/github/last-commit/your-username/backend-wizard-api)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![Railway](https://img.shields.io/badge/Deployed%20On-Railway-purple)

A simple RESTful API built as part of the Backend Wizards - Stage 0 task. This project implements a dynamic /me endpoint that returns user profile information along with a random cat fact fetched from the Cat Facts API.
🚀 Features
Dynamic Profile Endpoint: GET /me returns JSON with user details, current UTC timestamp, and a fresh cat fact.
External API Integration: Fetches random cat facts on every request with error handling and timeouts.
Error Resilience: Graceful fallback for API failures.
Deployed on Railway: Live URL available after deployment.
Example Response
{
  "status": "success",
  "user": {
    "email": "solomonoluwatobi17@gmail.com",
    "name": "Solomon Precious",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T11:30:45.123Z",
  "fact": "Cats sleep for 70% of their lives."
}

Live API URL: https://your-railway-domain.up.railway.app/me
(Replace with your actual Railway domain after deployment.)
🛠️ Tech Stack
Runtime: Node.js (v18+)
Framework: Express.js
HTTP Client: node-fetch (for external API calls)
Deployment: Railway
📦 Dependencies
Listed in package.json. Install with:
npm install
Core Dependencies
express: Web framework for Node.js
node-fetch: For making HTTP requests to the Cat Facts API
Dev Dependencies (if any)
None currently; add nodemon for development: npm install --save-dev nodemon
🔧 Setup Instructions
Prerequisites
Node.js (v18 or higher) installed: Download here
npm (comes with Node.js)
Git for cloning the repo
Local Setup
Clone the Repository:
git clone https://github.com/Lipresh-hub/backend.git
cd backend
Install Dependencies:
npm install
Configure Environment Variables (Optional but Recommended): Create a .env file in the root directory:
USER_EMAIL=solomonoluwatobi17@gmail.com
USER_NAME="Solomon Precious"
USER_STACK="Node.js/Express"
PORT=3000
Note: Install dotenv if using env vars: npm install dotenv. Then, add require('dotenv').config(); at the top of index.js.
Run the Server Locally:
npm start
Or for development with auto-reload (if nodemon installed):
npm run dev
Test the Endpoint:
Using curl:
curl http://localhost:3000/me
Using a browser: Visit http://localhost:3000/me
Using Postman or Insomnia: GET request to /me
Expected: A 200 OK response with the JSON structure shown above. The timestamp should update on each request, and fact should vary.
🌐 Deployment
Platform: Railway (Vercel forbidden for this cohort)
Steps:
Push your code to this GitHub repo.
Connect the repo to Railway via their dashboard.
Set environment variables in Railway's project settings (e.g., PORT, user details).
Deploy: Railway auto-deploys on push to main.
Get your live URL from Railway and test /me.
Other Options: Heroku, AWS, etc., as per task guidelines.
🧪 Testing
Manual Testing: Use curl/Postman as above. Verify:
Status: 200 OK
Content-Type: application/json
All fields present and correct
Timestamp dynamic (ISO 8601 UTC)
Fact changes per request (or fallback on error)
Automated Tests (Optional): Add a test script in package.json:
"scripts": {
  "test": "node test.js"
}
Example test.js using node-fetch to hit /me and assert response.
🔒 Error Handling
Cat Facts API Failure: Returns a fallback fact (e.g., "A cat's purr can heal bones - but the API is taking a nap right now!").
Timeouts: 5-second timeout on external fetch.
General Errors: 500 response with { "status": "error", "message": "Something went wrong!" }.
📝 Best Practices Implemented
Environment variables for sensitive/config data.
Async/await for clean async code.
Logging for errors (console.error).
No caching—fresh fact per request.
CORS: Add if needed (see code comments).
📚 Learning Outcomes
This task taught me:
Integrating third-party APIs with proper error handling and timeouts.
Ensuring consistent JSON responses for API consumers.
Dynamic data generation (e.g., timestamps) for real-time apps.
Graceful degradation to keep services running despite external failures.
Check out my X post for a deep dive 🐱💻 #BackendWizards #NodeJS #APIs
🤝 Contributing
Fork the repo, create a branch, and submit a PR. Always update tests!
👨‍💻 Author
Solomon Precious
Email: solomonoluwatobi17@gmail.com
GitHub: Lipresh-hub
Built with ❤️ for Backend Wizards - Stage 0. Good luck, fellow wizards! 🚀
Last Updated: October 17, 2025
