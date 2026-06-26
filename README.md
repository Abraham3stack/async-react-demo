# Async React Demo

A React application built for Task 6 of the FlexiSAF Frontend Internship.

## Live Demo

```md
https://async-react-demo-wine.vercel.app/
```
Live Application: https://async-react-demo-wine.vercel.app/

## Project Overview

This project demonstrates asynchronous React concepts using a simple form submission interface.

The application shows how to work with:

- JSON
- FormData
- Promises
- async/await
- Loading states
- Success and error feedback

## Features

- Controlled form inputs
- Live JSON preview of form state
- FormData extraction from form fields
- Fake asynchronous form submission using a Promise
- async/await request handling
- Loading state while submitting
- Success and error message handling
- Responsive layout

## Concepts Demonstrated

### JSON

The form state is converted into JSON format using `JSON.stringify()` and displayed in real time.

### FormData

The submitted form is converted into a `FormData` object before processing.

### Promises

A fake submit request is created using a Promise to simulate an asynchronous operation.

### async/await

The form submission is handled using async/await for cleaner asynchronous code.

## Project Structure

```txt
src/
├── components/
│   ├── AsyncForm.jsx
│   └── JsonPreview.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Git
- GitHub

## Installation

```bash
git clone https://github.com/Abraham3stack/async-react-demo.git
cd async-react-demo
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Author

Abraham Ogbu

FlexiSAF Frontend Internship – Task 6