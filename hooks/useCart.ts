import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === data.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
          return toast.success("Increased item quantity.");
        }

        set({ items: [...currentItems, { ...data, quantity: 1 }] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item removed from the cart.");
      },
      decrementItem: (id: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);

        if (existingItem) {
          if (existingItem.quantity > 1) {
            set({
              items: currentItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              ),
            });
            toast.success("Decreased item quantity.");
          } else {
            set({ items: currentItems.filter((item) => item.id !== id) });
            toast.success("Item removed from the cart.");
          }
        }
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("All items removed from the cart.");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
