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

(async () => {
    // clean previous entries
    await courseModel.deleteMany({});

    // create course collection
    const promises = courseJson.map(async (d) => {
        d.title = d.name;
        delete d.name;
        
        const newCourse = new courseModel(d)
        return await newCourse.save();
    });
    await Promise.all(promises);
    console.log(`Collection: '${courseModel.collection.modelName}', Successfully added.`)
    setTimeout(process.exit(0));
})();
