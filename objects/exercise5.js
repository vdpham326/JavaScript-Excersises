let myProtoObj = {
    foo: 1,
    bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;


Object.keys(myObj).forEach(function(key) {
    console.log(key);
});

//for in will include the prototype attribute as well
for (let key in myObj) {
    console.log(key);
}
