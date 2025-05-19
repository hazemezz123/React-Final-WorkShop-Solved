# React 3 - Counter Application with useReducer

A React application that implements counter functionality using the useReducer hook for more complex state management.

## Features

- Increment counter
- Decrement counter
- Reset counter to zero
- Clean, responsive UI using Bootstrap

## Components

- **Counter**: Main component that uses the useReducer hook to manage state

## How It Works

The application uses the useReducer hook to manage the counter state. A reducer function handles three action types:

- `increment`: Increases the counter by 1
- `decrement`: Decreases the counter by 1
- `reset`: Sets the counter back to zero

The reducer pattern provides a more structured approach to state management compared to useState, making it suitable for more complex state logic.

## Technologies Used

- React
- useReducer hook
- Bootstrap for styling

## Getting Started

```
npm install
npm run dev
```
