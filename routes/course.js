var express = require('express');
var router = express.Router();

const { getCourses, getCourseById, getChapterInfo, rateToChapter, getChapterList } = require('../service/course');

// Endpoint to get a list of all available courses
router.get('/courses', async (req, res) => {
    const { sort_by = 'alphabetical', domain = null } = req.query;

    try {
        const qFilter = domain ? { domain } : {}
        
        const fetchedCourses = await getCourses({ sort_by, qFilter});

        res.json({ data: fetchedCourses });
    } catch (error) {
        if (error.cause == 1)
            res.status(404).json({ error: error.message });
        else{
            console.error('Failed to retrieve course', error);
            res.status(500).json({ error: 'Failed to retrieve course' });
        }
    }
});

// Endpoint to get the course overview
router.get('/courses/:courseId', async (req, res) => {
    const { courseId } = req.params;

    try {
        const course = await getCourseById({ courseId });

        res.json({ data: course });
    } catch (error) {
        if (error.cause == 1)
            res.status(404).json({ error: error.message });
        else{
            console.error('Failed to retrieve course', error);
            res.status(500).json({ error: 'Failed to retrieve course' });
        }
    }
});

// Endpoint to get chapter list from any course
router.get('/courses/:courseId/chapters', async (req, res) => {
    const { courseId } = req.params;

    try {
        const chapter = await getChapterList({ courseId });
        res.json({ data: chapter });
    } catch (error) {
        if (error.cause == 1)
            res.status(404).json({ error: error.message });
        else{
            console.error('Failed to retrieve course', error);
            res.status(500).json({ error: 'Failed to retrieve course' });
        }
    }
});

// Endpoint to get specific chapter information
router.get('/courses/:courseId/chapters/:chapterId', async (req, res) => {
    const { courseId, chapterId } = req.params;

    try {
        const chapter = await getChapterInfo({ courseId, chapterId });
        res.json({ data: chapter });
    } catch (error) {
        if (error.cause == 1)
            res.status(404).json({ error: error.message });
        else{
            console.error('Failed to retrieve course', error);
            res.status(500).json({ error: 'Failed to retrieve course' });
        }
    }
});

// Endpoint to allow users to rate each chapter
router.post('/courses/:courseId/chapters/:chapterId/rate', async (req, res) => {
    const { courseId, chapterId } = req.params;
    let { rating } = req.body;

    if (!rating) {
        res.status(404).json({ error: 'Required parameter rating is missing' });
        return
    }
        

    try {
        rating = parseInt(rating);
        const chapter = await rateToChapter({ courseId, chapterId, rating });
        res.json({ data: chapter });
    } catch (error) {
        if (error.cause == 1)
            res.status(404).json({ error: error.message });
        else{
            console.error('Failed to retrieve course', error);
            res.status(500).json({ error: 'Failed to retrieve course' });
        }
    }
});

module.exports = router;