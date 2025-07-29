// utils/InputSizeHelper.ts
export class InputSizeHelper {
  static getFontSize(value: string): string {
    return Math.min(Math.max(1, 10 / Math.sqrt(value.length)), 10) + 'vw';
  }

  static getWidth(value: string): string {
    return 10 + Math.sqrt(value.length) * 3 + 'vw';
  }
}
