
# 🚀 Realtime_Chat (Socket.io)

This is the **Backend** of a real-time chat application built using **Node.js**, 
**Express**, **MongoDB**, and **Socket.io**. It handles authentication, real-time 
messaging, and API logic for the chat system.


## ✨ Features

- 🔐 **User Authentication (JWT)**  
  Secure signup & login using JSON Web Tokens

- 🔒 **Password Hashing (bcrypt)**  
  User passwords are securely hashed before storing

- 🛡️ **Protected Routes & Authorization**  
  Only authenticated users can access protected resources

- ⚡ **Real-time Messaging (Socket.io)**  
  Instant messaging without page reload

- 🌍 **MongoDB Atlas Integration**  
  Cloud database using Mongoose

- 🛠️ **Centralized Error Handling**  
  Clean and structured error handling middleware


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
---

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
---

## ⚙️ Setup & Installation

 ### 1️⃣ Clone the repository
* git clone https://github.com/Mhassan0001/Realtime-socket-chat-backend.git
* cd Realtime-socket-chat-backend
* npm install

### 2️⃣ Create .env file
* JWT_KEY=secrete
* MONGO_URI=mongodb://127.0.0.1:27017/Realtime_Chat
* port=9000

### 3️⃣ Run the server
* npm run dev

---

## 📌 Status

* 🚧 Currently under development
* Frontend will be available in a separate repository

---

## 📫 Connect With Me

* LinkedIn: [Muhammad Hassan](https://www.linkedin.com/in/muhammad-hassan-36912a22b)
* GitHub: [Mhassan0001](https://github.com/Mhassan0001)
