Project Summary
The LMS IPA SD project is an interactive Learning Management System tailored for elementary school science education, specifically designed for SD AL-IRSYAD AL-ISLAMIYAH. It provides a user-friendly platform that allows students to engage with educational resources, participate in quizzes, submit assignments, and interact in discussions. The system enhances the learning experience through real-time quizzes and a scoring system while equipping educators with tools for session management, content creation, and tracking student progress, all powered by Firebase.

Project Module Description
Features
For Students:

Personal dashboard with statistics (scores, rankings, progress)
Access to interactive learning materials and videos
Participation in real-time quizzes and challenges
Display of assignment details
Real-time discussion forums
Navigation to a landing page before login
For Teachers:

Full CRUD functionality for:
Session management (create, edit, delete)
Student management (registration and tracking)
Content management (materials, quizzes, videos, assignments)
Reporting and analytics (exportable to PDF/Excel)
Assignment submission tracking with checklists and grading
Directory Tree
dashboard/
├── README.md              # Project documentation
├── eslint.config.js       # ESLint configuration file
├── index.html             # Main HTML entry point
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── src/                   # Source code directory
│   ├── App.jsx            # Main application component with routing
│   ├── components/        # React components including landing page and login form
│   ├── contexts/          # Context API for authentication
│   ├── data/              # Mock data for development
│   ├── firebase/          # Firebase configuration
│   ├── index.css          # Global styles
│   ├── main.jsx           # Entry point for React
│   └── utils/             # Utility functions
└── vite.config.js         # Vite configuration
File Description Inventory
README.md: Overview and setup instructions for the project.
eslint.config.js: Configuration for ESLint to maintain code quality.
index.html: The main HTML file that serves the app.
package.json: Lists project dependencies and defines scripts.
postcss.config.js: Configuration for PostCSS processing.
src/: Contains all source code files.
App.jsx: The root component of the application with routing logic.
components/: Contains all reusable React components, including landing page and login form.
contexts/: Contains context providers for managing global state.
data/: Mock data used during development.
firebase/: Contains Firebase configuration and initialization.
index.css: Contains global CSS styles.
main.jsx: Entry point for the React application.
utils/: Helper functions for various functionalities.
vite.config.js: Configuration for Vite, the build tool used in the project.
Technology Stack
Frontend: React, Tailwind CSS
Backend: Firebase (Firestore, Authentication, Storage)
Build Tool: Vite
Linting: ESLint
Usage
Install Dependencies: Run the command to install project dependencies.
Build the Project: Use the build command to prepare the application for deployment.
Run the Application: Start the application in development mode.
