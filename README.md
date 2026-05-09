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
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Spicychickenlolipop/expert-booking-system.git
cd expert-booking-system
```

---

# Backend Setup

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm run dev
```

---

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

---

# API Endpoints

## Expert Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/experts | Get all experts |
| GET | /api/experts/:id | Get expert details |

---

## Booking Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/bookings | Create booking |
| GET | /api/bookings | Get bookings by email |

---

