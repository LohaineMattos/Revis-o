const express = require('express');
const router = express.Router();

const task = require('./controller/controller_tasks');

// router.post('/task', task.create);
router.post('/task', task.create)
router.get('/task',task.read);
router.delete('/task/:id',task.deletar);

module.exports = router;