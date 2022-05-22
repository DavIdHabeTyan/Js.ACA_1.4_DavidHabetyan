//exercises 3
function delay(f, ms) {
   const sum = 5 + 5
   setTimeout(function () {
      f(sum)
   }, ms)
}

delay(function (callback) {
   console.log(callback)
}, 3000)


//exercises 4
function f(a, b) {
   return a ** b;
}
function decorator(wrapper, ms) {
   let active = false;

   function innerFunc(...rest) {
      if (active) {
         return;
      }
      active = true;
      setTimeout(() => active = false, ms);
      return wrapper.apply(this, rest);
   }

   return innerFunc;
}

let a = decorator(f, 1000);

console.log(a(5, 2))
console.log(a(10, 20))
setTimeout(() => console.log(a(4, 1)), 1200)

