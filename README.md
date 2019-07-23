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

  - Create a `.env` file with the `API_KEY` of SendGrid and Sparkpost (`.sample.env` as a sample)
  - Run script
  ```bash
    cd server
    npm run dev # Default port 4000
  ```

3. Open browser `http://localhost:8080/`

## API

* **URL:** `/`

* **Method:** `POST`

* **Data Params**

  ```js
    {
      // Required
      from: String, // Email address
      to: String, // Email address(es)
      subject: String,
      content: String,
      // Optional
      cc: String, // Email address(es)
      bcc: String, // Email address(es)
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ success : true, metadata: { provider: PROVIDER } }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ success : false, errors: [], metadata: {} }`

* **Sample Call:**

  ```js
    fetch('http://localhost:4000/', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'from@gmail.com',
          to: 'to@gmail.com',
          subject: 'subject',
          content: 'content',
        }),
      })
  ```

## Deployment

1. Change `VUE_APP_API_URL` to the expecting URL of the server
2. Run `sh deploy.sh`
3. Deploy `gh-pages`
4. Deploy `heroku` to a deployment service of choice.

made with &#x2764; by [Steven](https://github.com/iamstevendao).
