"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";
import QuantitySelector from "./QuantitySelector";

const sampleReviews = [
  { name: "Alex M.", rating: 5, comment: "Exactly as described, great quality for the price." },
  { name: "Priya S.", rating: 4, comment: "Good product, delivery was quick." },
];

export default function ProductDetail({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="mt-2">
            <StarRating rating={product.rating} />
          </div>
          <p className="mt-4 text-2xl font-semibold text-gray-900">
            ${product.price}
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">{product.description}</p>

          <p className="mt-4 text-sm text-gray-500">
            Category <span className="capitalize text-gray-800">{product.category}</span>
          </p>
          <p className="text-sm text-gray-500">
            Brand <span className="text-gray-800">{product.brand}</span>
          </p>

          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-gray-700">Quantity</p>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark sm:w-auto sm:px-10"
          >
            {added ? "Added!" : "Add to Cart"}
          </button>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
            <div className="mt-4 space-y-4">
              {sampleReviews.map((review) => (
                <div key={review.name} className="rounded-md border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{review.name}</p>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
