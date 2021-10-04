const express = require('express');
const router = express.Router();
const groupCtrl = require('../../controllers/api/group');

// POST /api/group
router.get('/', groupCtrl.index);
router.get("/:id", groupCtrl.detail);
router.get("/:id/:yId", groupCtrl.yearDetail);
router.post("/", groupCtrl.create);

module.exports = router;