# Feedback Submission App
A full-stack web application where users can submit feedback. The app consists of a **React (Vite) + TailwindCSS** frontend and a **Node.js + Express + MongoDB** backend.

## **1. Setup Instructions**

### **Backend (Node.js + Express + MongoDB)**

#### **Installation**
```sh
cd backend
npm install
```

#### **Setup Environment Variables**
Create a `.env` file inside the `backend` folder:
```plaintext
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### **Run Backend**
```sh
node server.js
```

---

### **Frontend (React + Vite + TailwindCSS)**

#### **Installation**
```sh
cd frontend
npm install
```

#### **Run Frontend**
```sh
npm run dev
```

---

## **2. API Endpoints**

| Method | Endpoint      | Description              |
|--------|-------------|--------------------------|
| **POST** | `/feedback` | Submit feedback |
| **GET**  | `/feedback` | Retrieve all feedback |

---

## **3. Project Structure**
```
feedback-app/
│── backend/  (Node.js + Express + MongoDB)
│   ├── config/
│   │   ├── db.js          # MongoDB Connection
│   ├── models/
│   │   ├── Feedback.js    # Feedback Model
│   ├── routes/
│   │   ├── feedbackRoutes.js # API Routes
│   ├── server.js         # Main Server
│   ├── .env              # Environment Variables
│── frontend/  (Vite + React + TailwindCSS)
│   ├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│── README.md
│── package.json
```

---

## **4. Technologies Used**
- **Frontend:** React (Vite), TailwindCSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Mongoose ORM)  
- **Hosting:** Vercel (Frontend), Render/Heroku (Backend)  

---

## **5. License**
This project is **open-source** under the **MIT License**.
