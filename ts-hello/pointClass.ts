export class Point {
  constructor(private _x?: number, private _y: number = 0) {}

  draw() {
    console.log("x: " + this._x + ", y: " + this._y);
  }

  get x() {
    return this._x;
  }

  set x(x: number) {
    if (x < 0) {
      throw new Error("value cannot be less than 0.");
    }
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y: number) {
    if (y < 0) {
      throw new Error("value cannot be less than 0.");
    }
    this._y = y;
  }
}
