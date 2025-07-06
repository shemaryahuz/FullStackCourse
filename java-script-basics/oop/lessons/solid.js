// SOLID Principles in JavaScript - Examples

// ===== OPEN/CLOSED PRINCIPLE =====
// ❌ Bad - Not open for extension
function area(shape) {
  if (shape.type === "circle") return Math.PI * shape.r ** 2;
  if (shape.type === "square") return shape.s ** 2;
}

// ✅ Good - Open for extension
class Shape {
  area() { }
}

class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}

class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s ** 2; }
}

// ===== LISKOV SUBSTITUTION PRINCIPLE =====
// ❌ Bad - Breaks substitution
class Bird {
  fly() { console.log("Flying"); }
}

class Ostrich extends Bird {
  fly() { throw "Can't fly"; }
}

// ✅ Good - Split roles
class Bird {
}

class FlyingBird extends Bird {
  fly() { console.log("Flying"); }
}

class Ostrich extends Bird {
  // no fly()
}

// ===== INTERFACE SEGREGATION PRINCIPLE =====
// ❌ Bad - Too many methods
class Machine {
  print() { }
  scan() { }
  fax() { }
}

// ✅ Good - Split interfaces
class Printer { print() { console.log("Printing"); } }
class Scanner { scan() { console.log("Scanning"); } }

// ===== DEPENDENCY INVERSION PRINCIPLE =====
// ❌ Bad - Depends on concrete implementation
class Store {
  constructor() { this.logger = new ConsoleLogger(); }
  buy(item) { this.logger.log("Bought " + item); }
}

// ✅ Good - Depends on abstraction
class Store {
  constructor(logger) { this.logger = logger; }
  buy(i) { this.logger.log("Bought " + i); }
}

class ConsoleLogger {
  log(m) { console.log(m); }
}