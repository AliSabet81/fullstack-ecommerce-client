"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/useCart";
import { useState, useEffect } from "react";
import CartItem from "./components/cartItem";

const CartPage = () => {
  const cart = useCart();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <div className="text-neutral-500">No items added to cart</div>
              )}
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
