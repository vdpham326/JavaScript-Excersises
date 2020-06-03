let objToCopy = {
    foo: 1,
    bar: 2,
};


function copyObj(obj, keys) {
    let destinationObject = {};

    if (keys) {
        keys.forEach(function(key) {
            destinationObject[key] = obj[key];
        });
        return destinationObject;
    } else {
        return Object.assign(destinationObject, obj);
    }
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined