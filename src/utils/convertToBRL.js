export default function convertToBRL(n) {
  return n.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
