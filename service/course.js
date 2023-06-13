const { courseModel } = require('../mongoModels');

/**
 * Fetch Courses from Course collection, or can filter on domain [optional]
 *  */
const getCourses = async ({ sort_by, qFilter }) => {
    let sort = {};
    if (sort_by === 'date') {
        sort = { date: -1 }; // descending by date
    } else if (sort_by === 'rating') {
        sort = { 'chapters.rating': -1 }; // descending by rating within chapters
    } else {
        sort = { [sort_by]: 1 };
    }
    const fetchedCourses = await courseModel.find(qFilter)
        .sort(sort)
        .lean();
    return fetchedCourses;
};

/**
 * Fetch Course by course-id from Course collection
 *  */
const getCourseById = async ({ courseId }) => {
    const courseObject = await courseModel.findById(courseId).lean();
    if (!courseObject)
        throw new Error('Course not found', { cause: 1 });

    return courseObject;
};

/**
 * Fetch Chapter list based on specific course using course-id 
 * from Course collection
 *  */
const getChapterList = async ({ courseId }) => {
    const chapterObject = await courseModel.findOne(
        {
            _id: courseId
        }
    ).lean();

    if (chapterObject && chapterObject.chapters.length > 0) {
        return chapterObject.chapters;
    } else {
        throw new Error('Chapter not found', { cause: 1 });
    }
};

/**
 * Fetch Chapter information by using chapter-id based on specific course using course-id 
 * from Course collection
 *  */
const getChapterInfo = async ({ courseId, chapterId }) => {
    const chapterObject = await courseModel.findOne(
        {
            _id: courseId,
            'chapters._id': chapterId
        },
        { chapters: { $elemMatch: { _id: chapterId } } }
    ).lean();

    if (chapterObject && chapterObject.chapters.length > 0) {
        return chapterObject.chapters[0];
    } else {
        throw new Error('Chapter not found', { cause: 1 });
    }
};

/**
 * Update(increment) the rating of Chapter by using chapter-id based on specific course using course-id 
 * from Course collection
 *  */
const rateToChapter = async ({ courseId, chapterId, rating }) => {
    const result = await courseModel.updateOne(
        { _id: courseId, 'chapters._id': chapterId },
        { $inc: { 'chapters.$.rating': rating } }
    );

    if (result.matchedCount < 0) {
        throw new Error('Chapter not found', { cause: 1 });
    }
    const chapterObject = await getChapterInfo({ courseId, chapterId });
    return chapterObject;
};

module.exports = {
    getCourses,
    getCourseById,
    getChapterInfo,
    rateToChapter,
    getChapterList,
};