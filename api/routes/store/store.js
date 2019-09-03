const express = require('express');

const router = express.Router();

const storeControllers = require('../../controllers/store/storeControllers');

router.post('/', storeControllers.createStore);
router.get('/:companyId', storeControllers.get_all_store);
router.get('/singleStore/:storeId', storeControllers.get_single_store);
router.delete('/:storeId', storeControllers.delete_store);
router.patch('/:storeId', storeControllers.update_store);

module.exports = router;