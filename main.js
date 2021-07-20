// interface Point{ // we use interface to define the shape of an object.
//     x: number,
//     y: number,
//     draw: () => void
// }
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// let drawPoint = (point: Point) => { // can run into problem with too many parameters. encapsulate them into object
//     //.... 
// }
// let getDistance = (pointA: Point, pointB: Point) => {
//     // .....
// }
var point = new Point(); // will make a new instance and infers it is a Point object
point.x = 1;
point.y = 2;
point.draw(); // not a function hanging in the air
