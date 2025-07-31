export class InputSizeHelper {
  static getFontSize(length: number): string {
    return Math.min(Math.max(1, 10 / Math.sqrt(length)), 10) + 'vw';
  }

  static getWidth(length: number): string {
    return 10 + Math.sqrt(length) * 3 + 'vw';
  }
}
