export const formatPrice = (price: string | null) => {
  const numericPrice = Number(price) || 0;
  return numericPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
