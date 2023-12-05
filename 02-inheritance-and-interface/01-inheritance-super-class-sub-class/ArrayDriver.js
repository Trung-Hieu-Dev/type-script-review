"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(3, 5);
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(15, 20, 30, 40);
// create array
let shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
// loop
for (const shape of shapes) {
    console.log(shape.getInfo());
}
