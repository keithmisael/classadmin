// @desc Get all classes
// @route GET /api/v1/classes
// @access Public
exports.getClasses = (req,res,next) => {
    res.status(200).json({success:true, msg: 'Show all classes', hello: req.hello})
   
}

// @desc Get single classes
// @route GET /api/v1/classes/:id
// @access Public
exports.getClass = (req,res,next) => {
    res.status(200).json({success:true, msg: 'Get single class'})
}

// @desc Create new class
// @route POST /api/v1/classes/:id
// @access Private
exports.createClass = (req,res,next) => {
    res.status(200).json({success:true, msg: 'Create new class'})
}

// @desc Update class
// @route PUT /api/v1/classes/:id
// @access Private
exports.updateClass = (req,res,next) => {
    res.status(200).json({success:true, msg: `Update class ${req.params.id}`})
}

// @desc Delete class
// @route DELETE /api/v1/classes/:id
// @access Private
exports.deleteClass = (req,res,next) => {
    res.status(200).json({success:true, msg: 'Delete class'})
}


