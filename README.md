# Licia-Book-Search
A full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to search for books via the Google Books API, save their favorite books, and manage their personal book lists. Built with modern authentication using JSON Web Tokens (JWT), this app provides a seamless user experience with dynamic front-end routing and a robust back-end API.

## Table of Contents
Project Overview
Key Features
Tech Stack
Installation
Usage
API Endpoints
Authentication
Project Structure
Future Enhancements
Contributing
License

## Project Overview
The Book Search App allows users to search for books using the Google Books API, register and log in securely, and save books to their personal reading lists. Users can also remove books from their list when they no longer want to track them. The project demonstrates a complete user authentication flow, CRUD operations, and API integration.

## Key Features
- User Authentication: Secure user registration and login with JWT.
- Google Books API Integration: Real-time book search using the Google Books API.
- CRUD Operations: Users can add, view, and delete books from their saved list.
- Responsive UI: Built with React and styled for a smooth, responsive experience.
- Protected Routes: Only authenticated users can access their personal book lists.

## Tech Stack
- Front-End:
    React
    React Router
    Apollo Client
    TypeScript
    CSS
- Back-End:
    Node.js
    Express.js
    MongoDB (Mongoose ODM)
    GraphQL API
    JWT Authentication

## Installation
- Prerequisites:
    - Node.js
    - MongoDB
- Steps:
   -  Clone the repository:
    git clone git@github.com:Liciaav/Licia-Book-Search.git
- Install dependencies:
    - Server:
    npm install
    - Client: 
    npm install
- Run the application:
    - Development Mode:
    - Open two terminal windows:
    For the server:
        cd server  
        npm run start
    For the client:
        cd client  
        npm run dev

## Usage
- Homepage: Users can search for books by entering a title, author, or keyword.
- Sign Up / Login: New users can register, and existing users can log in.
- Save Books: Logged-in users can save books to their personal list.
- Manage Books: Users can view and remove saved books from their list.

## Authentication
The application uses JSON Web Tokens (JWT) for secure authentication. Tokens are issued on login and included in the request headers for protected routes.

## Future Enhancements
OAuth Integration: Add social login options (Google, Facebook).
Pagination: Implement pagination for search results.
User Profile Settings: Allow users to update their profile information.
Offline Mode: Cache books for offline access.

## Contributing
- We welcome contributions from the community!
    Fork the repository.
    Create a feature branch (git checkout -b feature/new-feature).
    Commit your changes (git commit -m 'Add new feature').
    Push to the branch (git push origin feature/new-feature).
    Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or feedback, feel free to reach out at licia@gmail.com or open an issue on the repository.