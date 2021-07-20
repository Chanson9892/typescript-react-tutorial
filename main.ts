// interface Point{ // we use interface to define the shape of an object.
//     x: number,
//     y: number,
//     draw: () => void
// }

class Point{ // bundles the data and methods together.
    x: number
    y: number

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
    getDistance(another: Point){ // when function is part of a class we call it a method.
        // ...
    }
}

// let drawPoint = (point: Point) => { // can run into problem with too many parameters. encapsulate them into object
//     //.... 
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     // .....
// }

let point = new Point() // will make a new instance and infers it is a Point object

point.x = 1
point.y = 2
point.draw() // not a function hanging in the air
