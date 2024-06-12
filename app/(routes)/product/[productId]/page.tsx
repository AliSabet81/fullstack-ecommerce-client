import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import Container from "@/components/ui/container";
import { FC } from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <div>Gallery</div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:my-0">
              {/* Info */}
              Info
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
