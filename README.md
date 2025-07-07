# 🛍️ Vyaparsathi – Empowering Local Businesses Digitally

---

## 🚀 Why i Built Vyaparsathi

Across rural and semi-urban India, thousands of micro and small enterprises still operate using traditional, manual methods—recording sales on paper, maintaining mental stock logs, and lacking any form of structured data management. This creates friction, errors, and missed growth opportunities.

**Vyaparsathi** is built with a singular mission:  
> To **digitally enable grassroots entrepreneurs** and help them manage their businesses with ease, efficiency, and clarity — all without technical knowledge.

We envisioned a product that is:
- **Affordable** for all tiers of micro-businesses  
- **Accessible** across devices and geographies  
- **Simple yet powerful**, designed for real-world rural use cases  

It is built for the **Indian market** — from Kirana stores to small hardware shops — enabling them to step confidently into the digital age.

---

## 🧠 How i Built It

We followed a clean, full-stack development methodology using modern web technologies. With a focus on scalability, security, and simplicity, the application was crafted from the ground up in two separate codebases:

- A **dark-themed, responsive frontend** built with **React.js (Vite)**  
- A **secure, modular backend** using **Node.js with Express and MongoDB (Database)**

Key development highlights:
- RESTful API design with efficient data modeling
- Context API for global state (Auth, Profile, etc.)
- Protected routes using JWT-based authentication & authorization
- Dynamic product selection and real-time order calculations
- Stock auto-deduction and update on order placement
- Seamless frontend-backend communication over HTTPS using CORS

---

## 🧗‍♂️ Challenges We Faced

Like any real-world product journey, Vyaparsathi's development wasn't without hurdles. Some of the key challenges we tackled:

- 🔐 Secure implementation of authentication with **JWT & bcrypt**
- 🔄 Real-time syncing of stock and orders with proper DB structure
- 🌐 CORS misconfigurations during multi-repo Render deployment
- 🧪 Validating complex business data entries with edge cases
- 📦 Optimizing MongoDB schemas and query performance
- 🧑‍💻 Managing two repositories for full separation of concerns

---

## 🛠️ Tech Stack

### 🔮 Frontend:
- React.js (with Vite)
- Vanilla CSS (with custom dark theme)
- React Router DOM
- Axios / Fetch for API calls
- Context API for Authentication & Authorization and Global State
- Responsive Design (Mobile/Desktop)

### 🔧 Backend:
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JSON Web Tokens (JWT) for route protection
- bcrypt.js for password hashing
- dotenv for environment configuration
- CORS for secure frontend-backend communication
- Deployed on: **Render.com**

---

## 📁 Project Structure

### Backend:
- `routes/` – API route definitions  
- `controllers/` – Business logic handling  
- `models/` – MongoDB schemas  
- `middleware/` – Auth & error handling  
- `index.js` – Entry point  

---

## 🌍 Live Deployment

- **Link:** [Vyaparsathi](https://vyaparsathi-frontend.onrender.com)
  
---

## 🛡️ Uptime Monitoring

To ensure the Vyaparsathi backend remains awake and responsive (especially on free-tier hosting), we’ve set up **UptimeRobot** to ping a dedicated health check route every 5 minutes.

- ✅ **Backend Health Check Route:** [`/health`](https://vyaparsathi.onrender.com/health)  
  Responds with a simple status message to confirm the server is running.

- ✅ **Frontend & Backend Monitoring:**  
  Monitored via [UptimeRobot](https://uptimerobot.com/) to prevent cold starts and maintain high availability.

This setup ensures the app remains stable and responsive for users at all times — even when hosted on Render's free tier.

## 🌟 Upcoming Features

- 📊 Business insights dashboard with analytics
- 🧾 PDF invoice & receipt generation
- 🌐 Multi-language support (Marathi, Hindi, English)
- 📱 PWA for mobile-first users
- 📤 Import/Export product data via Excel
- 📋 Vendor & Customer contact directory
- 🔍 Search & filter for orders and inventory

---

## 🤝 Special Thanks

This journey would not have been possible without:

- 🙏 Local entrepreneurs in **Marathwada** who inspired the need for Vyaparsathi  
- 🤖 A huge shoutout to **ChatGPT (by OpenAI)** – my coding assistant, debugger, and brainstorming buddy through every feature  
- 🙌 The developer community and open-source contributors  

---

## 📬 Contact & Collaboration

Have an idea or want to contribute?

I'm open to collaboration for:
- Product enhancements
- UI/UX design upgrades
- Real-world testing in rural markets
- Government/NGO partnerships

---

## 🧑‍💻 Final Product Proudly Developed & Maintained By

#  **Tejas Tupe**

`tupetejas265@gmail.com | https://www.linkedin.com/in/tejastupe | https://github.com/Tejas-Tupe`

---
