export const getFontSize = (val: string): string =>
  Math.min(Math.max(1, 10 / Math.sqrt(val.length)), 10) + 'vw';
export const getWidth = (val: string): string =>
  10 + Math.sqrt(val.length) * 3 + 'vw';
