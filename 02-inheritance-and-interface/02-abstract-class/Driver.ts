import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(15, 20, 30, 40);

let shapes: Shape[] = []
shapes.push(myCircle)
shapes.push(myRectangle)

for (const shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateAre());
}
