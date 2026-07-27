"use client";

import { Minus, Plus } from "lucide-react";

type Props = {
  quantity: number;
  onChange: (quantity: number) => void;
};

export default function QuantitySelector({ quantity, onChange }: Props) {
  return (
    <div className="inline-flex items-center rounded-md border border-gray-300">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-100"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-10 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-100"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
