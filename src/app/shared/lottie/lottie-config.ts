export interface ILottieConfig {
  readonly id?: number;
  path: string;
  width?: string;
  max_w?: string;
  min_w?: string;
  opacity?: string;
  height?: string;
  loop?: boolean;
}
export class LottieConfigModel {
  config: ILottieConfig;
  constructor(config: ILottieConfig) {
    this.config = config;
  }
  get maxWidth() {
    return this.config.max_w;
  }
  get minWidth() {
    return this.config.min_w;
  }
  get width() {
    return this.config.width;
  }
  get opacity() {
    return this.config.opacity;
  }
  get height() {
    return this.config.opacity;
  }
}
