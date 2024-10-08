# MovieApp

# CGMultiplex

CGMultiplex is a comprehensive movie-related web application built with React, Redux, and Tailwind CSS. It features multiple components that provide users with detailed information about movies, TV shows, and people in the entertainment industry. The application is fully responsive, ensuring a seamless user experience across all screen sizes.

## Table of Contents

- Features
- Project Structure
- Components
- State Management
- Getting Started
- Usage
- Contributing
- License

## Features

- Home Page: Displays trending movies and TV shows with filtering options.
- Movie and TV Show Details: Detailed information about movies and TV shows, including recommendations, trailers, and watch providers.
- People Details: Detailed information about actors, directors, and other people in the industry, including their movie and TV show credits.
- Responsive Design: Fully responsive for all screen sizes, similar to Disney+ Hotstar, using Tailwind CSS.
- Navigation: A Sidenav and Topnav for easy navigation throughout the application.
- About Us and Contact Us Pages: Information about the company and a contact form for user inquiries.

## Project Structure

The project is organized into the following structure:


src/
├── components/
│   ├── Home.jsx
│   ├── Loading.jsx
│   ├── Movie.jsx
│   ├── Moviedetails.jsx
│   ├── Notfound.jsx
│   ├── People.jsx
│   ├── Peopledetails.jsx
│   ├── Popular.jsx
│   ├── Trending.jsx
│   ├── TvDetails.jsx
│   └── Tvshows.jsx
│
├── components/partials/
│   ├── AboutUs.jsx
│   ├── Cards.jsx
│   ├── ContactUs.jsx
│   ├── Dropdown.jsx
│   ├── Header.jsx
│   ├── HorizontalCards.jsx
│   ├── Sidenav.jsx
│   ├── Topnav.jsx
│   └── Trailer.jsx
│
├── store/
│   ├── actions/
│   │   ├── movieActions.jsx
│   │   ├── peopleActions.jsx
│   │   └── tvActions.jsx
│   │
│   ├── reducers/
│   │   ├── movieSlice.jsx
│   │   ├── peopleSlice.jsx
│   │   ├── tvSlice.jsx
│   │   └── store.jsx
│
└── utils/
    └── axios.jsx


## Components

### Main Components

- `Home.jsx`: The homepage of the application, displaying trending content, a search bar, and navigation options.
- `Movie.jsx`, `Moviedetails.jsx`: Components for displaying movie details, including trailers, recommendations, and more.
- `Tvshows.jsx`, `TvDetails.jsx`: Components for displaying TV show details.
- `People.jsx`, `Peopledetails.jsx`: Components for displaying detailed information about people in the entertainment industry.
- `Notfound.jsx`: A 404 page for handling unknown routes.

### Partial Components

- `Sidenav.jsx`: A responsive sidebar navigation component.
- `Topnav.jsx`: A top navigation bar for additional navigation options.
- `Header.jsx`: Displays a background image, title, and overview of a selected movie or TV show.
- `HorizontalCards.jsx`: Shows a list of horizontal cards displaying trending content.
- `Dropdown.jsx`: A dropdown menu for filtering trending content by category.
- `Cards.jsx`: A reusable card component used throughout the application.
- `Trailer.jsx`: Displays the trailer of a selected movie or TV show.
- `AboutUs.jsx`: A page that provides information about the company.
- `ContactUs.jsx`: A page with a contact form and social media links for user inquiries.

## State Management

This project uses Redux for state management. The state is managed in the `src/store/` directory, which includes actions and reducers for movies, TV shows, and people.

- Actions: Located in `src/store/actions/`, actions are responsible for making API calls and dispatching data to the reducers.
- Reducers: Located in `src/store/reducers/`, reducers update the application state based on the dispatched actions.

## Getting Started

To get started with this project, clone the repository and install the necessary dependencies.

git https://github.com/ChaitanyaU17/MovieApp.git

cd cgmultiplex

npm install

## Usage

Start the development server:

npm start


Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

