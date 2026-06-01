I've updated the README to link directly to your GitHub repository (`https://github.com/lxka806/Mern-Social-Blueprint`) and incorporated key repository details like your username and the latest commit info.

Here is the revised professional README file with your repository link added:

```markdown
# 🚀 MERN Stack Social Blueprint (Version 1)

> A production-ready MERN stack foundation with secure cookie-based JWT authentication, global error handling, and scalable architecture — the perfect starting point for your next social application.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/lxka806/Mern-Social-Blueprint)
[![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?logo=mongodb&logoColor=white&labelColor=black)](https://github.com/lxka806/Mern-Social-Blueprint)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=nodedotjs)](https://github.com/lxka806/Mern-Social-Blueprint)
[![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express)](https://github.com/lxka806/Mern-Social-Blueprint)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://github.com/lxka806/Mern-Social-Blueprint)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?logo=mongodb)](https://github.com/lxka806/Mern-Social-Blueprint)
[![JWT](https://img.shields.io/badge/JWT-Cookie-000000?logo=jsonwebtokens)](https://github.com/lxka806/Mern-Social-Blueprint)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/lxka806/Mern-Social-Blueprint/blob/main/LICENSE)

**📦 Repository:** [github.com/lxka806/Mern-Social-Blueprint](https://github.com/lxka806/Mern-Social-Blueprint)  
**👤 Author:** Luka Ivanishvili ([@lxka806](https://github.com/lxka806))  
**📅 Latest Commit:** Jun 1, 2026 (`53db7d1`)

---

## 🎥 Live Demo Preview

> *Replace the GIF below with your actual app demo*

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Your+GIF+Here" alt="Demo GIF Placeholder" width="80%">
</p>

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

<table align="center">
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="40"><br/>React 18</td>
    <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="40"><br/>Node.js 22.x</td>
    <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="40"><br/>Express 5.x</td>
    <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="40"><br/>MongoDB 7.x</td>
    <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg" width="40"><br/>Vite</td>
  </tr>
</table>

- **Frontend:** React, Vite, Context API (Coming Soon)
- **Backend:** Node.js, Express, Mongoose 9.x
- **Database:** MongoDB
- **Env Management:** Dotenvx

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

- ✅ Node.js installed
- ✅ MongoDB running locally **or** MongoDB Atlas URI

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/lxka806/Mern-Social-Blueprint.git
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

# Development mode (auto-reload with nodemon)
npm run dev
```

---

## 🧪 API Endpoints

> ⚠️ **Important:** Make sure your API client has cookies enabled to properly handle HTTP-Only JWT cookies.

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
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

## 📸 Screenshots

<p align="center">
  <img src="https://via.placeholder.com/600x400?text=Signup+Page" width="45%" />
  <img src="https://via.placeholder.com/600x400?text=Login+Page" width="45%" />
</p>

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

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [jsonwebtoken](https://jwt.io/)
- [dotenvx](https://github.com/dotenvx/dotenvx)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/lxka806">Luka Ivanishvili</a>
</p>
```
