const Spiderman = require('./../app/spiderverse');

describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(3);
    });
  })

  describe("Unit Test for Spiderman Class",()=>{
      test('1)Create an Spiderman object',()=>{
          const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony");
          expect(andrewGarfield.name).toBe("Spiderman Sony");
          expect(andrewGarfield.age).toBe(31);
          expect(andrewGarfield.actor).toBe("Andrew Garfield");
          expect(andrewGarfield.movies).toBe(2);
          expect(andrewGarfield.studio).toBe("Sony");
      });
  })

describe('Unit Test for Spiderman Class 2',()=>{
    test('2)GetInfo Method',()=>{
        const tomHolland = new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel");
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
})