const path = require('path');

const appPath = path.resolve(process.cwd());

let envFilePath = process.env.envFilePath || path.resolve(appPath, '.env');
if (envFilePath.startsWith('/') === false) {
    // if it is relative path then resolve it to absolute path
    envFilePath = path.resolve(process.cwd(), envFilePath);
}
require('dotenv').config({ path: envFilePath });

const { courseModel } = require('../mongoModels');

const courseJson = require('./courses.json');

const seederExecution = async () => {
    // clean previous entries
    await courseModel.deleteMany({});

    // create course collection
    courseJson.map(async (d) => {
        d.title = d.name;
        delete d.name;
        const newCourse = new courseModel(d)
        return await newCourse.save();
    });
    return `Collection: ${courseModel.collection.modelName}, Successfully added.`
};

seederExecution()
    .then((response) => {
        console.log(response)
        process.exit(1);
    })
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    });