import { Engine } from "./core/Engine";

export default class TwoDRender {
  public Engine: typeof Engine;
  constructor() {
    this.Engine = Engine;
  }
}
