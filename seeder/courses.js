const path = require('path');

const appPath = path.resolve(process.cwd());

let envFilePath = process.env.envFilePath || path.resolve(appPath, '.env');
if (envFilePath.startsWith('/') === false) {
    // if it is relative path then resolve it to absolute path
    envFilePath = path.resolve(process.cwd(), envFilePath);
}
require('dotenv').config({ path: envFilePath });

const { courseModel } = require('../mongoModels');
console.log(`Model: ${courseModel.collection.modelName}`)
const courseJson = require('./courses.json');

(async () => {
    // clean previous entries
    await courseModel.deleteMany({});

    // create course collection
    courseJson.map(async (d) => {
        const newCourse = new courseModel(d)
        return await newCourse.save();
    });

})();

console.log('Seeder successfully added.');