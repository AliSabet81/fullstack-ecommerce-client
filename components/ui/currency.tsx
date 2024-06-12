import React, { FC } from "react";

export const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
