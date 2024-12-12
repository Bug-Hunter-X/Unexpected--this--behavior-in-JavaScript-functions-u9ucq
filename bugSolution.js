function myFunc() {
  console.log(this);
}

const myObj = {
  myMethod: myFunc.bind(this) // bind the this context
};

const arrowFunc = () => {
    console.log(this); // this will inherit the surrounding context
};

function myFuncClosure() {
    const that = this; // Create a closure over 'this'

    return function() {
      console.log(that); // Access 'this' from the closure
    };
}

myFunc();
myObj.myMethod();
arrowFunc();
const closureMethod = myFuncClosure.call({myValue: 1});
closureMethod();