// Builder object


const builder = {
    string: "",
    append: function(text){
        this.string += text;
        return this;
    },
    upper: function(){
        this.string = this.string.toUpperCase();
        return this;
    },
    print: function(){
        console.log(this.string);
    }
}

builder.append("hello").upper().print();