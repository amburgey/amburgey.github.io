## Setup

1. Install [Node.js](https://nodejs.org/en/download/)
2. Download project dependencies by running `npm install` from the terminal

## Development

Run `npm run dev` from the terminal and access the site at [http://localhost:3000](http://localhost:3000)

Site data lives in `lib/content`. If you edit the site within VS Code, it'll give you automatic warnings and errors if the data is formatted incorrectly.

## Deploy

This site is configured to deploy to Github Pages at [amburgey.github.io](https://amburgey.github.io). Pushing to the main branch will run the workflow in `.github/workflows/deploy.yml` which builds the site and pushes the content to a special `gh-pages` branch. Do not manually modify this branch!
