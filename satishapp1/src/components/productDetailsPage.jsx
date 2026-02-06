import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 text-xl mb-4">Product not found</p>
        <Link to="/" className="text-purple-600 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

        <Link to="/" className="text-purple-600 mb-6 inline-block">
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          
          <img
            src={product.image}
            alt={product.title}
            className="h-80 mx-auto object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-gray-600 mb-4">
              {product.description}
            </p>

            <p className="font-semibold mb-2">
              Category: {product.category}
            </p>

            <p className="text-2xl text-purple-600 font-bold mb-6">
              ₹ {Math.round(product.price * 80)}
            </p>

            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded">
                Add to Cart
              </button>
              <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
