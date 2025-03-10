# Trivia Tide

Trivia Tide is an engaging, interactive trivia game application designed to challenge users' knowledge across a wide range of categories. By leveraging an external API, the app delivers a seamless and dynamic trivia experience through an intuitive, user-friendly interface.

## Try It Out

Experience Trivia Tide firsthand by visiting the live site: [Trivia Tide](https://trivia-tide.netlify.app/)

## Features

- **Multiple Categories**: Choose from a variety of trivia categories to test your knowledge.
- **Difficulty Levels**: Select from different difficulty settings to match your skill level.
- **Score Tracking**: Monitor your performance with real-time score updates.
- **User-Friendly Interface**: Enjoy a clean and intuitive design for an optimal gaming experience.

## Technologies Used

Trivia Tide is built with the following technologies:

- **[React](https://reactjs.org/docs/getting-started.html)**: A JavaScript library for building dynamic and responsive user interfaces.
- **[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)**: A modern browser API used to make HTTP requests to retrieve trivia questions from the external API.
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Cascading Style Sheets for styling the application and ensuring a visually appealing design.
- **[Tailwind CSS ](https://tailwindcss.com/docs)**: A utility-first CSS framework for rapidly building custom user interfaces.
- **[React Icons](https://react-icons.github.io/react-icons/)**: A library for including popular icons in your React projects easily.

## Approach Taken

The application is architected using a **component-based approach** with React, promoting modularity, reusability, and maintainability. Key components include:

- **Header**: Displays the app title and navigation options.
- **Question**: Renders trivia questions and answer options.
- **Score**: Tracks and displays the user's current score.

A dedicated **service layer** (`api.js`) handles API requests, separating data-fetching logic from the presentation layer. This ensures cleaner code and easier debugging or updates.

## Live Site

You can access the live version of Trivia Tide here: [Trivia Tide](https://trivia-tide.netlify.app/)

## Usage Instructions

1. Navigate to the live site: [Trivia Tide](https://trivia-tide.netlify.app/).
2. Choose a trivia category and difficulty level from the available options.
3. Begin answering the trivia questions presented on the screen.
4. Track your progress and score as you proceed through the game.

## TODO

- **Progress Saving**: Save user score.
- **True/false questions**: True and false quiz not supported yet
- **Timer**: add a time for each question.

## API Usage

Trivia Tide integrates with the [Open Trivia Database API](https://opentdb.com/api_config.php), a free and open-source API providing a wide range of trivia questions across multiple categories and difficulty levels.

## Project Structure

The project is organized as follows for clarity and maintainability:

```
trivia-tide/
├── src/
│   ├── components/
│   │   ├── Header.js       # Renders the app header
│   │   ├── Question.js     # Displays trivia questions and answers
│   │   ├── Score.js        # Tracks and displays the user's score
│   │   └── Timer.js        # Manages the countdown timer for each question
│   ├── services/
│   │   └── api.js          # Handles API requests to fetch trivia data
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point for React
│   └── styles.css          # Global CSS styles
├── public/
│   └── index.html          # HTML template
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```
