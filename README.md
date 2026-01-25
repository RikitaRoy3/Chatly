# ChatGPT Application 🤖💬

A clean, modern web application built with **Vite + React** on the frontend and **Node.js + Express** on the backend. This project is designed for learning, experimentation, and real-world integration of AI-powered chat features with authentication and API handling.

---

## ✨ Features

* ⚡ Fast frontend powered by **Vite + React**
* 🔐 Authentication-ready backend (JWT-based)
* 🌐 REST API architecture
* 🎨 Responsive and modern UI
* 🧩 Clean project structure (frontend + backend separated)
* 🛠️ Easy to extend and customize

---

## 🧱 Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Axios / Fetch API
* CSS / Tailwind / Custom styles (as used)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* CORS configuration
* dotenv

---

## 📁 Project Structure

```
Chaly/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── styles/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── lib/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Chatly.git
cd Chaly
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=the_email_address_to_send_from
EMAIL_FROM_NAME=the_name_to_send_from



CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET= your_cloudinary_api_secret


NODE_ENV=production

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=production
```

Start the backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔄 API & CORS Notes

* Backend is configured to allow requests only from the specified `CLIENT_URL`
* Make sure frontend and backend ports match the CORS configuration
* If the frontend port changes (e.g. 8080, 5173), update it in the backend CORS settings

---

## 🧪 Common Issues & Fixes

### UI Looks Distorted

* Check if correct CSS files are imported
* Ensure `index.html` points to the correct `main.tsx` or `main.jsx`
* Restart Vite after renaming files/folders

### Login API Returns HTML Instead of JSON

* API URL might be incorrect
* Backend route may not be hit (frontend calling Vite instead of backend)
* Check proxy or base API URL configuration

### CORS Error

* Ensure backend allows the correct frontend origin
* Restart backend after changing CORS config

---

## 🛠️ Scripts

### Frontend

```bash
npm run dev     # start dev server
npm run build   # build for production
npm run preview # preview build
```

### Backend

```bash
npm run dev     # start server with nodemon
npm start       # start production server
```

---

## 📌 Future Improvements

* Deployment (Vercel + Render)

---


## 🙌 Acknowledgements

* React & Vite community
* Node.js & Express ecosystem

---

Made with ❤️ for learning and building cool things.
