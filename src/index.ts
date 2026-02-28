import { Engine } from "./core/Engine";
import { Renderer } from "./core/Renderer";

export default class TwoDRender {
  public Engine: typeof Engine;
  public Renderer: typeof Renderer
  constructor() {
    this.Engine = Engine;
    this.Renderer = Renderer
  }
}
new Engine({resize: true})