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


describe("4.  Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․", () => {
   function findMinPositiveNum(arr) {
      if(arr.length === 0){
         return -1
      }
      let sort = [...arr].sort((a, b) => a - b);
      let numb = sort.shift();
      if(numb >= 0) {
         return numb
      } else{
         return findMinPositiveNum(sort)
      }
   }


   test('Test 1.', () => {
      expect(findMinPositiveNum([56,-9, 87, -23, 0, -105, 55, 1])).toEqual(0);
   })

   test('Test 2.', () => {
      expect(findMinPositiveNum([45, -9, 15, 5, -78])).toEqual(5);
   })

   test('Test 3', () => {
      expect(findMinPositiveNum([-5, -9, -111, -1000, -7])).toEqual(-1)
   })
})