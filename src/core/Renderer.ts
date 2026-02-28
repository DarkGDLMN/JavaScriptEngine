export type Options = {
    resize: boolean;
};

export class Renderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext | null;
    private resizeObserver: ResizeObserver | null = null;

    constructor(options: Options) {
        this.GlobalStyles();
        this.canvas = document.createElement("canvas");
        this.gl = this.canvas.getContext("webgl2");
        
        this.updateSize();
        document.body.appendChild(this.canvas);

        if (options.resize) {
            this.initResizeObserver();
        }
    }

    
    private GlobalStyles() {
        const style = document.documentElement.style;
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.overflow = "hidden";
        style.overflow = "hidden";
        style.height = "100%";
        style.width = "100%";
        document.body.style.webkitTapHighlightColor = "transparent";
    }
    private updateSize() {
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.canvas.width = Math.floor(width * dpr);
        this.canvas.height = Math.floor(height * dpr);

        this.canvas.style.width = `${width}px`;
        this.canvas.style.height = `${height}px`;

        if (this.gl) {
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    private initResizeObserver() {
        this.resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => this.updateSize());
        });
        this.resizeObserver.observe(document.documentElement);
    }
    public destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        this.canvas.remove();
    }
}
