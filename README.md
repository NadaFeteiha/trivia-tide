# Trivia Tide

Trivia Tide is a fun and engaging trivia game application that allows users to test their knowledge across various categories. The application fetches trivia questions from an external API and presents them to the users in a user-friendly interface.

## Features

- Multiple categories of trivia questions
- Different difficulty levels
- Score tracking
- User-friendly interface

## API Usage

Trivia Tide uses the [Open Trivia Database API](https://opentdb.com/api_config.php) to fetch trivia questions.

## Project Structure

The project structure is organized as follows:

```
trivia-tide/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Question.js
│   │   └── Score.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── public/
│   └── index.html
├── package.json
└── README.md
```
