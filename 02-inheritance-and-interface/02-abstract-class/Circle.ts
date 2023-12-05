import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(x: number, y: number, private _radius: number) {
        super(x, y);
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }


    getInfo(): string {
        return super.getInfo() + `, radius = ${this.radius}`;
    }

    calculateAre(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
