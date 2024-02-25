export const priceFormatter = (price: number): string => {
  const formatter = new Intl.NumberFormat(undefined, { useGrouping: true });
  return `${formatter.format(price)} ₽`;
};
