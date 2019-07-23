## Email sender

## Technology stack

- Client: Vue
- Server: Express

## Installation
```bash
  cd client
  npm install
  cd ../server
  npm install
```

## Development

1. Run client:

```bash
  cd client
  npm run dev # Default port 8080
```
2. Run server:

```bash
  cd server
  npm run dev # Default port 4000
```
3. Open browser `http://localhost:8080/`

## Deployment

## API

### Request schema
```js
  {
    // Required
    from: String,
    to: String,
    subject: String,
    // Optional
    content: String,
    cc: String,
    bcc: String
  }
```

### Response schema
```js
  {
    // Required
    success: Boolean,
    // Optional
    errors: Array,
    metadata: Object,
  }
```

made with &#x2764; by [Steven](https://github.com/iamstevendao).
