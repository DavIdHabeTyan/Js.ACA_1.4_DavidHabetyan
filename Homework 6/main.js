// 1. Get array of node ids from tree (keys).

let tree = {
   0: {
      1: {
         3: {

         },
         4: {
            6: {

            }
         }
      },
      2: {
         5: {

         }
      }
   }
}

function creatArrayIsObj(obj, arr = []) {
   for(let elem in obj) {
      arr.push(elem);
      creatArrayIsObj(obj[elem], arr)
   }
   return arr.sort((a, b) => a - b);
}

console.log(creatArrayIsObj(tree))