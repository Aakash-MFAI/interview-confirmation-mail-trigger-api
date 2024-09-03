const express = require('express');
const interviewController = require('../controllers/interviewController');

const router = express.Router();

router.post('/book', interviewController.bookInterview);

module.exports = router;
