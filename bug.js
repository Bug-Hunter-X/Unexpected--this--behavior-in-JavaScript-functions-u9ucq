function myFunc() {
  console.log(this);
}

myFunc(); // this will log the global object (window in browsers, undefined in strict mode)