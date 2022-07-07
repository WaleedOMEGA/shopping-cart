const product = require('../models/productModel');
const express = require('express');

const Router = express.Router();

Router.get('/api/products', async (req, res) => {
	const products = await product.find();
	res.send(products);
});

Router.post('/api/products', async (req, res) => {
	const newProduct = new product(req.body);
	const saveProduct = await newProduct.save();
	res.send(saveProduct);
});

Router.delete('/api/products/:id', async (req, res) => {
	const deletedProduct = await product.findByIdAndDelete(req.params.id);
	res.send(deletedProduct);
});

module.exports = Router;
