# courses-serve
implementing a back-end API to serve courses. This API will be responsible for handling requests from the front-end application, retrieving course information from MongoDB, and returning the relevant data in a standardized format.

Setup flow -


Make sure you are in project directory. 

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

In one-line commend to run the project through docker container is -
```
docker compose up
```

else you can run it through manual setup like below steps - 

to populate the exiting course data which in `courses.json`, you need to run command -
```
npm run set
```
Message you could see - `Collection: courses, Successfully added.`
That means `courses` mongoDB collection been created and data also populated from `courses.json` to `courses` collection

If you wanted to test the API, is working fine or not. you need to run command
Before run the test command make sure all courses-id and chapter-id mapped well
```
npm test
```

to run the code follow the below command -
```
npm start
```
now you can see code is running on port `3000` with the log message - `Server is running on port: 3000`