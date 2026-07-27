"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products, Category, PRICE_MAX } from "@/data/products";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

export default function ShopContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = (searchParams.get("category") as Category | "all") || "all";
  const brand = searchParams.get("brand") || "all";
  const search = searchParams.get("search") || "";
  const maxPrice = Number(searchParams.get("price") ?? PRICE_MAX);

  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    router.replace(`/?${params.toString()}`, { scroll: false });
  };

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (category !== "all" && product.category !== category) return false;
      if (brand !== "all" && product.brand !== brand) return false;
      if (product.price > maxPrice) return false;
      if (search && !product.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    });
  }, [category, brand, maxPrice, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <h1 className="mb-5 text-2xl font-bold text-gray-900">Product Listing</h1>
      <div className="flex flex-col gap-6 lg:flex-row">
        <Sidebar
          category={category}
          onCategoryChange={(value) =>
            updateParams({ category: value === "all" ? null : value })
          }
          maxPrice={maxPrice}
          onMaxPriceChange={(value) =>
            updateParams({ price: value === PRICE_MAX ? null : String(value) })
          }
          brand={brand}
          onBrandChange={(value) =>
            updateParams({ brand: value === "all" ? null : value })
          }
        />
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
