# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.17.0 recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)

  If you want to run the application in containerize way:

- [Docker](https://www.docker.com/)
- [Compose plugin](https://docs.docker.com/compose/install/linux/)

### Installation

Clone the repository:

```bash
git clone https://github.com/mahmudulmurad/book_shelf.git
cd book_shelf
```

### Development

Run the application locally:

```bash
npm install
npm start
```

### Run Containerize way

Build and run the Docker container:

```bash
docker-compose up -d
```

### Access the application

[URL] [http://localhost:3000](http://localhost:3000).

### Environment Variables

- `REACT_APP_DATA_URL`: Backend API URL (default: `https://gutendex.com/books/`)

### Usage

- Stop the application:

  ```bash
  docker-compose down
  ```

- Clean up volumes:

  ```bash
  docker-compose down -v
  ```

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# book_shelf
