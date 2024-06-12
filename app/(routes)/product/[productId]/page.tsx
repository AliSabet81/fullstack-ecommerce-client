import getProducts from "@/actions/getProducts";
import { FC } from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const product = {};
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return <div>ProductPage</div>;
};

export default ProductPage;
