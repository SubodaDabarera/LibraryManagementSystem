# Library Management System: A React TypeScript Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Overview

This project is designed to showcase the power of **ReactJS** with **TypeScript**. It emphasizes best practices in folder structure, hooks usage, component reusability, role-based access control, protected routes, and context usage. The application includes user management functionalities, book display features, and authentication mechanisms.

## Features

- **User Management**: Create, update, and delete user profiles.
- **Book Display**: Browse and view book details.
- **Authentication**: Secure login and registration processes.
- **Role-Based Access**: Different access levels for users based on roles.
- **Protected Routes**: Ensure that only authorized users can access certain parts of the application.
- **Context API**: Efficient state management across components.

## Technologies Used

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [Axios](https://axios-http.com/) (for API calls)
- [Material UI](https://mui.com/)

## Folder Structure

Here's a brief overview of the project's folder structure:

```
/src
├── api               # Backend api calls
├── components        # Reusable components
├── context           # Context API for state management
├── hooks             # Custom hooks
|  ├── handlers       # Functions for API calls
|  └── utilities      # Other utility functions
├── lib               # Library files
|  ├── unums          # All enums are stored here
|  └── types          # All type definitions and interfaces are stored here
├── pages             # Application pages (e.g., Home, Login, Dashboard)
└── styles            # CSS or styled-components
```

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SubodaDabarera/LibraryManagementSystem.git
   ```
2. Navigate into the project directory:
   ```bash
   cd LibraryManagementSystem
3. Install the dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start
5. Open your browser and visit http://localhost:3000

## Usage

Once the application is running, you can
 1. Register a new user or log in with existing credentials
 2. Manage user profiles through the user management interface
 3. Browse through a list of books and view their details

