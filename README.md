# Video Conferencing Application

A modern, full‑featured video meeting tool built with the MERN stack and WebRTC — enabling secure, real-time video conferencing with screen sharing, chat, recording, scheduling, and more.

---

##  Features

- **Secure Video Calls**: Real-time video communication powered by WebRTC and Socket.io for seamless connections.
- **Screen Sharing & Chat**: Share your screen and message participants during calls.
- **Meeting Scheduling & Calendar Integration**: Create and manage meetings with built-in scheduling and calendar syncing.
- **Recording & Playback**: Record sessions to the server and replay them later.
- **(Advanced Add-on)** Peer-to-Peer Encryption: Optional end-to-end encryption for ultimate privacy.

---

##  Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **RTC & Real-Time**: WebRTC for media streaming; Socket.io for signaling and chat  
- **Authentication & Scheduling**: JSON Web Tokens (JWT), optional OAuth, and calendar APIs (Google/Outlook) integration  

---

##  Table of Contents

1. [Getting Started](#getting-started)  
2. [Installation](#installation)  
3. [Configuration](#configuration)  
4. [Usage](#usage)  
5. [Advanced Add‑ons](#advanced-add-ons)  
6. [Contributing](#contributing)  
7. [License](#license)  
8. [Contact](#contact)  

---

##  Getting Started

Follow these instructions to set up and run the project locally for development and testing.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Optional: Google or Outlook API credentials for calendar sync

---

##  Installation

### 1. Clone the repository
```bash
git clone https://github.com/rishu12-xyz/Video-Conferencing-Application.git
cd Video-Conferencing-Application
```

### 2. Set up the server
```bash
cd server
npm install
```

### 3. Set up the client
```bash
cd ../client
npm install
```

---

##  Configuration

Copy and configure environment variables in both directories:

```bash
# In each of /server and /client
cp .env.example .env
```

Populate the `.env` files with:

```text
# Server
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
// Optional for calendar sync:
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Client
REACT_APP_SERVER_URL=http://localhost:5000
```

---

##  Usage

### Run the backend:
```bash
cd server
npm start
```

### Run the frontend:
```bash
cd client
npm start
```

Visit `http://localhost:3000` to access the app.

---

##  Advanced Add‑ons

Optional enhancements:

- **Peer-to-Peer Encryption** — Enhance security with end-to-end encryption, protecting communications between users.
- **Calendar Sync** — Integrate with Google or Outlook to automatically add scheduled meetings to user calendars.
- **Notification System** — Add email or SMS reminders for upcoming meetings.

---

##  Contributing

Contributions are welcome! Please:

1. Fork the project  
2. Create a feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add a feature'`)  
4. Push to your branch (`git push origin feature/my-feature`)  
5. Open a pull request  

Please ensure your code adheres to existing style and includes relevant tests.

---

##  License

MIT License © [RISHIKESH PANDIT]

---

##  Contact

- **Internship**: MERN Stack Developer Internship at Codec Technologies — [https://codectechnologies.in](https://codectechnologies.in)  
- **Author**: [Rishikesh Pandit](mailto:rtechist@gmail.com)

---

##  Acknowledgements

- Built with **MongoDB**, **Express**, **React**, **Node.js**, **WebRTC**, and **Socket.io**  
- Inspired by open-source projects and modern real-time communication platforms
