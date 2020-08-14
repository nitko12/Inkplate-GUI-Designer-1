class line {
    constructor(x0, y0, x1, y1, c0, c1, t) {
        this.type = "line";

        this["start"] = {
            x: x0,
            y: y0,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            }
        }

        this["end"] = {
            x: x1,
            y: y1,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            }
        }

        this["color"] = c0;
        this["thickness"] = t;
        this["gradient"] = c1;

        this.modifiers = [
            "start",
            "end",
        ];

        this.z = 0

        this.editable = {
            "start": {
                type: "coordinate",
                default: {
                    x: 10,
                    y: 10
                },
                optional: false
            },
            "end": {
                type: "coordinate",
                default: {
                    x: 500,
                    y: 500
                },
                optional: false
            },
            "color": {
                type: "int",
                min: 0,
                max: 7,
                default: 0,
                optional: false
            },
            "thickness": {
                type: "float",
                min: 1,
                max: 30,
                default: 1,
                optional: true
            },
            "gradient": {
                type: "int",
                min: 0,
                max: 7,
                default: 0,
                optional: true
            }
        };
    }
}

class circle {
    constructor(x0, y0, r, c, fill) {
        this.type = "circle";
        this["center"] = {
            x: x0,
            y: y0,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            },
        }
        this["fill"] = fill;
        this["radius"] = r;
        this["color"] = c;
        this.modifiers = [
            "center",
        ];
        this.z = 0;
        this.editable = {
            "center": {
                type: "coordinate",
                default: {
                    x: 400,
                    y: 300
                },
                optional: false
            },
            "radius": {
                type: "int",
                min: 0,
                max: 1500,
                default: 100,
                optional: false
            },
            "color": {
                type: "int",
                min: 0,
                max: 7,
                default: 0,
                optional: false
            },
            "fill": {
                type: "bool",
                default: true,
            },
        };
    }
}

class rect {
    constructor(x0, y0, x1, y1, c, r, fill) {
        this.type = "rect";
        this["a"] = {
            x: x0,
            y: y0,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            },
        }
        this["b"] = {
            x: x1,
            y: y1,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            },
        }
        this["fill"] = fill;
        this["radius"] = r;
        this["color"] = c;
        this.modifiers = [
            "a",
            "b"
        ];
        this.z = 0;
        this.editable = {
            "a": {
                type: "coordinate",
                default: {
                    x: 100,
                    y: 100
                },
                optional: false
            },
            "b": {
                type: "coordinate",
                default: {
                    x: 700,
                    y: 500
                },
                optional: false
            },
            "color": {
                type: "int",
                min: 0,
                max: 7,
                default: 0,
                optional: false
            },
            "fill": {
                type: "bool",
                default: true,
            },
            "radius": {
                type: "int",
                min: 0,
                max: 800,
                default: 0,
                optional: true
            }
        }
    }
}

class triangle {
    constructor(x0, y0, x1, y1, x2, y2, c, fill) {
        this.type = "triangle";
        this["a"] = {
            x: x0,
            y: y0,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            },
        }
        this["b"] = {
            x: x1,
            y: y1,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            },
        }
        this["c"] = {
            x: x2,
            y: y2,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            },
        }
        this["color"] = c;
        this["fill"] = fill;
        this.modifiers = [
            "a",
            "b",
            "c",
        ];
        this.z = 0;

        this.editable = {
            "a": {
                type: "coordinate",
                default: {
                    x: 100,
                    y: 100
                },
                optional: false
            },
            "b": {
                type: "coordinate",
                default: {
                    x: 500,
                    y: 500
                },
                optional: false
            },
            "c": {
                type: "coordinate",
                default: {
                    x: 100,
                    y: 500
                },
                optional: false
            },
            "color": {
                type: "int",
                min: 0,
                max: 7,
                default: 0,
                optional: false
            },
            "fill": {
                type: "bool",
                default: true,
            },
        }
    }
}

class text {
    constructor(x0, y0, text, font) {
        this.type = "text";
        this["cursor"] = {
            x: x0,
            y: y0,
            set: function (_x, _y) {
                this.x = _x;
                this.y = _y;
            },
            distSqr: function (_x, _y) {
                return (this.x - _x) ** 2 + (this.y - _y) ** 2;
            },
        }
        this["content"] = text;
        this["font"] = font;
        this.modifiers = [
            "cursor"
        ];
        this.z = 0;

        this.editable = {
            "cursor": {
                type: "coordinate",
                default: {
                    x: 100,
                    y: 100
                },
                optional: false
            },
            "content": {
                type: "text",
                default: "Hello World",
                optional: false
            },
            "font": {
                type: "text",
                default: "24px Arial",
                optional: false
            }
        };
    }
}

let primitiveDict = {
    "line": line,
    "circle": circle,
    "rect": rect,
    "triangle": triangle,
    "text": text,
}