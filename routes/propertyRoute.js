const express = require("express");
const upload = require("../middleware/upload")

const {
    createProperty,
    getAllProperty,
    getPropertyById,
    updateProperty,
    deleteProperty,
} = require('../controller/propertyControl');

const router = express.Router();

router.route('/').post(upload.single('photo'),createProperty);
router.route('/').get(getAllProperty);
router.route('/:id').get(getPropertyById);
router.route('/:id').put(updateProperty);
router.route('/:id').delete(deleteProperty);


module.exports = router;