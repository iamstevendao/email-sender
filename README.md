## Email sender

#### [Demo](https://email-sender-challenge.netlify.com/)

## Technology stack

- Client: Vue.
- Server: Express.
- Email providers: [SendGrid](https://sendgrid.com/docs/API_Reference/api_v3.html), [Sparkpost](https://developers.sparkpost.com/api/transmissions/#transmissions-post-send-inline-content).

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

  - Create a `.env` file with the `API_KEY` of SendGrid and Sparkpost (use `.sample.env` as a sample)

  - Run scripts

  ```bash
    cd server
    npm run dev # Default port 4000
  ```

3. Open browser `http://localhost:8080/`

## Testing

#### Client:
  - Unit tests (Jest):

    `npm run test:unit`

  - E2E tests (Cypress):

    `npm run test:e2e`

#### Server:
  - API tests (Newman):

    `npm run test`


## API

* **URL:** `/` 

  Demo URL: `https://email-sender-challenge.herokuapp.com/`

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
