interface Point{ // we use interface to define the shape of an object.
    x: number,
    y: number
}

let drawPoint = (point: Point) => { // can run into problem with too many parameters. encapsulate them into object
    //.... 
}

drawPoint({
    x: 2,
    y: 5
})

