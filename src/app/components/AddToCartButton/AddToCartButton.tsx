"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAdd = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <button
      className="btn btn-outline-dark px-4 py-2 fw-semibold"
      onClick={handleAdd}
    >
      Add to Cart
    </button>
  );
}