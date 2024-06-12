import { Product } from "@/types";
import React, { FC } from "react";

interface PropductListProps {
  title: string;
  items: Product[];
}

const ProductList: FC<PropductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
    </div>
  );
};

export default ProductList;
