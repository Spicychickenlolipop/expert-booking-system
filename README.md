# Expert Booking System

A modern full-stack Expert Session Booking platform where users can browse experts, check available slots, and book mentoring sessions in real-time.

---

# Features

- Browse industry experts
- Search and filter experts
- View expert details and available slots
- Book mentoring sessions
- Real-time slot updates using Socket.IO
- View all bookings by email
- Modern responsive UI with glassmorphism design
- REST API based backend

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM
- Socket.IO Client

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- dotenv

---

# Project Structure

```bash
expert-booking-system/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── socket/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md


# Installation## Clone Repository```bashgit clone https://github.com/Spicychickenlolipop/expert-booking-system.git
cd expert-booking-system

Backend Setup
cd backend
Install dependencies:
npm install
Create .env file:
PORT=5000MONGO_URI=your_mongodb_connection_string
Run backend server:
npm run dev

Frontend Setup
Open another terminal:
cd frontend
Install dependencies:
npm install
Run frontend:
npm run dev

API Endpoints
Expert Routes
MethodEndpointDescriptionGET/api/expertsGet all expertsGET/api/experts/:idGet expert details

Booking Routes
MethodEndpointDescriptionPOST/api/bookingsCreate bookingGET/api/bookingsGet bookings by email
