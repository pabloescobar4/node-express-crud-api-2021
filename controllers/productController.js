const Product = require("../model/Product");

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single product
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const product_create = async (req, res) => {
  const product = new Product({
          id: req.body.id,
          author: req.body.author,
          book_name: req.body.book_name,
          pages: req.body.pages,
          published_year: req.body.published_year,
        });
    
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const product_update = async (req, res) => {
    try {
      const product = {
        id: req.body.id,
        author: req.body.author,
        book_name: req.body.book_name,
        pages: req.body.pages,
        published_year: req.body.published_year,
      };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    product_all, 
    product_details, 
    product_create, 
    product_update, 
    product_delete
  }