import getBillboard from "@/actions/getBillboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("d89eb6d4-d6e3-4835-8bcf-3d670b000fb1");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
