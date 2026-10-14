export const base = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
export const path = (slug = '') => `${base}${slug ? `${slug.replace(/^\/+|\/+$/g, '')}/` : ''}`;
export const price = (value: number) => new Intl.NumberFormat('en-GB', {
  style: 'currency', currency: 'GBP', maximumFractionDigits: 0,
}).format(value);
