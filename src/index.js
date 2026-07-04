const NAMESPACE = "http://www.w3.org/2000/svg";

export class SVGRoot {
    constructor(parent = document.querySelector("body"), w, h, bg) {
        this.width = w;
        this.height = h;
        const svg = document.createElementNS(NAMESPACE, "svg");
        this.element = svg;
        svg.setAttribute("width", w);
        svg.setAttribute("height", h);
        parent.appendChild(svg);
            
        //return svg;
    }
    
    #mapAttr(el, attrs, values) {
        for (var arg in attrs) {
            if (attrs[arg] === "text") continue;
            
            //console.log(attrs[arg], values[arg])
            el.setAttribute(attrs[arg], values[arg] ? values[arg] : "")
        }
    }
    
    updateCanvas(el, attr, value) {
        el.setAttribute(attr, value);
    }
    
    plotLine(x1, y1, x2, y2, stroke, strokeWidth="1") {
        //alert(strokeWidth)
        console.log(arguments)
        const line = document.createElementNS(NAMESPACE, "line");
        const lineArgs = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"]; // add other params
        
        this.#mapAttr(line, lineArgs, arguments);
        this.element.appendChild(line);
        
        return line;
    }
    
   // plotPath()
    
    fillRect(x, y, width, height, fill, stroke, strokeWidth = 1) {
        const rect = document.createElementNS(NAMESPACE, "rect");
        const rectArgs = ["x", "y", "width", "height", "fill", "stroke", "stroke-width"];
    
        //console.log(arguments)
        this.#mapAttr(rect, rectArgs, arguments)
        this.element.appendChild(rect);
        
        return rect;
    }
    
    fillCircle(cx, cy, r, fill, stroke, strokeWidth = "1") {
        const circle = document.createElementNS(NAMESPACE, "circle");
        const circleArgs = ["cx", "cy", "r", "fill", "stroke", "stroke-width"];
        
        this.#mapAttr(circle, circleArgs, arguments);
        this.element.appendChild(circle);
        
        return circle;
    }
    
    fillEllipse(cx, cy, rx, ry, fill, stroke, strokeWidth = "1") {
        const ellipse = document.createElementNS(NAMESPACE, "ellipse");
        const ellipseArgs = ["cx", "cy", "rx", "ry", "fill", "stroke", "stroke-width"];
    
        this.#mapAttr(ellipse, ellipseArgs, arguments);
        this.element.appendChild(ellipse);
        
        return ellipse;
    }
    
    polygon(points, fill, stroke, strokeWidth) {
        const polygon = document.createElementNS(NAMESPACE, "polygon");
        
        this.#mapAttr(polygon, ["points", "fill", "stroke", "stroke-width"], arguments);
        this.element.appendChild(polygon);
        
        return polygon;
    }
    
    polyline(points, fill, stroke, strokeWidth) {
        const polyline = document.createElementNS(NAMESPACE, "polyline");
        
        this.#mapAttr(polyline, ["points", "fill", "stroke", "stroke-width"], arguments);
        this.element.appendChild(polyline);
        
        return polyline;
    }
    
    path(d, fill, stroke, strokeWidth) {
        const path = document.createElementNS(NAMESPACE, "path");
        
        this.#mapAttr(path, ["d", "fill", "stroke", "stroke-width"], arguments);
        this.element.appendChild(path);
        
        return path;
    }
    
    renderText(text, x, y, fill, fontSize, fontFamily) {
        const textEl = document.createElementNS(NAMESPACE, "text");
        const textArgs = ["text", "x", "y", "fill", "font-size", "font-family"];
        
        textEl.textContent = text;
        this.#mapAttr(textEl, textArgs, arguments);
        this.element.appendChild(textEl);
        
        return textEl;
    }

}