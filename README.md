# play-with-mysql2
Testing mysql2 library

### Prerequisites

- Docker for Mac (Uses docker-compose for setup MySQL server)
- Node.js

### How to develop

```
# Start MySQL server in background.
docker-compose up -d

# Install dependencies
npm i

# Transpile TypeScript into CommonJS
npm run build

# Run script by node
npm start
```
