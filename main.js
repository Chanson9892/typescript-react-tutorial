// interface Point{ // we use interface to define the shape of an object.
//     x: number,
//     y: number,
//     draw: () => void
// }
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
// class Point{ // bundles the data and methods together.
//     private x: number // private makes it not able to be changed
//     private y: number // private makes it not able to be changed
//     constructor(x?: number, y?: number){ // will construct an instance of the point object. ? makes the parameter optional
//         this.x = x
//         this.y = y
//     }
//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }
// }
// let drawPoint = (point: Point) => { // can run into problem with too many parameters. encapsulate them into object
//     //.... 
// }
var point = new Point(1, 2); // will make a new instance and infers it is a Point object
// point.x = 1
// point.y = 2
point.draw();
