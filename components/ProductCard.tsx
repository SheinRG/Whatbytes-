"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  if (product.featured) {
    return (
      <div className="group col-span-1 flex flex-col overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg sm:col-span-2 sm:flex-row">
        <Link
          href={`/product/${product.id}`}
          className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 640px) 256px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-1 flex-col p-5">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
          </Link>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            ${product.price}
          </p>
          <div className="mt-2">
            <StarRating rating={product.rating} />
          </div>
          <p className="mt-3 text-sm text-gray-500">{product.description}</p>
          <p className="mt-3 text-sm text-gray-500">
            Category
            <br />
            <span className="capitalize text-gray-700">{product.category}</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-accent-panel mt-4 w-full max-w-xs rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:brightness-110 hover:shadow active:scale-[0.98] sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-square w-full overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900">{product.title}</h3>
        </Link>
        <p className="mt-1 font-semibold text-gray-900">${product.price}</p>
        {product.rating != null && (
          <div className="mt-1">
            <StarRating rating={product.rating} />
          </div>
        )}
        <button
          onClick={() => addToCart(product)}
          className="bg-accent-panel mt-3 w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:brightness-110 hover:shadow active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
