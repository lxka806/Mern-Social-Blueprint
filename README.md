```markdown
# 🚀 MERN Stack Social Blueprint (Version 1)

> A production-ready MERN stack foundation with secure cookie-based JWT authentication, global error handling, and scalable architecture — the perfect starting point for your next social application.

![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Cookie-000000?style=for-the-badge&logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**📦 Repository:** [github.com/lxka806/Mern-Social-Blueprint](https://github.com/lxka806/Mern-Social-Blueprint)  
**👤 Author:** Luka Ivanishvili ([@lxka806](https://github.com/lxka806))  
**📅 Latest Commit:** Jun 1, 2026 (`53db7d1`)

---

## 💡 Why This Exists?

**The backend is already done.** If you're building a small website or a social media prototype, you don't want to waste time writing authentication, setting up JWT cookies, or handling errors from scratch.

This blueprint gives you:
- ✅ **Complete, working backend** — just clone and run
- ✅ **Ready-to-use API** — signup, login, logout, delete account
- ✅ **Secure by default** — HTTP-only cookies, password hashing
- ✅ **Focus on what matters** — your frontend and unique features

> **Stop rewriting backend code. Start building your idea.**

---

## ✨ Features Built-In

| Category | Features |
|----------|----------|
| 🔐 **Authentication** | Sign Up, Login, Logout, Delete Account |
| 🛡️ **Security** | HTTP-Only Cookie JWT, BcryptJS password hashing |
| 🧱 **Architecture** | MVC structure (controllers, models, routes, middleware) |
| ⚠️ **Error Handling** | Global error catcher + database validation messages |

---

## 🧰 Tech Stack

* ⚛️ **Frontend:** React 18, Vite, Context API *(Coming Soon)*
* 🟢 **Backend:** Node.js 22.x, Express 5.x, Mongoose 9.x *(Already done for you!)*
* 🍃 **Database:** MongoDB 7.x
* 🛠️ **Env Management:** Dotenvx

---

## 📁 Project Structure

```text
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── auth.controller.js    # Auth logic: signup, login, logout
├── middleware/
│   ├── auth.middleware.js    # Route protection & admin guard
│   └── error.middleware.js   # 404 + global error handler
├── models/
│   └── user.model.js         # User schema + pre-save hashing
├── routes/
│   └── auth.routes.js        # Auth API endpoints
├── utils/
│   └── generateToken.js      # JWT + cookie config
├── .env                      # Environment variables (gitignored)
├── server.js                 # Express entry point
└── package.json

```

---

## 🏁 Getting Started

### Prerequisites

* ✅ Node.js installed
* ✅ MongoDB running locally **or** MongoDB Atlas URI

### Installation

1. **Clone the repository**

```bash
git clone [https://github.com/lxka806/Mern-Social-Blueprint.git](https://github.com/lxka806/Mern-Social-Blueprint.git)
cd Mern-Social-Blueprint/backend

```

2. **Install dependencies**

```bash
npm install

```

3. **Configure environment variables**

Create a `.env` file in `backend/`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI="mongodb://127.0.0.1:27017/mern_v1"
JWT_SECRET="your_super_secret_jwt_key"

```

4. **Run the server**

```bash
# Production mode
npm start

# Development mode (auto-restart with nodemon)
npm run dev

```

---

## 🧪 API Endpoints

> ⚠️ **Important:** Make sure your API client has cookies enabled to properly handle HTTP-Only JWT cookies.

| Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| POST | `/api/auth/signup` | Register account + set JWT cookie | ❌ No |
| POST | `/api/auth/login` | Validate credentials + return user state | ❌ No |
| POST | `/api/auth/logout` | Clear auth token cookie | ❌ No |
| DELETE | `/api/auth/delete-account` | Delete user + wipe cookie | 🔒 Yes |

### Request Examples

#### Signup `POST /api/auth/signup`

```json
{
  "username": "coder123",
  "email": "coder@example.com",
  "password": "securepassword"
}

```

#### Login `POST /api/auth/login`

```json
{
  "email": "coder@example.com",
  "password": "securepassword"
}

```

---

## 🎯 What You Can Build

With this backend ready to go, you can immediately start building:

* 🐦 Twitter/X clone
* 📸 Instagram-style photo sharing app
* 💬 Discord-like chat platform
* 📝 Blogging platform with comments
* 👥 Community forums
* 🤝 Freelancer marketplace
* 🎓 E-learning platform with user profiles

**The possibilities are endless — and the backend is already handled.**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/lxka806/Mern-Social-Blueprint/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add some amazing thing'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙏 Acknowledgments

* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
* [jsonwebtoken](https://jwt.io/)
* [dotenvx](https://github.com/dotenvx/dotenvx)

---
