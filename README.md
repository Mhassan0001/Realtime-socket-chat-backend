# 🚀 Realtime_Chat (Socket.io)

A **real-time chat application** built with the MERN stack and Socket.io, featuring secure authentication, efficient messaging, and scalable backend architecture.

---

## ✨ Features

* 🔑 User authentication with **JWT**
* 🔒 Password hashing with **bcrypt**
* 🛡️ Protected routes & authorization middleware
* 🌍 MongoDB Atlas integration with **Mongoose**
* ⚡ Real-time messaging with **Socket.io**
* 🛠 Error handling & logging
* 🚧 Responsive design (Under Development)

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT, bcrypt
* **Real-time:** Socket.io

---


## 📂 Project Structure

```bash
CHATAPP/
backend/
  ├── src/
  │   ├── config/
  │   ├── Controllers/
  │   ├── Middleware/
  │   ├── models/
  │   ├── routes/
  │   ├── sockets/
  │   ├── utils/
  │   └── app.js
  ├── package.json
  └── .gitignore

```

## 📡 API Endpoints


#### 🔑 Auth Routes

```bash

POST   /auth/create        -> Register new user   (Public)
POST   /auth/login         -> Login user & get JWT (Public)
POST   /auth/createAdmin   -> Create Admin user   (Admin only)

```

#### 🔑 Chat Routes

## 📌 Status

Currently under development
---

## 📫 Connect With Me

* LinkedIn: [Muhammad Hassan](https://www.linkedin.com/in/muhammad-hassan-36912a22b)
* GitHub: [Mhassan0001](https://github.com/Mhassan0001)
