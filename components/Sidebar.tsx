"use client";

import { Category, categories, brands, PRICE_MIN, PRICE_MAX } from "@/data/products";

type Props = {
  category: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  brand: string | "all";
  onBrandChange: (brand: string | "all") => void;
};

export default function Sidebar({
  category,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  brand,
  onBrandChange,
}: Props) {
  return (
    <aside className="w-full shrink-0 space-y-4 lg:w-64">
      <div className="bg-navy-panel rounded-lg p-5 text-white shadow-md">
        <h2 className="text-lg font-bold">Filters</h2>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-white/90">Category</h3>
          <div className="mt-2 space-y-1">
            {categories.map((c) => (
              <label
                key={c.value}
                className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 text-sm text-white/80 transition-colors duration-150 hover:bg-white/10"
              >
                <input
                  type="radio"
                  name="category"
                  checked={category === c.value}
                  onChange={() => onCategoryChange(c.value)}
                  className="h-3.5 w-3.5 accent-white"
                />
                {c.label}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-semibold text-white/90">Price</h3>
          <input
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={10}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="mt-3 w-full"
          />
          <div className="mt-1 flex justify-between text-xs text-white/70">
            <span>{PRICE_MIN}</span>
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-black/5 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
        <h3 className="text-sm font-semibold text-gray-900">Brand</h3>
        <div className="mt-2 space-y-1">
          <label className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 text-sm text-gray-600 transition-colors duration-150 hover:bg-gray-50">
            <input
              type="radio"
              name="brand"
              checked={brand === "all"}
              onChange={() => onBrandChange("all")}
              className="h-3.5 w-3.5 accent-[var(--color-accent)]"
            />
            All
          </label>
          {brands.map((b) => (
            <label
              key={b}
              className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 text-sm text-gray-600 transition-colors duration-150 hover:bg-gray-50"
            >
              <input
                type="radio"
                name="brand"
                checked={brand === b}
                onChange={() => onBrandChange(b)}
                className="h-3.5 w-3.5 accent-[var(--color-accent)]"
              />
              {b}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
