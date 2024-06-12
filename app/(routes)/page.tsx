import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = () => {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={{}} />
      </div>
    </Container>
  );
};

export default HomePage;
