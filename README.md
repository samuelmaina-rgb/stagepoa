# StagePoa

### Find Your Stage. Know Your Route. Ride With Confidence.

StagePoa is a web application designed to help commuters in Nairobi easily find **matatu stages, routes, fares, SACCOs, and directions** to their desired destinations.

Navigating Nairobi's matatu system can be confusing, especially for people who are unfamiliar with specific stages or routes. StagePoa provides a simple and user-friendly platform where users can search for a destination and discover the most relevant matatu stages and route information.


# About the Project

**StagePoa** is a Nairobi-focused matatu navigation platform.

The application allows users to:

1. Search for a destination.
2. Find relevant matatu stages.
3. View information about each stage.
4. See available routes and SACCOs.
5. View estimated fare ranges.
6. See estimated waiting times.
7. Check the current stage status.
8. Get directions to a specific stage.
9. Save stages as favorites.
10. Log in to access user-related features.

The goal is to make public transportation information more accessible and easier to understand.


# Problem Statement

Nairobi's public transportation system relies heavily on matatus, but information about stages and routes is often difficult to find in one place.

Commuters may have questions such as:

* Where can I find a matatu going to my destination?
* Which stage should I use?
* Which routes operate from that stage?
* How much should I expect to pay?
* Which SACCOs operate there?
* How long might I have to wait?
* Where exactly is the stage located?

StagePoa aims to provide this information through one simple web application.



#  Project Goals

The main goals of StagePoa are to:

* Make Nairobi matatu stages easier to discover.
* Help users find routes to their destinations.
* Provide useful information about stages.
* Make stage locations easier to navigate to.
* Reduce uncertainty for commuters.
* Provide a simple and accessible user experience.
* Create a foundation for a larger public transportation information platform.

# Features

## Destination Search

Users can enter their starting point and destination to search for relevant matatu stages.

The search system helps users identify stages that serve their desired destination.



## Stage Information

Each stage can provide information such as:

* Stage name
* Stage location
* Stage status
* Available SACCOs
* Routes served
* Destinations
* Fare ranges
* Estimated waiting times


## Stage Status

StagePoa can display the current status of a stage.

Possible statuses include:

*  Clear
*  Crowded
*  Peak Hour

This gives commuters an idea of what to expect before travelling.


## Route Information

Stage cards can display routes and destinations served by a particular stage.

Users can see:

* Route number
* Destination
* Fare range
* Estimated waiting time


##  Fare Information

StagePoa provides estimated fare ranges instead of presenting a single fixed price.


This accounts for the fact that matatu fares can vary depending on factors such as:

* Time of day
* Traffic
* Demand
* Weather
* Peak hours
* Other operating conditions

## Get Directions

Every relevant stage can include a **Get Directions** button.

When clicked, the user is taken to a map service in another browser tab, allowing them to get directions to the specific stage.

This makes it easier for users who know their destination but don't know exactly where the stage is located.


## Favorites

Users can save frequently used stages as favorites.

The favorites functionality uses a React context so that favorite-stage information can be shared across relevant components without passing props through multiple levels.

## Authentication

StagePoa uses Firebase Authentication to support user login functionality.

Authentication provides the foundation for user-specific functionality such as:

* Login
* Protected user features
* Personalized favorites
* Future user profiles


## Responsive Design

The application is designed to work across different screen sizes, including:

* Desktop computers
* Laptops
* Tablets
* Mobile devices

The navigation system includes a responsive sidebar for smaller screen sizes.

# Tech Stack

StagePoa is built using modern web development technologies.

### Frontend

* **React**
* **JavaScript**
* **HTML5**
* **CSS**
* **Vite**

### UI & Icons

* **Lucide React**

Lucide React is used for interface icons such as:

* Search
* Map pin
* Menu
* Navigation
* Heart
* User-related icons

### Backend / Services

* **Firebase**
* Firebase Authentication
* Firebase Firestore

### Version Control

* **Git**
* **GitHub**

### Deployment

The project can be deployed using platforms such as:

* Vercel

# Project Structure

The project follows a component-based React structure.

A simplified version of the project structure is:

```text
stagepoa/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── ...
│   │
│   ├── context/
│   │   ├── FavoritesContext.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Results.jsx
│   │   ├── Login.jsx
│   │   └── ...
│   │
│   ├── firebase/
│   │   └── firebaseConfig.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

#  Getting Started

Follow the steps below to run StagePoa locally.

## 1. Clone the Repository

Clone the repository using Git:

```bash
git clone <repository-url>
```

Then move into the project directory:

```bash
cd stagepoa
```

---

## 2. Install Dependencies

Install the required packages:

```bash
npm install
```

---

# Environment Variables

StagePoa uses environment variables to store configuration values that should not be hard-coded directly into the source code.

Create a `.env` file in the root of the project:

```text
.env
```

Add the required Firebase variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Important

Do **not** commit your `.env` file to GitHub.

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
```

---

# Firebase Configuration

StagePoa uses Firebase for authentication and database functionality.

The Firebase configuration is accessed through Vite environment variables.

Example:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

The Firebase configuration values should be stored in `.env` rather than directly inside the source code.

---

# Running the Project

Start the development server with:

```bash
npm run dev
```

Vite will provide a local development URL, usually similar to:

```text
http://localhost:5173
```

Open the provided URL in your browser.

---

# Building for Production

To create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

# Previewing the Production Build

After building the application, you can preview the production version locally:

```bash
npm run preview
```

---

# Linting

If ESLint is configured in the project, run:

```bash
npm run lint
```

This helps identify potential JavaScript and React issues before deployment.

---

# Git Workflow

StagePoa uses Git for version control.

Before starting new work, make sure your local repository is up to date:

```bash
git checkout main
git pull origin main
```

Create a new branch for your feature:

```bash
git checkout -b feature/your-feature-name
```

For example:

```bash
git checkout -b feature/favorites
```

After making changes:

```bash
git status
```

Stage your changes:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: add favorites functionality"
```

Push your branch:

```bash
git push -u origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

---

# Contributing

Contributions are welcome.

To contribute:

### 1. Fork or clone the repository

```bash
git clone <repository-url>
```

### 2. Create a feature branch

```bash
git checkout -b feature/feature-name
```

### 3. Make your changes

Implement and test your feature.

### 4. Commit your changes

Use a clear commit message:

```bash
git commit -m "feat: add stage search"
```

### 5. Push your branch

```bash
git push -u origin feature/feature-name
```

### 6. Open a Pull Request

Explain:

* What you changed
* Why you changed it
* Any issues you encountered
* How you tested the changes

---

# ommit Convention

Where possible, use conventional commit prefixes.

| Prefix      | Purpose                 |
| ----------- | ----------------------- |
| `feat:`     | New feature             |
| `fix:`      | Bug fix                 |
| `style:`    | Styling changes         |
| `refactor:` | Code restructuring      |
| `docs:`     | Documentation           |
| `chore:`    | Maintenance             |
| `perf:`     | Performance improvement |

Examples:

```bash
git commit -m "feat: add stage directions"
```

```bash
git commit -m "fix: prevent sidebar from closing unexpectedly"
```

```bash
git commit -m "style: update search button design"
```

---

# Future Improvements

StagePoa is designed to be expandable.

Potential future features include:

### Live Location

Allow users to use their current location to find nearby stages.

### Travel Time

Integrate mapping services to provide estimated travel times between locations.

### Interactive Maps

Display stages directly on an interactive map.

### Real-Time Stage Conditions

Provide more accurate information about:

* Crowd levels
* Traffic
* Waiting times
* Peak hours

### Notifications

Notify users about important route or stage changes.
### Stage Reviews

Allow users to rate and review stages.

### Route Tracking

Provide more detailed information about routes and potentially track vehicles where reliable data is available.

### User Profiles

Allow users to manage:

* Favorite stages
* Frequently used routes
* Saved destinations
* Travel history

### Progressive Web App

Turn StagePoa into a Progressive Web App so users can install it on their phones.

---

# Known Limitations

Because StagePoa is still under development, some information may not always represent real-time conditions.

For example:

* Matatu fares can change.
* Waiting times can vary.
* Stage crowd levels can change quickly.
* Routes and SACCO operations can change.
* Traffic conditions can affect travel times.

Users should treat displayed fare and waiting-time information as **estimates**.

---

# Security

StagePoa follows basic security practices including:

* Environment variables for configuration.
* `.env` excluded from version control.
* Firebase Authentication for user authentication.
* Firebase Firestore security rules for database access.

Never commit sensitive credentials, private keys, passwords, or other secrets to the repository.

---

# Target Audience

StagePoa is primarily designed for:

* Nairobi commuters
* Students
* Tourists
* New residents
* Visitors unfamiliar with Nairobi
* Anyone who uses matatus for transportation

---

# Why StagePoa?

Nairobi's matatu system is an essential part of everyday transportation.

However, navigating it can be difficult when you don't know:

> **Where to go, which stage to use, what route to take, or how much the journey might cost.**

StagePoa brings this information together into a single platform.

### Find your stage.

### Know your route.

### Ride with confidence. 🚌

---

# License

This project is currently being developed as a learning and collaborative software project.

License information can be added when the project's licensing terms are finalized.

---

# Development Team

StagePoa is a collaborative software development project.

The project demonstrates practical use of:

* React development
* Component-based architecture
* API integration
* Firebase
* Git and GitHub
* Responsive UI design
* Team-based development
* Deployment workflows

---

## StagePoa

**Making Nairobi's matatu system easier to navigate — one stage at a time.**
