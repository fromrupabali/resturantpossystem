const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const keys = require('./api/config/keys');
const companyRoutes = require('./api/routes/company/company');
const customerRoutes = require('./api/routes/customers/customers');
const waiterRoutes = require('./api/routes/waiter/waiter');
const supplierRoutes = require('./api/routes/supplier/supplier');
const storeRoutes = require('./api/routes/store/store');
const expenceRoutes = require('./api/routes/expence/expence');
const productRoutes = require('./api/routes/product/product');

mongoose.connect(keys.mongoURI);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/company', companyRoutes);
app.use('/customer', customerRoutes);
app.use('/waiter', waiterRoutes);
app.use('/supplier', supplierRoutes);
app.use('/store', storeRoutes);
app.use('/expence', expenceRoutes);
app.use('/product', productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is listenig on port ${port}`));