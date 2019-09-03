const express = require('express');

const router = express.Router();

const productControllers = require('../../controllers/product/productControllers');

router.post('/', productControllers.create_product);
router.patch('/:productId', productControllers.update_product);
router.get('/', productControllers.get_all_products);
router.delete('/:productId', productControllers.delete_product);
module.exports = router;