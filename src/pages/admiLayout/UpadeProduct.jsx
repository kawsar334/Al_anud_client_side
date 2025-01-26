import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const UpdateProduct = ({ userId, productId }) => {
    const location = useLocation();
    const product = location?.state?.product
  const [formData, setFormData] = useState({
      name: product?.name,
      description: product?.description,
    price: product?.price,
      category: product?.category,
    stock: product?.stock,
    image:product?.image,
  });
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
console.log(formData.category)

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.put(
        `http://localhost:5000/api/product/${product?._id}`,
        formData,
        {
          withCredentials: true,
        }
      );
        console.log(response?.data)
      alert('Product updated successfully!');
      setLoading(false);
    } catch (err) {
      console.log(err)
      setError('Failed to update product');
      setLoading(false);
    }
  };

  return (
   
      <div className="w-full md:w-[60%] mx-auto flex flex-col items-center bg-white shadow-lg rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-700">Update Product</h2>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {product?.image && (
              <img
                  src={product.image}
                  alt="Product"
                  className="w-24 h-24 rounded-full object-cover border border-gray-300"
              />
          )}

          <form onSubmit={handleSubmit} className="w-full space-y-3">
             <div className='flex  justify-start items-center gap-3'>
                  <div className='w-[50%]'>
                      <label className="block text-gray-600 text-sm font-medium mb-1">Product Name</label>
                      <input
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring focus:ring-indigo-200"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <div className='w-[50%]'>
                      <label className="block text-gray-600 text-sm font-medium mb-1">Description</label>
                      <textarea
                          className="w-full border border-gray-300 rounded px-3  text-gray-800 focus:ring focus:ring-indigo-200"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          minLength="10"
                      />
                  </div>
             </div>

              <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Price</label>
                  <input
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring focus:ring-indigo-200"
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                      min="0"
                  />
              </div>

              <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Category</label>
                  <select
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring focus:ring-indigo-200"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                  >
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
            <option value="Meat">Meat</option>
            <option value="Seafood">Seafood</option>
            <option value="Cereals">Cereals</option>
            <option value="Rice & Grains">Rice & Grains</option>
            <option value="Spices & Condiments">Spices & Condiments</option>
            <option value="Oils & Ghee">Oils & Ghee</option>
            <option value="Packaged Foods">Packaged Foods</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Cleaning Supplies">Cleaning Supplies</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Baby Care">Baby Care</option>
            <option value="Pet Care">Pet Care</option>
            <option value="Baking Essentials">Baking Essentials</option>
            <option value="Health Supplements">Health Supplements</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>

                  </select>
              </div>

              <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Stock</label>
                  <input
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring focus:ring-indigo-200"
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                      min="0"
                  />
              </div>

              <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">Product Image URL</label>
                  <input
                      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring focus:ring-indigo-200"
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                  />
              </div>

              <div>
                  <button
                      type="submit"
                      disabled={loading}
                      className={`w-full px-4 py-2 text-white rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                          }`}
                  >
                      {loading ? 'Updating...' : 'Update Product'}
                  </button>
              </div>
          </form>
      </div>

  );
};

export default UpdateProduct;
