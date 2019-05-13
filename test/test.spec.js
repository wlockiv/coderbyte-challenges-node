import { expect } from 'chai';
import {
  LongestWord,
  FirstFactorial,
  FirstReverse,
  LetterChange
} from '../src';

describe('CoderByte Coding Challenges using NodeJS with ES6 Syntax', () => {
  // 5/11/2019
  describe('First Factorial', () => {
    it('returns the factorial of a number', () => {
      // setup
      const num1 = 8;
      const num2 = 4;

      // execution
      const factorial1 = FirstFactorial(num1);
      const factorial2 = FirstFactorial(num2);

      // verify
      expect(factorial1).to.equal(40320);
      expect(factorial2).to.equal(24);
    });
  });

  // 5/11/2019
  describe('Longest Word', () => {
    it('finds the longest word in a sentence, excluding punctuation', () => {
      // setup
      const sen1 = 'Argument goes here';
      const sen2 = 'Full!!!!&#$%@ sentence';

      // execution
      const longest1 = LongestWord(sen1);
      const longest2 = LongestWord(sen2);

      // verify
      expect(longest1).to.equal('Argument');
      expect(longest2).to.equal('sentence');
    });
  });

  // 5/13/2019
  describe('First Reverse', () => {
    it('reverses a string', () => {
      // setup
      const str1 = 'coderbyte';
      const str2 = 'I Love Code';

      // execution
      const reverse1 = FirstReverse(str1);
      const reverse2 = FirstReverse(str2);

      // verify
      expect(reverse1).to.equal('etybredoc');
      expect(reverse2).to.equal('edoC evoL I');
    });
  });

  // 5/13/2019
  describe('Letter Change', () => {
    it('changes each letter to the next in the alphabet and capitalizes vowels in the result', () => {
      // setup
      const str1 = 'hello*3';
      const str2 = 'fun times!';
      const str3 = 'a confusing /:sentence:/[ this is not!!!!!!!~';

      // execution
      const change1 = LetterChange(str1);
      const change2 = LetterChange(str2);
      const change3 = LetterChange(str3);

      // verify
      expect(change1).to.equal('Ifmmp*3');
      expect(change2).to.equal('gvO Ujnft!');
      expect(change3).to.equal('b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~');
    });
  });
});
