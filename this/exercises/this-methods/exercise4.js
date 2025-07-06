const displayInfo = (...args) => {
    console.log(this, args);
};

displayInfo.call({role: "admin"}, "read", "write"); // {} [ 'read', 'write' ]

// Fix with function

const displayInfo2 = function(...args){
    console.log(this, args);
}

displayInfo2.call({role: "admin"}, "read", "write"); // {role: 'admin'} ['read', 'write']