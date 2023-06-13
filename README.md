# courses-serve
implementing a back-end API to serve courses. This API will be responsible for handling requests from the front-end application, retrieving course information from MongoDB, and returning the relevant data in a standardized format.



To create an env file, pass command with in repo directory - 
```bash
touch .env
```

create database call `kimo_db` if not exist

write in `.env` file 
```
DB_URI=mongodb://127.0.0.1/kimo_db
DB_USERNAME=
DB_PASSWORD=
```

to run the code follow the below command -
```
node server.js
```
now you can see code is running on port `3000` with the log message - `Server listening on port 3000`