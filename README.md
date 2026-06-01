# 🚀 MERN Social Blueprint

> A backend-first MERN stack starter for social applications, featuring secure cookie-based JWT authentication, password hashing, global error handling, and a scalable Express/MongoDB architecture.

> **Note:** Version 1 focuses on the backend. The React frontend is planned for a future release.

![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge\&logo=github)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge\&logo=mongodb\&logoColor=white\&labelColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge\&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge\&logo=express\&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Cookie-000000?style=for-the-badge\&logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**📦 Repository:** [github.com/lxka806/Mern-Social-Blueprint](https://github.com/lxka806/Mern-Social-Blueprint)
**👤 Author:** Luka Ivanishvili ([@lxka806](https://github.com/lxka806))

---

## 📸 Preview

> Add your own GIFs inside `assets/gifs/` and update the filenames if needed.

### Authentication Flow

![Authentication Demo](assets/gifs/auth-demo.gif)

### API Testing Example

![API Demo](assets/gifs/api-demo.gif)

### Project Structure Walkthrough

![Project Structure Demo](assets/gifs/project-structure.gif)

---

## 💡 Why This Project Exists

Building a social app often starts with the same backend tasks: authentication, password hashing, JWT setup, cookies, error handling, and database structure.

This project gives you a ready-to-use backend foundation so you can focus on building your app’s actual features.

With this blueprint, you get:

* ✅ Complete authentication flow
* ✅ Secure HTTP-only JWT cookies
* ✅ Password hashing with BcryptJS
* ✅ Organized MVC backend structure
* ✅ Global error handling
* ✅ MongoDB integration with Mongoose

> Use this as a backend starting point so you can focus on building your app’s core features.

---

## ✨ Features Built In

| Category              | Features                                                                  |
| --------------------- | ------------------------------------------------------------------------- |
| 🔐 **Authentication** | Sign Up, Login, Logout, Delete Account                                    |
| 🛡️ **Security**      | HTTP-only cookie JWT, BcryptJS password hashing                           |
| 🧱 **Architecture**   | MVC structure with controllers, models, routes, middleware, and utilities |
| ⚠️ **Error Handling** | Global error handler, 404 handler, and database validation messages       |
| 🍃 **Database**       | MongoDB connection with Mongoose                                          |
| ⚙️ **Configuration**  | Environment-based setup using Dotenvx                                     |

---

## 🧰 Tech Stack

* ⚛️ **Frontend:** React 18, Vite, Context API — *Coming Soon*
* 🟢 **Backend:** Node.js 22.x, Express 5.x, Mongoose 9.x
* 🍃 **Database:** MongoDB 7.x
* 🔐 **Authentication:** JWT stored in HTTP-only cookies
* 🛠️ **Environment Management:** Dotenvx

---

## 📁 Project Structure

```text
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── auth.controller.js    # Auth logic: signup, login, logout, delete account
├── middleware/
│   ├── auth.middleware.js    # Route protection and admin guard
│   └── error.middleware.js   # 404 and global error handler
├── models/
│   └── user.model.js         # User schema and pre-save password hashing
├── routes/
│   └── auth.routes.js        # Auth API endpoints
├── utils/
│   └── generateToken.js      # JWT and cookie configuration
├── .env                      # Environment variables, gitignored
├── server.js                 # Express entry point
└── package.json
```

---

## 🏁 Getting Started

### Prerequisites

Before running the project, make sure you have:

* Node.js installed
* MongoDB running locally, or a MongoDB Atlas connection URI
* A package manager such as npm

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/lxka806/Mern-Social-Blueprint.git
cd Mern-Social-Blueprint/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
NODE_ENV=development
MONGO_URI="mongodb://127.0.0.1:27017/mern_v1"
JWT_SECRET="your_super_secret_jwt_key"
```

### 4. Run the server

```bash
# Production mode
npm start

# Development mode with auto-restart
npm run dev
```

---

## 🔐 Environment Variables

| Variable     | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `PORT`       | The port where the backend server runs                         |
| `NODE_ENV`   | Application environment, such as `development` or `production` |
| `MONGO_URI`  | MongoDB connection string                                      |
| `JWT_SECRET` | Secret key used to sign and verify JWT tokens                  |

---

## 📜 Available Scripts

Inside the `backend/` directory:

| Command       | Description                                    |
| ------------- | ---------------------------------------------- |
| `npm start`   | Starts the server in production mode           |
| `npm run dev` | Starts the server with Nodemon for development |

---

## 🧪 API Endpoints

> **Important:** Make sure your API client has cookies enabled. Authentication uses HTTP-only cookies, so the JWT is stored in the browser or client cookie jar instead of being manually handled in JavaScript.

| Method   | Endpoint                   | Description                                    | Auth Required |
| -------- | -------------------------- | ---------------------------------------------- | ------------- |
| `POST`   | `/api/auth/signup`         | Register a new account and set JWT cookie      | ❌ No          |
| `POST`   | `/api/auth/login`          | Validate credentials and return user state     | ❌ No          |
| `POST`   | `/api/auth/logout`         | Clear the authentication cookie                | ❌ No          |
| `DELETE` | `/api/auth/delete-account` | Delete the authenticated user and clear cookie | 🔒 Yes        |

---

## 📬 Request Examples

### Signup

`POST /api/auth/signup`

```json
{
  "username": "coder123",
  "email": "coder@example.com",
  "password": "securepassword"
}
```

### Login

`POST /api/auth/login`

```json
{
  "email": "coder@example.com",
  "password": "securepassword"
}
```

---

## ✅ Example Responses

### Successful Auth Response

```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "username": "coder123",
    "email": "coder@example.com"
  }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

## 🔒 Security Notes

For production deployments:

* Use a strong `JWT_SECRET`
* Set `NODE_ENV=production`
* Use HTTPS so secure cookies work correctly
* Store secrets outside the repository
* Never commit your `.env` file
* Configure CORS carefully when connecting a frontend
* Rotate secrets if they are ever exposed

---

## 🗺️ Roadmap

* [x] Backend authentication
* [x] Cookie-based JWT flow
* [x] Password hashing
* [x] Global error handling
* [x] MongoDB connection
* [ ] React frontend
* [ ] User profile routes
* [ ] Post creation API
* [ ] Follow/unfollow system
* [ ] Image uploads
* [ ] Comments and likes
* [ ] Deployment guide

---

## 🎯 What You Can Build

With this backend foundation, you can start building:

* 🐦 Twitter/X-style social app
* 📸 Instagram-style photo sharing app
* 💬 Discord-like chat platform
* 📝 Blogging platform with comments
* 👥 Community forum
* 🤝 Freelancer marketplace
* 🎓 E-learning platform with user profiles

---

## 🖼️ Adding Your Own GIFs

Create this folder in your project:

```bash
mkdir -p assets/gifs
```

Then add your demo GIFs using these names:

```text
assets/gifs/auth-demo.gif
assets/gifs/api-demo.gif
assets/gifs/project-structure.gif
```

Recommended GIF ideas:

| GIF                     | What to Show                                                  |
| ----------------------- | ------------------------------------------------------------- |
| `auth-demo.gif`         | Signup, login, logout flow                                    |
| `api-demo.gif`          | Testing API endpoints in Postman, Insomnia, or Thunder Client |
| `project-structure.gif` | Quick walkthrough of backend folders                          |
| `server-running.gif`    | Terminal showing the backend running successfully             |

You can record GIFs using tools like ScreenToGif, Kap, OBS, or your system screen recorder.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to check the [issues page](https://github.com/lxka806/Mern-Social-Blueprint/issues).

### How to Contribute

1. Fork the project
2. Create your feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to the branch

```bash
git push origin feature/amazing-feature
```

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

## ⭐ Support

If this project helps you, consider giving the repository a star.

It helps others discover the project and supports future improvements.
