export function roundAmount(amount: number, decimals?: number): number {
  return Math.round(amount * Math.pow(10, decimals || 2)) / Math.pow(10, decimals || 2);
}

export function formatCurrency(amount: number, locale?: string) {
  if (isNaN(amount)) {
    return null;
  }

  const localeString = locale || 'vi-VN';
  return amount.toLocaleString(localeString, {
    style: 'currency',
    currency: 'VND',
  });
}

export function formatNumber(amount: number, locale?: string) {
  if (isNaN(amount)) {
    return null;
  }

  const localeString = locale || 'vi-VN';
  return amount.toLocaleString(localeString);
}