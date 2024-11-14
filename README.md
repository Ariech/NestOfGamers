# Nest Of Gamers

## Table of Contents
1. [About the Project](#about-the-project)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Future Enhancements](#future-enhancements)

### About the Project
This project is an interactive gaming library that enables users to explore, search, and manage their favorite games in a streamlined interface. It leverages the [RAWG API](https://rawg.io/apidocs) for comprehensive game data, allowing users to discover and organize games based on their preferences.

> Note: This project is a work-in-progress and will continue evolving as I expand my knowledge and skills.

### Technologies Used
- **Frontend**: React, TypeScript, TailwindCSS
- **Data Management**: TanStack Query (for optimized data fetching and caching)
- **Build Tool**: Vite
- **Testing**: Vitest, Testing Library

### Features
- **Search with Debouncing**: Quickly find games with real-time search that minimizes server requests.
- **Pagination**: Efficient browsing experience, with data caching for smoother transitions between pages.
- **Favorite List Management**: Add and remove games to create a personalized favorites list.
- **Dynamic Sorting and Filtering**: Filter games by genre or sort based on properties like release date, rating, etc.

### Installation

1. **Clone the repository:**
```
git clone git@github.com:Ariech/NestOfGamers.git
```
2. **Navigate into the project directory**
  
3. **Install dependencies**
```
npm install
```
4. **Create .env file in main project folder and provide your API KEY. To get a key, create an account and apply for it on the [RAWG API](https://rawg.io/apidocs) website.**
```
VITE_RAWG_API_KEY=your key
```
5. **Run the application**
```
npm run dev
```
6. **The application will be available locally at:**
```
http://localhost:5173/
```

### Usage
- Browsing Games: Use the search bar, genre filter, and ordering options to discover games.
- Managing Favorites: Click the favorite button to add/remove games from your favorites list.
- Pagination: Use pagination controls to navigate through the game collection.

### Future Enhancements

- Implement additional sorting and filtering options.
- Integrate user accounts for persistent favorite lists.
- Something I don't yet know about: I am open to exploring and adding new features or technologies as I continue to learn and develop my skills.
