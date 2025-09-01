// 通貨（JPY）は小数なしで固定
export const formatYen = (value: number) =>
  new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value);

// 口座番号のマスキング（必要に応じてオフ/オン）
export const maskAccountNumber = (raw: string, mask = true) => {
  if (!mask) return raw;
  const visible = raw.slice(-4);
  return `${"•".repeat(Math.max(0, raw.length - 4))}${visible}`;
};
