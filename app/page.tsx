import { Suspense } from "react";
import ShopContent from "@/components/ShopContent";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
