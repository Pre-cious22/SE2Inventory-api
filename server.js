require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');
const supplierRoutes = require('./routes/suppliers');
const orderRoutes = require('./routes/orders');
const errorHandler = require('./middleware/errorHandler');


const app = express();
const PORT = process.env.PORT || 5000;


// Connect DB
connectDB();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => res.send('Inventory API is running'));


app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/orders', orderRoutes);


app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));