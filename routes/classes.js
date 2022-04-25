const express = require('express');
const { getClasses,getClass,createClass,updateClass, deleteClass } = require('../controllers/classes')
const router = express.Router();


router.route('/').get(getClasses).post(createClass);

router.route('/:id').get(getClass).put(updateClass).delete(deleteClass);

module.exports = router;