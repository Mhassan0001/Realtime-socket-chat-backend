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

## 🧠 Tech Stack

| Technology   | Usage              |
|-------------|-------------------|
| Node.js     | Backend runtime   |
| Express.js  | Server framework  |
| MongoDB     | Database          |
| Mongoose    | ODM               |
| Socket.io   | Real-time comms   |
| JWT         | Authentication    |
| bcrypt      | Password hashing  |

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

```bash

POST /chat/createRoom               → Create a new Group Room (Authenticated)
POST /chat/createPrivateRoom        → Create a new Private Room (Authenticated)
POST /chat/send                     → Send messages in a room (Authenticated)
GET /chat/getMessages/:roomId       → Fetch all messages from a room (Authenticated)
GET /chat/getUserByMobile/:mobile   → Fetch a user by mobile number (Authenticated)


```

## 📌 Status

Currently under development
---

## 📫 Connect With Me

* LinkedIn: [Muhammad Hassan](https://www.linkedin.com/in/muhammad-hassan-36912a22b)
* GitHub: [Mhassan0001](https://github.com/Mhassan0001)
