export const calcSale = (saleVal: number, originalPrice: number) => {
  const sale = originalPrice * (saleVal / 100);
  const remainder = originalPrice - sale;
  return remainder;
};
