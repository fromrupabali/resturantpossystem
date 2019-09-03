const express = require('express');

const router = express.Router();

const supplierControllers = require('../../controllers/suppliers/supplierControllers');

router.post('/', supplierControllers.createSupplier);
router.delete('/:supplierId', supplierControllers.deleteSupplier);
router.patch('/:supplierId', supplierControllers.updateSupplier);
router.get('/:storeId', supplierControllers.get_all_supplier);

module.exports = router;