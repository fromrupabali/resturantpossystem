const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest:'/uploads/'})

const companyControllers = require('../../controllers/company/companyControllers');

router.post('/', upload.single('productImage'),companyControllers.createCompany);
router.get('/', companyControllers.get_all_company);
router.delete('/:companyId', companyControllers.delete_company);
router.patch('/:companyId', companyControllers.update_company);

module.exports = router;