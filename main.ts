// interface Point{ // we use interface to define the shape of an object.
//     x: number,
//     y: number,
//     draw: () => void
// }

class Point{ // x, y are fields for storing data, draw is a function
    x: number
    y: number
    draw() {
        //.....
    }
    getDistance(another: Point){ // when function is part of a class we call it a method.
        // ...
    }
}

let drawPoint = (point: Point) => { // can run into problem with too many parameters. encapsulate them into object
    //.... 
}

let getDistance = (pointA: Point, pointB: Point) => {
    // .....
}

drawPoint({
    x: 2,
    y: 5
})

