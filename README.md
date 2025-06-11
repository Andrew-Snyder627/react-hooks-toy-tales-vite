# Toy Tales

A full CRUD React application for managing a toy collection! Users can view, add, like, and delete toys using a connected `json-server` backend. This project demonstrates the use of React Hooks (`useState`, `useEffect`), event handling, and RESTful API integration.

---

## Features

- ✅ **View Toys**: Fetch and display all toys on page load.
- ✅ **Add Toys**: Submit a form to add a new toy to the collection.
- ✅ **Like Toys**: Increase the like count of individual toys with a button.
- ✅ **Delete Toys**: Remove toys from the collection with a "Donate" button.

---

## Screenshot

Add your screenshot here:

![Toy Tales Demo](src/assets/Screenshot%202025-06-10%20at%208.52.05 PM.png)

---

## Technologies Used

- React (Vite)
- JavaScript (ES6+)
- JSX
- JSON Server
- HTML/CSS

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Andrew-Snyder627/toy-tales.git
cd toy-tales
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend server

This uses `json-server` to serve toy data.

```bash
npm run server
# Runs on http://localhost:3001
```

### 4. Start the frontend

```bash
npm run dev
# Opens on http://localhost:3000
```

---

## Run Tests

To run the full test suite:

```bash
npm run test
```

All tests should pass once CRUD functionality is implemented correctly.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── ToyForm.jsx
│   ├── ToyContainer.jsx
│   └── ToyCard.jsx
└── __tests__/
    ├── AllToys.test.jsx
    ├── Donate.test.jsx
    ├── Like.test.jsx
    └── ToyForm.test.jsx
```

---

## Best Practices Followed

- Clean and readable code with inline comments
- State lifted to top-level `App` component
- Stateless components handle presentation and user events
- JSON Server used to simulate RESTful backend
- Functional components with hooks instead of class components
