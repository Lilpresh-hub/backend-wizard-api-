# 🚀 Backend Wizard API — Stage 0 Task (Node.js + Express)

![GitHub last commit](https://img.shields.io/github/last-commit/your-username/backend-wizard-api)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![Railway](https://img.shields.io/badge/Deployed%20On-Railway-purple)

A simple RESTful API built as part of the **Backend Wizards — Stage 0 Task**.  
The `/me` endpoint returns **dynamic profile info** with a **real-time CAT fact** fetched from an external API.

---

## 📌 Live API URL (After Deployment)
> 🌍 `http://<your-railway-domain>/me`

> ✅ Make sure it returns JSON in this exact structure:
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
