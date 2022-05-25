// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    return this.array.reduce((sum,value) => sum + value, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const a = this.array[0];
    const b = this.array[1];
    const c = this.array[2];
    if(!a || !b || !c || !(this.countSides === 3)) {
      return false;
    }
    return a + b > c && b + c > a && c + a > b;
  }
}

class Square extends Polygon {
  get isValid() {
    const newArray = [...this.array];
    const side = newArray.shift();
    return newArray.every(value => value === side);
  }

  get area() {
    return (this.isValid) ? Math.pow(this.array[0], 2) : undefined;
  }
}
