// Rectangle function constructor

function Rectangle(width, height){
    this.width = width;
    this.height = height;
    this.area = function(){
        return width * height;
    }
}

const rectangle = new Rectangle(4, 5);
console.log(rectangle.area()); // 20