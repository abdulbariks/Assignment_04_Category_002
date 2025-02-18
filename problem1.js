function calculateVAT(price) {
  if (typeof price !== "number" || price < 0) {
    return "Invalid";
  }
  const vatAmount = (price * 7.5) / 100;
  return vatAmount;
}
console.log(calculateVAT(1500));
console.log(calculateVAT(200));
console.log(calculateVAT(999));
console.log(calculateVAT(-500));
console.log(calculateVAT("101"));
console.log(calculateVAT("foo"));
