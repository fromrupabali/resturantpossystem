const express = require('express');

const router = express.Router();

const waiterControllers = require('../../controllers/waiter/waiterControllers');

router.post('/', waiterControllers.createWaiter);
router.get('/:storeId', waiterControllers.get_all_waiters);
router.delete('/:waiterId', waiterControllers.delete_waiter);
router.patch('/:waiterId', waiterControllers.update_waiter)
module.exports = router;