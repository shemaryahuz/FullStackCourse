function User(name) {
    this.name = name;
    this.getName = function(){return this.name};
}

const u = new User('David');
console.log(u.getName());