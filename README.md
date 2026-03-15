ArthaAI Finance Chat

A lightweight finance-focused chatbot built with HTML, CSS, JavaScript, and a simple backend API.
The project demonstrates a clean chat interface that sends finance-related queries to a backend service and returns structured responses.

This project was built as part of a Web Technology / Project class demonstration.

Tech Stack

Frontend

HTML

CSS

JavaScript

Backend

Node.js with Express.js

PHP API endpoint for server-side processing

Project Features

Chat-style user interface

Finance topic selector:

General finance

Startup finance

Investing

Budgeting

Tax

Backend API endpoint:

POST /api/chat

Finance-topic filter
Rejects non-finance prompts.

Safety guardrails

No illegal financial advice

No guaranteed investment returns

Educational response format

Educational disclaimer included in responses

Project Structure
arthaai-finance-chat
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
│
└── api
     └── chat.php

File overview

index.html
Main chat interface.

style.css
User interface styling.

script.js
Handles chat messages and sends requests to the backend.

server.js
Node/Express server used for local development.

api/chat.php
PHP backend endpoint that processes finance prompts and returns responses.

Quick Start

Install dependencies

npm install

Start the server

npm start

Open in browser

http://localhost:3000
PHP Backend Integration

The project also demonstrates a simple PHP API endpoint.

Location

api/chat.php

The frontend sends a request to:

/api/chat.php

Example request (from script.js)

fetch("/api/chat.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    message: prompt,
    mode: modeEl?.value || "general"
  })
});

Example response

{
  "reply": "Starter tip: Track monthly cash flow and automate savings."
}

This shows how a JavaScript frontend can communicate with a PHP backend API.

Running PHP Locally

PHP cannot run directly from static hosting like GitHub Pages.

To run the PHP endpoint locally you can use:

XAMPP

MAMP

Then open the project using:

http://localhost/arthaai-finance-chat
Finance AI Design Approach

While no AI system can be perfectly accurate, the chatbot is designed to stay focused on finance topics.

The system:

Filters non-finance prompts

Provides educational financial guidance

Avoids illegal or unethical financial suggestions

Adds disclaimers where professional advice may be required

Future Improvements

Possible enhancements:

Connect to a real AI model API

Add financial calculators (EMI, SIP, budget planner)

Store chat history in a database

Add authentication system

Add charts for budgeting or investment tracking

Improve financial knowledge base

Educational Purpose

This project is intended for learning and demonstration purposes only.

Financial responses are informational and not professional advice.
