export function formatPrice(value) {
  return `R$ ${value
    .toFixed(2) // casas decimais
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
}
