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

to populate the exiting course data which in `courses.json`, you need to run command -
```
node seeder/courses.js
```
Message you could see - `Collection: courses, Successfully added.`
That means `courses` mongoDB collection been created and data also populated from `courses.json` to `courses` collection

If you wanted to test the API, is working fine or not. you need to run command
```
npx mocha test/courseTest.js 
```
and
```
npx mocha test/chapterTest.js 
```

to run the code follow the below command -
```
node server.js
```
now you can see code is running on port `3000` with the log message - `Server is running on port: 3000`