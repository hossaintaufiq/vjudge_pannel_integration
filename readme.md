# NSU IUPC Live Dashboard Platform

A real-time contest monitoring platform built for NSU IUPC using VJudge as the judging engine and a custom backend + Next.js dashboard for live standings, analytics, and administration.

This platform does not replace VJudge.  
Instead, it acts as a live mirror and enhancement layer on top of VJudge.

---

#  Project Goal

The goal of this system is to:

- Display live contest standings
- Provide real-time leaderboard updates
- Enhance visualization for projector mode
- Allow custom freeze logic
- Add analytics beyond VJudge's default UI
- Maintain better control for university-level contests

---

# Architecture Overview

Participants submit solutions on VJudge  
⬇  
Backend polls VJudge ranklist API  
⬇  
Backend processes & emits updates  
⬇  
Next.js frontend displays live standings  

The backend acts as a middleware between VJudge and the frontend dashboard.

---

#  Tech Stack

## Backend
- Node.js
- Express.js
- TypeScript
- Socket.io (Real-time updates)
- Axios (API requests)
- CORS
- dotenv (Environment variables)

## Frontend
- Next.js (TypeScript)
- React
- Socket.io Client
- Tailwind CSS 

## External Platform
- VJudge (Contest hosting and judging)

---

#  Project Structure
nsu-iupc-platform/

├── backend/
│ ├── src/
│ │ ├── server.ts
│ │ ├── services/
│ │ ├── routes/
│ │ ├── sockets/
│ │ └── types/
│ ├── package.json
│ └── tsconfig.json
│
├── frontend/
│ ├── app/
│ ├── components/
│ ├── hooks/
│ ├── services/
│ └── package.json
│
└── README.md

---

#  System Workflow

### 1️⃣ Contest Creation
- Contest is created and hosted on VJudge.
- A unique contest ID is generated.

### 2️⃣ Backend Polling
- Backend periodically fetches ranklist data from VJudge.
- Polling interval is configurable (recommended: 30–60 seconds).

### 3️⃣ Real-Time Broadcasting
- Updated ranklist data is emitted using WebSocket.
- Connected clients receive instant updates.

### 4️⃣ Frontend Rendering
- Next.js dashboard listens for updates.
- Standings are dynamically updated without page refresh.

---

#  Key Features

- Live leaderboard
- Real-time WebSocket updates
- Customizable polling interval
- Extendable for freeze logic
- Ready for database integration
- Admin-friendly architecture
- Scalable for 100+ teams

---

# 🧊 Future Enhancements

- ICPC-style freeze & unfreeze system
- Database storage for submission history
- Team performance analytics
- Medal distribution logic
- First-blood tracking
- Admin dashboard
- Announcement system
- Public display mode for projector

---

#  Deployment Strategy

Backend can be deployed on:
- Railway
- Render
- DigitalOcean
- AWS EC2

Frontend can be deployed on:
- Vercel
- Netlify

Environment variables control:
- Port
- Contest ID
- Polling interval

---

#  Scalability Considerations

- Avoid aggressive polling to prevent rate limits.
- Use caching layer (Redis) if scaling beyond 150 teams.
- Implement logging & monitoring for production.

---

#  Maintained By

NSU IUPC Technical Team  
Built to enhance competitive programming experience at NSU.

---

# License

NSS 