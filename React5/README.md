# React 5 - Factory Pattern

A React application demonstrating the Factory Design Pattern implementation.

## Features

- Implements the Factory Pattern in JavaScript/React
- Creates different types of buttons dynamically
- Uses Bootstrap for styling buttons

## Components

- **FactoryPattern**: Demonstrates the factory pattern by creating different types of buttons based on input parameters

## How It Works

The application uses a factory function `createButton` that accepts a button type parameter and returns the appropriate button component:

- "primary" - returns a blue primary button
- "secondary" - returns a gray secondary button
- "danger" - returns a red danger button
- default - returns an info button

This pattern demonstrates object creation that's centralized in a single factory function, which can be useful for component creation that requires complex logic.

## Technologies Used

- React
- Bootstrap for styling

## Getting Started

```
npm install
npm run dev
```
