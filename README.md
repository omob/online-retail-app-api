# Online Retail App API
API Endpoint for the project at  <a href="https://github.com/omob/online-retail-app" target="_blank" title="Go to App repo">Online Retail Store Repository</a>

## Installation
Create a `.env` file at the root folder of the application and populate with the information below. See sample data in `config/default.json` ``(Ensure to replace the data here with the correct data)``. These fields are needed to run the application.

```
db = MONGO_DB_URL
email_user = **********
email_pass = **********
email_host = **********
admin_email = **********
PAYSTACK_PUBLIC_KEY = pk_test_****************************************
PAYSTACK_SECRET_KEY = sk_test_****************************************
jwtPrivateKey = bbfbb84b8b67aaaa76114401ccc53f56e99d699fa6cegba3e7ce4b20d70ce02b
```

Install the dependencies and devDependencies and start the server.

```sh
cd online-retail-app-api
npm i
npm run start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Happy Coding!
