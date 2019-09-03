const express = require('express');

const router = express.Router();

const customerControllers = require('../../controllers/customer/customerControllers');

router.post('/', customerControllers.create_customer);
router.get('/:storeId', customerControllers.get_all_customers);
router.delete('/:customerId', customerControllers.delete_customer);
router.patch('/:customerId', customerControllers.update_customer);

module.exports = router;