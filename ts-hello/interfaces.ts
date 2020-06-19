// inline annotation
let drawPointA = (point: { x: number; y: number }) => {
  console.log("x: " + point.x + " y: " + point.y);
};

drawPointA({
  x: 1,
  y: 2,
});

// using interface
interface Point {
  x: number;
  y: number;
}

let drawPointB = (point: Point) => {
  console.log("x: " + point.x + " y: " + point.y);
};

drawPointB({
  x: 3,
  y: 4,
});
