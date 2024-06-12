import { Product } from "@/types";
import React, { FC } from "react";
import NoResults from "./ui/noResults";

interface PropductListProps {
  title: string;
  items: Product[];
}

const ProductList: FC<PropductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
    </div>
  );
};

export default ProductList;
