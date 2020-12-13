
// import App from './App';
// import { render, screen } from '@testing-library/react';
// import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//example: 

// describe('createQuizArrayEqual', () => {
//   it('should return an array that is equal to QUESTIONDATA', () => {
//     const quizArray = createQuizArray()
//     expect(isEqual(quizArray, QUESTIONDATA)).toEqual(true)
//   })
// })
const input_codes = ["123", "ab3", "321", "dpq"]
// expected output: "123", "ab3", "dpq"

const nucularCodes = (old_array) => {
  let new_hash = {} // instead of an object, you make a set (so "new Set()")
  old_array.map((string) => {
      // if "123" is in the array, then skip it and move to the next item
      // if it is not in the array, then add it and move to the next item
      // we are going to deal with "321"
      // new_hash.hasOwnProperty("whateve the key is")
      if (!new_hash.hasOwnProperty(string.split("").reverse().join(""))) {
        new_hash[string] = 0 // [string] is really saying that if the array does not contain string, then create the key for it {"123": 0, "ab3": 0}
        // instead of setting your object's key -- the string -- to the value of 0
        // you instead just add your string to the set "new_hash.add(string)"
      }
  })
  return Object.keys(new_hash) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
}

// array (aka list) -- ordered items by the way they are inserted 
// map -- Key -> Value pairs, this is exactly what the javascript Object
// set -- it is like an array, except you are guaranteed to have unique objects; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

describe('win_test_nucular_codes', () => {
  it('should return an array with no duplicate values or duplicate-as-reverse values', () => {
    const nucular_array = nucularCodes(["123", "ab3", "321", "dpq"]) 
    expect(nucular_array).toEqual(["123", "ab3", "dpq"])
  })
})

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
// NOTE: You must accomplish this in O(n) time. This is also known as linear time.
// Examples:
// s = "leetcode"
// return 0.
// (The "l" is the first character that only appears once in the string, and appears at index 0.)
// s = "loveleetcode",
// return 2.
// (The "l" and "o" are repeated, so the first non-repeating character is the "v", which is at index 2.)
// Note: You may assume the string contain only lowercase letters.

// Input is a string.
// Output is an integer: the index of the first non-repeating character in the string.
// I need to split the string into an array to process it.
// I need to go through each value in that array.
// I need to check to see whether each value is repeated elsewhere in the array.
// If no, I need to grab the index of that value and return it. 

const NonRepeatingString = (string) => {
  let string_array = string.split('')
  let string_hash = {}
  let counter = 0
  string_array.forEach(letter => {
    string_hash[letter] = 0
  }
  string_array.forEach(letter => {
    if string_hash[letter]
  })
    else if (string_hash[letter]) {
      return string_array.indexOf(letter)
    }
  })
}

describe('win_test_non_repeating_strings', () => {
  it('should return an integer that is the value of the non-repeating character in the string', () => {
    const no_repeat_value = NonRepeatingString("leetcode")
    expect(no_repeat_value).toEqual(0)
  })
})