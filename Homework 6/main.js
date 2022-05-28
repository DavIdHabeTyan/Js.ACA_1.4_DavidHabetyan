// 1. Get array of node ids from tree (keys).

let tree = {
   0: {
      1: {
         3: {},
         4: {
            6: {}
         }
      },
      2: {
         5: {}
      }
   }
}

// function creatArrayIsObj(obj, arr = []) {
//    for (let elem in obj) {
//       arr.push(elem);
//       creatArrayIsObj(obj[elem], arr)
//    }
//    return arr.sort((a, b) => a - b);
// }
//
// console.log(creatArrayIsObj(tree))

//2. Get array of nodes from tree.
//
// function creatArrayIsObjTree(obj, arr = []) {
//    for (let elem in obj) {
//       arr.push({id: elem, children: Object.keys(obj[elem])});
//       creatArrayIsObjTree(obj[elem], arr)
//    }
//    return arr
// }
// console.log(creatArrayIsObjTree(tree))



// 3. Implement binary search.

// let array = [12, 34, 5, 6, 78, 89, 3];
// function binarySearch(numb, arr) {
//    for(let i = 0; i < arr.length; i++) {
//       if(numb === arr[i]){
//          return `${true}, index: ${i}`
//       }
//    }
//    return `${false}, not found`
// }
//
// console.log(binarySearch(5, arr))

//3. Implement binary search.

let array = [12, 34, 5, 6, 78, 89, 3];

function binarySearch(arr, numb) {
   let sortArr = arr.sort((a, b) => a - b);
   let left = 0;
   let right = sortArr.length - 1;
   let mid;
   while (left <= right) {
      mid = Math.round((right - left) / 2) + left;

      if (numb === sortArr[mid]) {
         return `finded index ${mid} `;
      } else if (numb < sortArr[mid]) {
         right = mid - 1;
      } else {
         left = mid + 1;
      }

   }
   return false;
}

console.log(binarySearch(array, 11))


// 4. Create a simple portfolio.

// http://cvdavidhabetyandev.zzz.com.ua/
