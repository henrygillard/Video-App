const express = require('express');
const router = express.Router();
const groupCtrl = require('../../controllers/api/group');

// POST /api/group
router.get('/', groupCtrl.index);
router.post("/", groupCtrl.create);

module.exports = router;