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

function debounce(f, ms) {

   let isCooldown = false;

   return function () {
      if (isCooldown) return;

      f.apply(this, arguments);

      isCooldown = true;

      setTimeout(() => isCooldown = false, ms);
   };

}

