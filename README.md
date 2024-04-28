# Finance Tracker App

Finance Tracker is a simple web application for tracking personal finances. It allows users to add income and expenses, view a summary of their transactions, and see their total balance. The app is built using React, Reduxjs Toolkit, and Material UI.

## Getting Started

To get started with the Finance Tracker app, follow these steps:
1. Clone the repository:

### `git clone https://github.com/PiyushSCodes/finance-tracker.git`

2. Install the dependencies:

### `npm install`

3. Start the development server:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## JSON Server

JSON Server is a easy-to-use Node.js tool that simulates a RESTful API using a JSON file as the data source.\

To create a backend API server using JSON Server follow these steps:

1. Install the  dependency:

### `npm i json-server`

2. Start the json server:

### `npx json-server --watch db.json --port 8000`

Starts a json server at port 8000.\
Open [http://localhost:8000/users](http://localhost:8000/users) to view it in your browser.

## Functionalities

The Finance Tracker app includes the following functionalities:

Add transactions: Users can add income and expenses by specifying the category, amount, date, and type (income or expense) of the transaction.

View transactions: Users can view a list of all their transactions.

Total balance: The app displays the total balance of the user's transactions, calculated as the sum of all income transactions minus the sum of all expense transactions.

## Reduxjs Toolkit

The Finance Tracker app uses the Reduxjs Toolkit to manage the state of the application. The Reduxjs Toolkit provides a set of utilities for simplifying common Redux tasks, such as creating reducers, actions, and selectors.

To use the Reduxjs Toolkit in the Finance Tracker app, follow these steps:

1. Install the Reduxjs Toolkit:

### `npm install @reduxjs/toolkit`

2. Create slice for managing the state of the transactions and category.

3. Use the configureStore function from the Reduxjs Toolkit to create a Redux store.

4. Use the Provider component from the react-redux library to provide the Redux store to the components of the application.

## Material UI

The Finance Tracker app uses the Material UI library to provide a consistent and modern look and feel. Material UI is a popular React UI framework that provides a set of pre-built components and styles for building responsive and accessible web applications.

To use Material UI in the Finance Tracker app, follow these steps:

1. Install Material UI:

### `npm install @mui/material @emotion/react @emotion/styled`

2. Import the Material UI components and styles in the components of the application as required.

## Use of localStorage

localStorage is being used to store application data locally.\

To use localStorage in application, follow these steps:

1. Store the values using proper key, value pairs as per your requirement:

### `localStorage.setItem(key, JSON.stringify(value));`

2. To retrieve the data from localStorage, use:

### `localStorage.getItem(key);`

To read more about localStorage property\
Open [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to view it in your browser.

## Build app for production

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!