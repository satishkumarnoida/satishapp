import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mb-4"
              />

              <h2 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-auto">
                <p className="text-lg font-bold text-purple-600 mb-3">
                  ₹ {Math.round(item.price * 80)}
                </p>
                <Link to={`/product/${item.id}`}>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  View Details
               </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductListPage;
