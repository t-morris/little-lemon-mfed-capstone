# 🍋 Little Lemon Restaurant – Frontend Project

A fully-functional React single-page application built as part of the Meta Front-End Development course.
This project includes a responsive website, interactive reservation system, form validation, routing, and a full Jest test suite using React Testing Library.

## 📌 Features

### ⭐ Core Pages

- Home, About/Our Story, Menu, Reservations, Order Online, Login
- Global header and footer with accessible navigation
- Responsive layout with Flexbox and CSS Grid
### 🍽 Reservation System

- Built with React Hook Form
- Validation with Yup (@hookform/resolvers/yup)
- Dynamic available times populated via a mocked API (fetchAPI)
- Visual radio-based selectors for:
- Dining type (Indoor / Alfresco)
- Fully accessible labels, roles, ARIA attributes
- Error feedback rendered with aria-live="assertive"

### 🧪 Unit Tests (Jest + React Testing Library)

- Form attribute tests
- Validation error tests
- Successful submission test
- Utils tests for initializeTimes and updateTimes
- Mocked API with deterministic seeded random function

## 🚀 Getting Started
### 1. Clone the Repository
```
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install Dependencies
This project uses Node and npm.
```
npm install
```

### 3. Run the Development Server
```
npm start
```

Browse to http://localhost:3000/ to view the app.

## 🧪 Running Tests
This project uses Jest, React Testing Library, and @testing-library/user-event.

### Run the entire test suite:
```
npm run test
```

###What the tests cover:
- Component Rendering
  - BookingForm UI and interactive elements
  - HTML Attribute Assertions
  - Inputs, radios, selects, ids, types
- Validation
  - Required fields
  - Invalid email format
  - Incorrect phone patterns
  - Card number & CVC patterns
- API Logic
  - initializeTimes (ensures non-empty result)
  - updateTimes (returns a new array)
- Successful Submission
  - Filling out all fields
  - Radio/select interaction
  - Ensures submitForm is called exactly once

## 📁 Project Structure
```
.
├── package.json
├── package-lock.json
├── public
│   ├── api.js
│   ├── favicon.ico
│   ├── index.html
│   ├── little-lemon-og.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── assets
    │   ├── 08c5772c481233a30a46aeca552132053604e2a8.jpg
    │   ├── 3ca412176fe4306326b04a78b51fa148c49f99c1.jpg
    │   ├── 44dd2beb0c06094368ffbb7fa1843005cfdae174.jpg
    │   ├── 8fab66317d6c35dc211a165dbc3735e15466ae68.png
    │   └── ...
    ├── components
    │   ├── About.js
    │   ├── BookingForm.js
    │   ├── BookingPage.js
    │   ├── ConfirmedBooking.js
    │   ├── Delivery.js
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── Hero.js
    │   ├── Home.js
    │   ├── Main.js
    │   ├── menuData.js
    │   ├── Menu.js
    │   ├── Nav.js
    │   ├── NotFound.js
    │   ├── OurStory.js
    │   ├── Specials.js
    │   ├── testimonialsData.js
    │   ├── Testimonials.js
    │   └── Utils.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```

## ⚙️ Tools & Libraries

Frontend
- React 18
- React Router
- React Hook Form
- Yup for schema validation
- CSS (custom styling)

Testing
- Jest
- @testing-library/react
- @testing-library/user-event

Dev Environment
- Node.js + npm

## 🧭 Navigation Overview
Routing is handled in Main.js using React Router:

- / – Home
- /ourstory – About Us
- /menu – Menu
- /bookings – Bookings / Reservation Form
- /delivery – Online Ordering
- /login – Login

The Footer contains additional semantic navigation with Site links, Contact details, and Social icons.

## 🔒 Form Validation Summary

The booking form uses a Yup schema enforcing:
- Dining type (required)
- People count (required)
- Date + Time (required, auto-selected)
- Booking type (required)
- First/Last Name (required)
- Email (valid + required)
- Phone (10+ digits)
- Card number (16–19 digits/spaces/hyphens)
- CVC (3–4 digits)

Real-time error display ensures accessibility and usability.
