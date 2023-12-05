import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(3, 5);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(15, 20, 30, 40);

// create array
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

// loop
for (const shape of shapes) {
    console.log(shape.getInfo());
}
