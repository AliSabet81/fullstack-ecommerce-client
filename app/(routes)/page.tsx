import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/billboard";
import ProductList from "@/components/productList";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("d89eb6d4-d6e3-4835-8bcf-3d670b000fb1");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 ox-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>{" "}
      </div>
    </Container>
  );
};

export default HomePage;
