
//1.   Create a function that builds a tree like object given an array with object which contains parent and id properties.

let treeNodes = [
   {parent: null, id: 0},
   {parent: 0, id: 1},
   {parent: 0, id: 2},
   {parent: 1, id: 3},
   {parent: 1, id: 4},
   {parent: 2, id: 5},
   {parent: 4, id: 6}
   // { parent: 2, id: 8 },
   // { parent: 3, id: 5 },
   // { parent: 8, id: 7 },

]
const reduceTree = (treeNodes, parent = null) =>
   treeNodes.reduce((tree, currentItem) => {
      if (currentItem.parent === parent) {
         tree[currentItem.id] = reduceTree(treeNodes, currentItem.id);
      }
      return tree;
   }, {})

console.log(JSON.stringify(reduceTree(treeNodes), null, 1));


// exercises 3
describe('3.  Write a recursive function to determine whether all digits of the number are odd or not.', () => {

   function findDigit(numb) {

      return String(numb).split('').every(val => {
         return +val % 2 !== 0
      })

   }

   test('test.1', () => {
      expect(findDigit(4211133)).toEqual(false);
   })
   test('test 2.', () => {
      expect(findDigit(7791)).toEqual(true);
   })

   test('test 3.', () => {
      expect(findDigit(5)).toEqual(true)
   })
})


// exercises 4.
describe("4.  Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․", () => {
   function findMinPositiveNum(arr) {
      if (arr.length === 0) {
         return -1
      }
      let sort = [...arr].sort((a, b) => a - b);
      let numb = sort.shift();
      if (numb >= 0) {
         return numb
      } else {
         return findMinPositiveNum(sort)
      }
   }

   test('Test 1.', () => {
      expect(findMinPositiveNum([56, -9, 87, -23, 0, -105, 55, 1])).toEqual(0);
   })

   test('Test 2.', () => {
      expect(findMinPositiveNum([45, -9, 15, 5, -78])).toEqual(5);
   })

   test('Test 3', () => {
      expect(findMinPositiveNum([-5, -9, -111, -1000, -7])).toEqual(-1)
   })
})