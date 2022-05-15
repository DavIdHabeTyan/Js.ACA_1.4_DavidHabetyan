describe('Exercises 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․', () => {

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