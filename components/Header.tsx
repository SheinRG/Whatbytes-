"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";
import { useState, FormEvent } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { totalItems } = useCart();
  const [query, setQuery] = useState(searchParams.get("search") ?? "");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set("search", query.trim());
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="bg-navy-panel sticky top-0 z-20 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight">
          Logo
        </Link>

        <form
          onSubmit={handleSearch}
          className="mx-auto flex w-full max-w-md flex-1 items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition focus-within:bg-white/15 focus-within:ring-white/25"
        >
          <Search className="h-4 w-4 shrink-0 text-white/70" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="w-full bg-transparent text-white placeholder-white/60 outline-none"
          />
        </form>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-md bg-[#0a1f42] px-4 py-2 text-sm font-medium transition-colors duration-150 hover:bg-[#0a1a38]"
          >
            <span className="relative">
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-sm">
                  {totalItems}
                </span>
              )}
            </span>
            Cart
          </Link>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors duration-150 hover:bg-white/20">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
