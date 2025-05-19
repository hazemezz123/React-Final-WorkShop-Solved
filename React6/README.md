# React 6 - Template Method Pattern

A React application demonstrating the Template Method Design Pattern implementation.

## Features

- Implements the Template Method Pattern in JavaScript/React
- Shows the creation of an abstract parent class with a template method
- Demonstrates how concrete subclasses can override specific methods while keeping the algorithm structure intact

## Components

- **HotBeverage**: Abstract base class with the template method `prepare()`
- **Tea**: Concrete class extending HotBeverage for making tea
- **Coffee**: Concrete class extending HotBeverage for making coffee

## How It Works

The application uses the Template Method Pattern with:

1. An abstract `HotBeverage` class that defines:

   - A template method `prepare()` that outlines the algorithm steps
   - Common methods `boilWater()` and `pourInCup()`
   - Abstract methods `brew()` and `addCondiments()` that subclasses must implement

2. Concrete subclasses:
   - `Tea`: Implements tea-specific brewing and condiment methods
   - `Coffee`: Implements coffee-specific brewing and condiment methods

The pattern demonstrates how to define the skeleton of an algorithm in a method, deferring some steps to subclasses while keeping the algorithm structure intact.

## Technologies Used

- React
- JavaScript classes and inheritance

## Getting Started

```
npm install
npm run dev
```

Check the browser console to see the template method pattern in action!
