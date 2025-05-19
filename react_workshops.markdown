# React Workshops Tasks and Instructions

## Table of Contents
- [Exercise F: React 1](#exercise-f-react-1)
- [Exercise G: React 2](#exercise-g-react-2)
- [Exercise H: React 3](#exercise-h-react-3)
- [Exercise I: React 4](#exercise-i-react-4)

## Exercise F: React 1

### Description
| Exercise | F |
|----------|---|
| Name | React 1 |
| Outcomes and Performance Criteria | Build a dynamic React application that utilizes components, state, props, and Hooks for interactivity and state management. <br> Design complex component hierarchies with effective state sharing using useContext. <br> Develop a single-page application with multiple routes, dynamic navigation, and SSR using React Router |
| Skills | TPC4.1: Create and maintain websites <br> TPC4.2: Access bootstrap Plug-Ins <br> TPC4.3: Dynamically add content to a web page using JavaScript <br> TPC4.4: Use basic data storage software and Digital Design Software <br> TPC4.5: Control applications layout with geometry managers <br> TPC4.6: Create interactive applications <br> TPC4.7: Create native design <br> TPC4.8: Create UI web design <br> TPC5.1: Use database software tools to run queries and produce reports <br> TPC5.2: Write PHP scripts to handle HTML forms <br> TPC5.3: Develop and use simple Dashboards and simple data visualization forms <br> TPC5.4: Using UI FrameWork (React) <br> TPC5.7: Using controllers and routes for APIs and URLs <br> TPC5.8: Creating and using composer packages <br> TPC5.9: Create restful services, use an Effect Dependency Array and how to hand errors in data requests |
| Time Required | 90 mins |
| Tools needed | VS Code, Internet, React Project, Axios, Web Browser, Node.js, React-Router-Dom, Bootstrap, Font Awesome |

### Instructions
Your task is to build a React application for displaying products using the FakeStore API. Start by creating a new React project and setting up a ProductContext using the Context API to manage product data globally. Install necessary dependencies, including Bootstrap, Axios, and React Router DOM.

Organize your project with the following components:
- Navbar: For navigation across the application.
- ProductList: To display all products.
- Footer: For the footer section.
- NotFound: For handling invalid routes.

Implement a getAllProducts function to fetch product data from the FakeStore API (https://fakestoreapi.com/products). Make this function accessible to all components through the ProductContext. Use the ProductList component to display all products in Bootstrap-styled cards, applying the map function to iterate over the fetched data.

Design the application using a Bootstrap layout to ensure it is visually appealing and user-friendly, with proper navigation through the Navbar.

## Exercise G: React 2

### Description
| Exercise | G |
|----------|---|
| Name | React 2 |
| Outcomes and Performance Criteria | Build a dynamic React application that utilizes components, state, props, and Hooks for interactivity and state management. <br> Design Simple component hierarchies with effective state sharing using usestate. |
| Skills | TPC4.1: Create and maintain websites <br> TPC4.2: Access bootstrap Plug-Ins <br> TPC4.5: Control applications layout with geometry managers <br> TPC4.6: Create interactive applications <br> TPC4.7: Create native design <br> TPC4.8: Create UI web design <br> TPC5.4: Using UI FrameWork (React) |
| Time Required | 30 mins |
| Tools needed | VS Code, Internet, React Project, Web Browser, Node.js, Bootstrap |

### Instructions
Your task is to create a React application that implements counter functionality using the usestate hook. Start by defining a state variable named counter and its setter function, setCounter.

Create three functions:
- increment: To increase the counter by 1.
- decrement: To decrease the counter by 1.
- reset: To set the counter back to zero.

In your view, use Bootstrap to create three buttons labeled Increment, Decrement, and Reset, with each button calling its respective function. Display the current value of the counter prominently in the view.

Ensure the application has a visually appealing design by using Bootstrap styling for buttons and layout.

## Exercise H: React 3

### Description
| Exercise | H |
|----------|---|
| Name | React 3 |
| Outcomes and Performance Criteria | Build a dynamic React application that utilizes components, state, props, and Hooks for interactivity and state management. <br> Design complex component hierarchies with effective state sharing using useContext. <br> Develop a single-page application with multiple routes, dynamic navigation, and SSR using React Router |
| Skills | TPC4.1: Create and maintain websites <br> TPC4.2: Access bootstrap Plug-Ins <br> TPC4.3: Dynamically add content to a web page using JavaScript <br> TPC4.4: Use basic data storage software and Digital Design Software <br> TPC4.5: Control applications layout with geometry managers <br> TPC4.6: Create interactive applications <br> TPC4.7: Create native design <br> TPC4.8: Create UI web design <br> TPC5.1: Use database software tools to run queries and produce reports <br> TPC5.2: Write PHP scripts to handle HTML forms <br> TPC5.3: Develop and use simple Dashboards and simple data visualization forms <br> TPC5.4: Using UI FrameWork (React) <br> TPC5.7: Using controllers and routes for APIs and URLs <br> TPC5.8: Creating and using composer packages <br> TPC5.9: Create restful services, use an Effect Dependency Array and how to hand errors in data requests |
| Time Required | 120 mins |
| Tools needed | VS Code, Internet, React Project, Axios, Web Browser, Node.js, React-Router-Dom, Bootstrap, Font Awesome, Final output Images: Folder on the Desktop |

### Instructions
Your task is to build a React application to display news articles from different categories using APIs. Start by creating a new React project and installing dependencies like Bootstrap, Axios, and React Router DOM.

Organize the project with the following components:
- General: Fetch and display general news articles using the API: https://newsapi.org/v2/topheadlines?country=us&category=general&apiKey=27b72cf6eed44cdcb11855aed93e1c59.
- Sports: Fetch and display sports news articles using the API: https://newsapi.org/v2/topheadlines?country=us&category=sports&apiKey=27b72cf6eed44cdcb11855aed93e1c59.
- Navbar: Create navigation links for "General" and "Sports" to navigate between the categories.
- Footer: For the footer section.
- NotFound: For handling invalid routes.

Ensure the Navbar provides links to the "General" and "Sports" components, displaying the correct data for each category when clicked. Enhance the layout and styling of the application using Bootstrap to create a user-friendly experience.

## Exercise I: React 4

### Description
| Exercise | I |
|----------|---|
| Name | React 4 |
| Outcomes and Performance Criteria | Build a dynamic React application that utilizes components, state, props, and Hooks for interactivity and state management. <br> Design Simple component hierarchies with effective state sharing using usestate. |
| Skills | TPC4.1: Create and maintain websites <br> TPC4.2: Access bootstrap Plug-Ins <br> TPC4.5: Control applications layout with geometry managers <br> TPC4.6: Create interactive applications <br> TPC4.7: Create native design <br> TPC4.8: Create UI web design <br> TPC5.4: Using UI FrameWork (React) |
| Time Required | 45 mins |
| Tools needed | VS Code, Internet, React Project, Web Browser, Node.js, Bootstrap |

### Instructions
Your task is to create a React application that implements counter functionality using the useReducer hook. Start by setting up the useReducer with an initial state and a reducer function.

In the reducer function, use a switch statement to handle different action cases:
- increment: To increase the counter by 1.
- decrement: To decrease the counter by 1.
- reset: To set the counter back to zero.

Create three buttons styled with Bootstrap:
- Increment: To dispatch the increment action.
- Decrement: To dispatch the decrement action.
- Reset: To dispatch the reset action.

Display the current value of the counter in the view and ensure a clean, responsive layout using Bootstrap styling.