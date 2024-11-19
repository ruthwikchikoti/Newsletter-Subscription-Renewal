
# Newsletter Subscription Renewal Flow Simulation

## Project Description
This project simulates a newsletter subscription renewal process using the MERN stack (MongoDB, Express.js, React.js, Node.js). The flow includes sending renewal reminder emails, waiting for user responses, and managing subscription statuses. It also provides logs of each step of the process.

### Features:
1. **Flow Simulation**: Simulates the process of sending emails, waiting for user responses, and updating subscription statuses.
2. **Real Email Sending**: Sends emails using an SMTP server (via `nodemailer`).
3. **Dynamic Logs**: Tracks and displays the progress of the flow in real-time.
4. **Admin Management**: Allows admin users to create and manage email templates (e.g., Reminder, Thank You emails).
5. **Database Integration**: Stores flow logs and email templates in MongoDB.
6. **Modern UI**: A user-friendly interface built with React.js.

---

## Folder Structure

### Backend
```
renewal-flow-backend
├── .env                    # Environment variables
├── package.json            # Node.js dependencies
├── server.js               # Main server entry point
├── config/
│   ├── db.js               # MongoDB connection setup
│   └── mailer.js           # Nodemailer configuration
├── models/
│   ├── FlowLog.js          # Flow log model
│   └── EmailTemplate.js    # Email template model
├── routes/
│   ├── flow.js             # Flow-related routes
│   └── email.js            # Email template routes
├── controllers/
│   ├── flowController.js   # Logic for flow handling
│   └── emailController.js  # Logic for email template management
└── utils/
    └── responseHandler.js  # Utility functions for consistent API responses
```

### Frontend
```
renewal-flow-frontend
├── public/                 # Static files
├── src/
│   ├── api/
│   │   ├── flowApi.js      # API calls for flow operations
│   │   └── emailApi.js     # API calls for email templates
│   ├── components/
│   │   ├── FlowSimulation.js # Component for flow simulation
│   │   └── LogViewer.js    # Component for viewing flow logs
│   ├── pages/
│   │   ├── Home.js         # Main page for the flow simulation
│   │   └── Admin.js        # Admin page for email management
│   ├── App.js              # Main React application
│   ├── index.js            # React entry point
│   └── styles/
│       └── main.css        # Custom styles
```

---

## Prerequisites

1. **Node.js**: Install Node.js (>= 14.x) from [Node.js Downloads](https://nodejs.org/).
2. **MongoDB**: Install and run MongoDB (local or cloud-based).
3. **SMTP Server**: Use an SMTP service (e.g., Gmail, Outlook) for email sending.

---

## Installation

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd renewal-flow-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   SMTP_USER=your_smtp_email
   SMTP_PASS=your_smtp_password
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd renewal-flow-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---

## Usage

### 1. Simulate the Flow
- Navigate to the Home page.
- Enter a user email and click "Start Flow."
- View logs as the simulation progresses.

### 2. Manage Email Templates
- Navigate to the `/admin` route.
- Create or edit email templates by specifying type, subject, and body.

---

## Example Scenarios

1. **Initial Email**:
   - The system sends the first reminder email.
   - Simulates waiting for the user to renew.
   
2. **Second Email**:
   - If not renewed, a second reminder is sent.
   - Simulates a waiting period.

3. **Completion**:
   - Sends a "Thank You" email if renewed.
   - Ends the flow with appropriate logs.

---

## Built With

### Backend
- **Node.js**: JavaScript runtime.
- **Express.js**: Backend framework.
- **MongoDB**: NoSQL database.
- **Nodemailer**: SMTP-based email sending.

### Frontend
- **React.js**: Frontend library.
- **Axios**: HTTP requests.
- **React Toastify**: Notifications.

---

## Screenshots

### Home Page (Flow Simulation)
![Home Page Simulation](<Insert-Path-to-Screenshot>)

### Admin Page (Email Management)
![Admin Page](<Insert-Path-to-Screenshot>)

---

## API Endpoints

### Flow API
| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| `POST` | `/api/flow/start` | Start the flow for a user. |

### Email API
| Method | Endpoint          | Description                      |
|--------|-------------------|----------------------------------|
| `POST` | `/api/email/template` | Create a new email template.   |
| `GET`  | `/api/email/template` | Retrieve all email templates.  |

---

## Testing the Application

1. Start both backend and frontend servers.
2. Open the browser at `http://localhost:3000` for the React frontend.
3. Perform the following tasks:
   - Start a flow with an email address.
   - View logs in real-time.
   - Add a new email template using the Admin interface.

---

## Limitations and Future Improvements

1. **User Authentication**:
   - Currently, there is no user authentication.
   - Future iterations could include login for users and admins.
   
2. **Enhanced Logging**:
   - Add timestamps for each log entry.
   - Provide an admin dashboard for detailed monitoring.

3. **Dynamic Configuration**:
   - Allow admins to configure wait times and randomization logic.

---

## Conclusion
This project showcases a modular, simulation-based workflow built with the MERN stack. It incorporates real-world features like email sending and admin management while maintaining a simple, user-friendly interface.

