import { Renderer, type Options } from "./Renderer";

export class Engine {
    private Renderer: Renderer
    constructor(options: Options) {
        this.Renderer = new Renderer(options)
    }
}