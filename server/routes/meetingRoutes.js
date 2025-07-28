
const express = require('express');
const router = express.Router();
const Meeting = require('../models/Meeting');

router.post('/create', async (req, res) => {
  const meeting = await Meeting.create(req.body);
  res.status(201).json(meeting);
});

router.get('/', async (req, res) => {
  const meetings = await Meeting.find({});
  res.json(meetings);
});

module.exports = router;
