/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y) ||
    Math.abs(queen.x - king.x) === 0 ||
    Math.abs(queen.y - king.y) === 0
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a > b && a > c) return a < b + c;
  if (b > a && b > c) return b < a + c;
  return c < a + b;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let temp = num;
  let answ = '';
  while (temp > 0) {
    if (temp >= 10) {
      temp -= 10;
      answ += 'X';
    } else if (temp === 9) {
      temp -= 9;
      answ += 'IX';
    } else if (temp >= 5) {
      temp -= 5;
      answ += 'V';
    } else if (temp === 4) {
      answ += 'IV';
      temp -= 4;
    } else {
      answ += 'I';
      temp -= 1;
    }
  }
  return answ;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let answ = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '.':
      case ',':
        answ += 'point';
        break;
      case '-':
        answ += 'minus';
        break;
      case '0':
        answ += 'zero';
        break;
      case '1':
        answ += 'one';
        break;
      case '2':
        answ += 'two';
        break;
      case '3':
        answ += 'three';
        break;
      case '4':
        answ += 'four';
        break;
      case '5':
        answ += 'five';
        break;
      case '6':
        answ += 'six';
        break;
      case '7':
        answ += 'seven';
        break;
      case '8':
        answ += 'eight';
        break;
      case '9':
        answ += 'nine';
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) answ += ' ';
  }
  return answ;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let temp = num;
  while (temp > 9) {
    if (temp % 10 === digit) return true;
    temp = Math.floor(temp / 10);
  }
  return temp % 10 === digit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < i; j += 1) {
      sum += arr[j];
    }
    for (let k = arr.length - 1; k > i; k -= 1) {
      sum -= arr[k];
    }
    if (sum === 0) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }
  let temp = 1;
  let fillAmountoffset = 0;
  let fillAmount = size;
  let turns = 1;
  let i = 0;
  let j = 0;
  let dir = 1;
  while (temp <= size * size) {
    arr[i][j] = temp;
    temp += 1;
    fillAmount -= 1;
    if (fillAmount === 0) {
      turns -= 1;
      dir += 1;
      if (turns === 0) {
        fillAmountoffset += 1;
        turns = 2;
      }
      if (dir === 5) dir = 1;
      fillAmount = size - fillAmountoffset;
    }
    switch (dir) {
      case 1:
        j += 1;
        break;
      case 2:
        i += 1;
        break;
      case 3:
        j -= 1;
        break;
      case 4:
        i -= 1;
        break;
      default:
        break;
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = matrix;
  for (let i = 0; i < Math.floor(arr.length / 2); i += 1) {
    const temp = i;
    const tempEnd = arr.length - 1 - i;
    for (let j = temp; j < tempEnd; j += 1) {
      const diff = j - temp;
      const top = arr[temp][j];
      arr[temp][j] = arr[tempEnd - diff][temp];
      arr[tempEnd - diff][temp] = arr[tempEnd][tempEnd - diff];
      arr[tempEnd][tempEnd - diff] = arr[j][tempEnd];
      arr[j][tempEnd] = top;
    }
  }
  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function partition(tempArr, low, high) {
    const newArr = tempArr;
    const pivot = newArr[high];
    let i = low - 1;
    for (let j = low; j < high; j += 1) {
      if (newArr[j] <= pivot) {
        i += 1;
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
    const temp = newArr[i + 1];
    newArr[i + 1] = newArr[high];
    newArr[high] = temp;
    return i + 1;
  }
  function quickSortRecursive(tempArr, low, high) {
    const newArr = tempArr;
    if (low < high) {
      const pi = partition(newArr, low, high);
      quickSortRecursive(newArr, low, pi - 1);
      quickSortRecursive(newArr, pi + 1, high);
    }
  }
  quickSortRecursive(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const len = str.length;
  if (len <= 1 || iterations < 1) return str;
  let indexMap = new Array(len);
  for (let i = 0; i < len; i += 1) {
    indexMap[i] = i;
  }
  for (let itr = 0; itr < iterations; itr += 1) {
    const tempMap = new Array(len);
    let evenId = 0;
    let oddId = Math.floor((len + 1) / 2);
    for (let i = 0; i < len; i += 1) {
      if (i % 2 === 0) {
        tempMap[evenId] = indexMap[i];
        evenId += 1;
      } else {
        tempMap[oddId] = indexMap[i];
        oddId += 1;
      }
    }
    indexMap = tempMap;
  }
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += str[indexMap[i]];
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let temp = number;
  const digits = [];
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }

  let breakpoint = -1;
  for (let i = 1; i < digits.length; i += 1) {
    if (digits[i] < digits[i - 1]) {
      breakpoint = i;
      break;
    }
  }

  if (breakpoint === -1) {
    return number;
  }

  let swapIndex = -1;
  for (let j = 0; j < breakpoint; j += 1) {
    if (digits[j] > digits[breakpoint]) {
      if (swapIndex === -1 || digits[j] < digits[swapIndex]) {
        swapIndex = j;
      }
    }
  }

  let tempDigit = digits[breakpoint];
  digits[breakpoint] = digits[swapIndex];
  digits[swapIndex] = tempDigit;

  let left = 0;
  let right = breakpoint - 1;
  while (left < right) {
    tempDigit = digits[left];
    digits[left] = digits[right];
    digits[right] = tempDigit;
    left += 1;
    right -= 1;
  }

  let result = 0;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    result = result * 10 + digits[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
