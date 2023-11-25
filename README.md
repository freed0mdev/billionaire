# Millionaire Game

## Overview

Millionaire Game is a React web application that implements a basic version of the "Who Wants to Be a Millionaire" game. It allows players to answer a series of questions, accumulate winnings for correct answers, and view their total score at the end.

## Project Setup

## Install dependencies:

   ```bash
   npm install
   ```

## Technologies Used

- React
- Redux Toolkit
- React Router DOM
- TypeScript
- SASS (SCSS)
- ESLint (Airbnb config)
- Husky and lint-staged for pre-commit and pre-push hooks
- GitHub Pages for deployment

## Development Workflow

1. **Start Development Server:**

   ```bash
   npm start
   ```

2. **Commit Changes:**

   Husky will run pre-commit hooks, including linting.

3. **Push Changes:**

   Husky will run pre-push hooks, including unit-testing.

4. **Deploy Changes:**

   ```bash
   npm run deploy
   ```
   Deploy the app to GitHub Pages when ready.