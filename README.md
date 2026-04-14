# Irfaan Portfolio

A personal portfolio built with React and a terminal-style interactive UI. The app showcases an "About Me" section, Projects, Experience, and Skills through typed terminal output and command navigation.

## Features

- Interactive terminal interface with typed output
- Built-in commands: `about`, `projects`, `experience`, `skills`, `help`, and `clear`
- Project gallery with dynamic cards and fail-safe rendering
- Responsive design with an accessible keyboard-driven experience
- Uses React hooks, functional components, and a lightweight typewriter effect

## Project Structure

- `src/App.js` — main layout and sidebar integration
- `src/views/MainPage.js` — terminal UI, command handling, and page state
- `src/components/ProjectsGallery.js` — renders the projects section
- `src/components/ProjectCard.js` — individual project card visuals
- `src/components/UseTypewriter.js` — typed output hook with queue safety
- `src/ProjectData.js` — project metadata and links

## Available Scripts

In the project directory, run:

### `npm start`

Starts the development server.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm test`

Launches the test runner.

### `npm run eject`

Ejects the Create React App build configuration. This is permanent.

### `npm run deploy`

Builds and deploys the app using `gh-pages`.

## Deployment

This project is configured to deploy to GitHub Pages using the `homepage` field in `package.json`:

`https://irfaanbraaf.github.io/irfaan-portfolio`

Run:

\`\`\`bash
npm run deploy
\`\`\`

## Notes

- The app is currently set up as a static portfolio. The terminal commands are simulated and control page state locally.
- Project cards support missing or protected links (`NDA Protected` or `Private Repository`).
- Command output is safely queued and rendered with fallback handling to prevent incomplete content.

## Learn More

This project was created with Create React App. For more information on CRA usage and configuration, see:

- https://create-react-app.dev/
- https://reactjs.org