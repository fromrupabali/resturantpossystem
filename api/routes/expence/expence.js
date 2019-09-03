const express = require('express');

const router = express.Router();

const expenceControllers = require('../../controllers/expence/expenceControllers');

router.post('/', expenceControllers.create_expence);
router.get('/:storeId', expenceControllers.get_all_expence)
router.delete('/:expenceId', expenceControllers.delete_expence);
router.patch('/:expenceId', expenceControllers.update_expence);

module.exports = router;