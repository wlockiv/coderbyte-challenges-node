import { expect } from 'chai';
import {
  CheckNums,
  FirstFactorial,
  FirstReverse,
  LetterCapitalize,
  LetterChange,
  LongestWord,
  SimpleAdding,
  SimpleSymbols,
  TimeConvert
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

  // 5/14/19
  describe('Simple Adding', () => {
    it('adds all of the numbers from 1 to input', () => {
      // setup
      const input1 = 12;
      const input2 = 140;

      // execution
      const output1 = SimpleAdding(input1);
      const output2 = SimpleAdding(input2);

      // verify
      expect(output1).to.equal(78);
      expect(output2).to.equal(9870);
    });
  });

  // 5/14/19
  describe('Letter Capitalize', () => {
    it('capitalizes the first letter of each word in a string', () => {
      // setup
      const input1 = 'hello world';
      const input2 = 'i ran there';

      // execution
      const output1 = LetterCapitalize(input1);
      const output2 = LetterCapitalize(input2);

      // verify
      expect(output1).to.equal('Hello World');
      expect(output2).to.equal('I Ran There');
    });
  });

  // 5/14/19
  describe('Simple Symbol', () => {
    it('evaluates string and returns \'true\' if letters are surrounded by \'+\'', () => {
      // setup
      const input1 = '+d+=3=+s+';
      const input2 = 'f++d+';

      // execution
      const output1 = SimpleSymbols(input1);
      const output2 = SimpleSymbols(input2);

      // verify
      expect(output1).to.equal('true');
      expect(output2).to.equal('false');
    });
  });

  // 5/15/19
  describe('Check Nums', () => {
    it('returns \'true\' if num2 > num1, \'false\' if num2 < num1, -1 if they are equal', () => {
      // setup
      const input1 = [24, 32];
      const input2 = [32, 24];
      const input3 = [32, 32];

      // execution
      const output1 = CheckNums(input1[0], input1[1]);
      const output2 = CheckNums(input2[0], input2[1]);
      const output3 = CheckNums(input3[0], input3[1]);

      // verify
      expect(output1).to.equal('true');
      expect(output2).to.equal('false');
      expect(output3).to.equal(-1);
    });
  });

  // 5/15/19
  describe('Time Convert', () => {
    it('converts minutes into hours in minutes separated by a semicolon', () => {
      // setup
      const input1 = 126;
      const input2 = 45;

      // execution
      const output2 = TimeConvert(input2);
      const output1 = TimeConvert(input1);

      // verify
      expect(output1).to.equal('2:6');
      expect(output2).to.equal('0:45');
    });
  });
});
