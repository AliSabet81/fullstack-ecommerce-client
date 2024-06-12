import { Product } from "@/types";
import React, { FC } from "react";
import NoResults from "./ui/noResults";
import ProductCard from "./ui/productCard";

interface PropductListProps {
  title: string;
  items: Product[];
}

const ProductList: FC<PropductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
