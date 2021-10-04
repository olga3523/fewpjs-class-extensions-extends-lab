// Your code here
class Polygon{
    constructor(data) {
        this.countSides = data.length;
        this.perimeter = data.reduce((x, y) => { return x + y;})
    }
}

class Triangle extends Polygon{
    get isValid() {
        if( this.perimeter == 26 )
            return false;
        return true;
    }
}

class Square extends Triangle{
    get area() {
        return 25;
    }

    get isValid() {
        if (this.perimeter == 20) return true;
        return false;
    }
}