// Link to question: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function plusMinus(arr) {
  if (!arr || arr.length == 0) return;
  const count = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count[0]++;
    } else if (arr[i] < 0) {
      count[1]++;
    } else {
      count[2]++;
    }
  }
  let countAllNums = arr.length;

  console.log((count[0] / countAllNums).toFixed(6));
  console.log((count[1] / countAllNums).toFixed(6));
  console.log((count[2] / countAllNums).toFixed(6));
}
//plusMinus([-4, 3, -9, 0, 4, 1]);

// Link to question: https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
function miniMaxSum(arr) {
  let sum = arr[0],
    min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  let minimumSum = sum - max;
  let maximumSum = sum - min;
  console.log(minimumSum, maximumSum);
}

//miniMaxSum([1, 3, 5, 7, 9]);

function fizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('FizzBuzz');
    } else if (n % 3 === 0) {
      console.log('Fizz');
    } else if (n % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

function findMedian(arr) {
  const sortedArr = arr.toSorted((a, b) => a - b);
  const medianPlace = Math.floor(arr.length / 2);

  return sortedArr[medianPlace];
}

// console.log(findMedian([5, 6, 9, 3, 2]));

//Link to problem: https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
//Ways to solve:
//1. With map
//2.with array sort

const majorityElement1 = function (nums) {
  const sortedNums = [...nums].sort();
  const majorityElementLocation = Math.floor(sortedNums.length / 2);

  return sortedNums[majorityElementLocation];
};
/*
//Time complexity:
Sorting the array: The time complexity of the sorting algorithm used in JavaScript is typically O(n log n), where n is the length of the array.
Finding the majority element: After sorting the array, accessing the element at the middle index (Math.floor(nums.length / 2)) takes O(1) time.
Overall, the time complexity of the code is dominated by the sorting step, so it's O(n log n)

//Space complexity:
The space complexity is determined by the additional space required to store the sorted copy of the array. Creating a shallow copy of the array ([...nums]) and sorting it requires O(n) additional space.
Other than that, the space used for storing the index of the majority element and other variables is constant.
Hence, the space complexity remains O(n).
*/
const majorityElement2 = function (nums) {
  const countNums = new Map();

  for (let i = 0; i < nums.length; i++) {
    countNums[nums[i]] =
      countNums[nums[i]] === undefined ? 1 : countNums[nums[i]] + 1;
    // if (countNums[nums[i]] === undefined) {
    //   countNums[nums[i]] = 1;
    // } else {
    //   countNums[nums[i]]++;
    // }
    if (countNums[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};
// console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]));
/**
 Time complexity: O(n)- n refers to the length of the input array. 
 Space complexity: O(n)- n refers to the length of the input array. 
 */

// link to the problem: https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
/*
Ways to solve: 
1. loop over the array k - with pop and unshift in each iteration
2. with splice and reverse
*/
const arr = [-1, -100, 3, 99];

//Too long, with checking wether k is bigger that the array length.
var rotate1 = function (nums, k) {
  k %= nums.length;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};
// console.log(arr);
// rotate1(arr, 2);
// console.log(arr);
/*
Time complexity: 
O(n^2) or O(n*k)

Space complexity: 
O(1)
*/

function rotate2(nums, k) {
  k %= nums.length;

  if (k === 0) return;
  const tempNums = nums.splice(0, nums.length - k);
  nums.push(...tempNums);
}

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr2);
// rotate2(arr2, 3);
// console.log(arr2);

/*
Time complexity: O(n) 
Space complexity: O(1)
*/
function rotate3(nums, k) {
  k %= nums.length;
  if (k === 0) return;
  const numsToAdd = [];
  for (i = 0; i < k; i++) {
    numsToAdd.push(nums.pop());
  }
  numsToAdd.reverse();
  nums.unshift(...numsToAdd);
}
// const nums1 = [1, 2, 3, 4, 5, 6, 7];
// rotate3(nums1, 3);
// console.log();
// console.log(nums1);

//******************************************
//link to the problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
const maxProfit = function (prices) {
  let maxPro = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxPro) maxPro = prices[j] - prices[i];
    }
  }
  return maxPro;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
/*
Time Complexity: O(n^2)
The time complexity can be expressed as O(n^2), where n is the number of elements in the prices array. This is because there are two nested loops, each iterating through the array of prices.

Space Complexity:  O(1)
The code only uses a fixed amount of extra space for variables (maxPro, i, j), and it does not depend on the size of the input array.
*/

//Better solution- better time complexity
const maxProfit2 = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};

// console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit2([7, 6, 4, 3, 1]));

/*
Time Complexity: O(n)
The time complexity of this code is O(n), where n is the number of elements in the prices array. It's linear because it scales linearly with the size of the input.

Space Complexity: O(1)
It only uses a fixed amount of extra space to store variables (minPrice, maxProfit, and the loop counter i). The space used does not increase with the size of the input array.
*/

// ******************************************************
//Link to the problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
const maxProfitMedium = function (prices) {
  let sumProfit = 0;
  let current = 0;
  let biggest = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] && prices[i + 1] > prices[i]) {
      current = prices[i];
      while (i < prices.length && prices[i + 1] > prices[i]) {
        biggest = prices[i + 1];
        i++;
      }
      sumProfit += biggest - current;
    }
  }
  return sumProfit;
};

// console.log(maxProfitMedium([7, 1, 5, 3, 6, 4])); //7
// console.log(maxProfitMedium([1, 2, 3, 4, 5])); //4

/*
Time Complexity: O(n)
The time complexity is O(n), where n is the number of elements in the prices array. This is because it iterates through the array once, and the while loop inside iterates over a subset of the array at most once.
Space Complexity:  O(1)
The space used does not increase with the size of the input array.
*/

// ******************************************************
//Link to the problem: https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  if (nums.length > 1 && nums[0] === 0) return false;
  let jumps = nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    if (jumps <= nums[i]) {
      jumps = nums[i];
      if (nums.length - i + 1 - jumps <= 0) {
        return true;
      }
    } else {
      jumps--;
      if (jumps <= 0) {
        return false;
      }
    }
  }
  return true;
};

// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
/*
Time Complexity: O(n)
The time complexity of the function is O(n), where n is the length of the input array nums.
The loop iterates through each element of the array once, except for the last element since it's unnecessary to iterate over it. Therefore, the loop runs in O(n) time.
Space Complexity:  O(1)
There are no data structures or arrays created that grow with the input size. Hence, the space complexity remains constant.
*/

// ******************************************************
//link to problem: https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 0) return 0;

  let sumJumps = 0;
  let betterJumpIdx = 0;
  let reachIdx = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    sumJumps++;
    if (i + nums[i] >= nums.length - 1) return sumJumps;
    if (nums[i] !== 1) {
      betterJumpIdx = i + nums[i];
      reachIdx = nums[betterJumpIdx] + betterJumpIdx;

      for (let j = i + nums[i] - 1; j > i; j--) {
        if (nums[j] + j > reachIdx) {
          betterJumpIdx = j;
          reachIdx = nums[j] + j;
        }
      }

      i = betterJumpIdx - 1;
    }
  }
  return sumJumps;
};
// console.log(jump([2, 3, 1, 1, 4]));
// console.log(jump([2, 3, 0, 1, 4]));

// Link to problem: https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let num = 0;
  let prevSymbol = '';
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        num += 1;
        break;
      case 'V':
        num += prevSymbol === 'I' ? 3 : 5;
        break;
      case 'X':
        num += prevSymbol === 'I' ? 8 : 10;
        break;
      case 'L':
        num += prevSymbol === 'X' ? 30 : 50;
        break;
      case 'C':
        num += prevSymbol === 'X' ? 80 : 100;
        break;
      case 'D':
        num += prevSymbol === 'C' ? 300 : 500;
        break;
      case 'M':
        num += prevSymbol === 'C' ? 800 : 1000;
        break;
    }
    prevSymbol = s[i];
  }
  return num;
};

// console.log(romanToInt('III')); //3
// console.log(romanToInt('IV')); //4
// console.log(romanToInt('LVIII')); //58
// console.log(romanToInt('MCMXCIV')); //1994

/* Time Complexity: O(n)
The time complexity of the function is O(n), where n is the length of the input string s.
Space Complexity:  O(1) 
The space complexity remains constant.
*/
// Another solution with the same time and space complexity but a bit faster than the previous one because it uses a map instead of a switch statement.
const romanNumsMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToIntMap = function (s) {
  let num = 0;
  let current;
  for (let i = 0; i < s.length; i++) {
    current = romanNumsMap[s[i]];

    if (i !== 0 && current > romanNumsMap[s[i - 1]]) {
      num -= romanNumsMap[s[i - 1]] * 2;
      num += current;
    } else {
      num += current;
    }
  }
  return num;
};

// console.log(romanToIntMap('III')); //3
// console.log(romanToIntMap('IV')); //4
// console.log(romanToIntMap('LVIII')); //58
// console.log(romanToIntMap('MCMXCIV')); //1994

// ******************************************************
//Link to problem: https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

//Solution 1:
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome1 = function (s) {
  //1. remove all non-alphanumeric characters
  let cleanString = s
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .replace(/\s/g, '');
  //2. reverse the string
  let reversedString = cleanString.split('').reverse().join('');
  //3. compare the reversed string to the original string
  return cleanString === reversedString;
};

// console.log(isPalindrome1('A man, a plan, a canal: Panama'));
// console.log(isPalindrome1('race a car'));
// console.log(isPalindrome1('ab_a'));
// console.log(isPalindrome1('0P'));

//Solution 2- Two pointers approach:
const isPalindrome2 = function (s) {
  let cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) return false;
    left++;
    right--;
  }
  return true;
};
// console.log(isPalindrome2('A man, a plan, a canal: Panama'));
// console.log(isPalindrome2('race a car'));
// console.log(isPalindrome2('ab_a'));
// console.log(isPalindrome2('0P'));

/* Time complexity: O(n)- n is the length of the string s
Space complexity: O(n)- n is the length of the string s */

// ******************************************************
//Link to problem:https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence1 = function (s, t) {
  let pointerT = 0;

  for (i = 0; i < s.length; i++) {
    while (t[pointerT] !== s[i]) {
      pointerT++;
      if (pointerT > t.length) return false;
    }
    pointerT++;
  }
  return true;
};

const isSubsequence2 = function (s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};
/*
Time complexity: O(n)- n refers to the length of the variable t. 
Space complexity: O(1)
*/

// ******************************************************
//Link to problem: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
const merge = function (nums1, m, nums2, n) {
  if (n == 0) return;
  if (m == 0) {
    for (i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }
  m--;
  n--;

  for (i = m + n + 1; i >= 0; i--) {
    if (nums1[m] > num2[n]) {
      nums1[i] = nums1[m--];
    } else if (num2[n] > nums1[m]) {
      nums1[i] = nums2[n--];
    } else {
      nums1[i] = nums1[m--];
      nums1[--i] = nums2[n--];
    }
    if (m < 0 && n >= 0) {
      i--;
      while (i >= 0) {
        nums1[i--] = nums2[n--];
      }
    } else if (n <= 0) {
      return;
    }
  }
};

// const num1 = [2, 0];
// const m = 1;
// const num2 = [1];
// const n = 1;
// console.log(num1);
// merge(num1, m, num2, n);
// console.log(num1);
/*
Time Complexity: O(m+n)
Space Complexity: O(1)
*/
const removeElement = function (nums, val) {
  let k = nums.length;

  for (let i = 0, j = nums.length - 1; i <= j; i++) {
    if (nums[i] === val) {
      k--;
      nums[i--] = nums[j--];
    }
  }
  return k;
};
// const nums1 = [3, 2, 2, 3];
// console.log(removeElement(nums1, 3));
// console.log(nums1);

/*
 Time complexity: O(n)
 Space complexity: O(1)
 Thoughts: 
 *If in place was not required in this problem filter could do the work as well. 
 *Different approach to solve this is to check wether the current value in the array
 is not equal to val. Code: 
 const removeElement = function(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  return k;
};
 */

const removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
// const nums1 = [1, 1, 2];
// console.log(removeDuplicates(nums1));
// console.log(nums1);
// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(nums2));
// console.log(nums2);
/*
Time complexity: O(n)- n refers to the length of the array nums.
Space complexity: O(1). 
*/

//Link to problem: https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150
const lengthOfLastWord1 = function (s) {
  s = s.trim();
  let count = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] !== ' ') {
    count++;
    i--;
  }
  return count;
};
/*
Time complexity: O(n)- n refers to the length of the string. 
Space complexity: O(1)
*/
const lengthOfLastWord2 = function (s) {
  s = s.trim();
  let lastSpaceIndex = s.lastIndexOf(' ');
  return s.length - lastSpaceIndex - 1;
};
/*
Time complexity: O(n)- n refers to the length of the string. 
Space complexity: O(1)
*/

//link to problem: https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150
const longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  let newPrefix = '';

  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix) || strs[i].length > prefix.length) {
      newPrefix = '';
      for (let j = 0; j < prefix.length && j < strs[i].length; j++) {
        if (prefix[j] === strs[i][j]) {
          newPrefix += prefix[j];
        } else {
          break;
        }
      }
      prefix = newPrefix;
    }
  }
  return prefix;
};
const longestCommonPrefixBetter = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix.length === 0) {
        return '';
      }
    }
  }
  return prefix;
};
// console.log(longestCommonPrefix(['ab', 'a']));
/*
Time complexity: O(n^2)- n refers to the length of the string. 
Space complexity: O(1)
 */

//link to problem: https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i + 1) {
      return Math.max(count, citations[i]);
    }
    if (citations[i] > 0) {
      count++;
    }
  }

  return count;
};
/* Time complexity: O(n log n)
Space complexity: might be O(log n) or O(n) because of the sort
 */
const hIndexBetter = function (citations) {
  const n = citations.length;
  const count = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n) {
      count[n]++;
    } else {
      count[citations[i]]++;
    }
  }

  let total = 0;
  for (let i = n; i >= 0; i--) {
    total += count[i];
    if (total >= i) {
      return i;
    }
  }
};
/* Time complexity: O(n) n refers to the length of citation. 
Space complexity: O(n) n refers to the length of citation. 
 */

// console.log('h', hIndex([4, 4, 0, 0])); //2
// console.log('h', hIndex([3, 0, 6, 1, 5])); //3
// console.log('h', hIndex([1, 3, 1])); //1
// console.log('h', hIndexBetter([4, 4, 0, 0])); //2
// console.log('h', hIndexBetter([3, 0, 6, 1, 5])); //3
// console.log('h', hIndexBetter([1, 3, 1])); //1

//Link to problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  let cur;
  while (i < j) {
    cur = numbers[i] + numbers[j];

    if (cur === target) {
      return [i + 1, j + 1];
    }
    if (cur > target) {
      j--;
    } else if (cur < target) {
      i++;
    }
  }
};
// console.log(twoSum([2, 7, 11, 15]));
/*
Time Complexity: O(n)- ne refers to the length of the array
Space complexity: O(1)
*/

//Link to problem: https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let mostWater = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let waterArea = Math.min(height[i], height[j]) * (j - i);
      mostWater = Math.max(waterArea, mostWater);
    }
  }
  return mostWater;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
/*
Time Complexity: O(n^2)- n refers to the length of the array
Space complexity: O(1)
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxAreaRefactor = function (height) {
  let mostWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let waterArea = Math.min(height[left], height[right]) * (right - left);
    mostWater = Math.max(waterArea, mostWater);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return mostWater;
};

// console.log(maxAreaRefactor([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxAreaRefactor([1, 2, 6, 10, 11, 2, 1]));
// console.log(maxAreaRefactor([1, 2, 80, 3, 4, 50, 2, 1]));
// console.log(maxAreaRefactor([1, 1]));

/*
Time Complexity: O(n)- n refers to the length of the array
Space complexity: O(1) */

//Link to problem: https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const magazineLetters = {};

  for (let m of magazine) {
    magazineLetters[m] = (magazineLetters[m] || 0) + 1;
  }

  for (r of ransomNote) {
    if (!magazineLetters[r]) {
      return false;
    } else {
      magazineLetters[r]--;
    }
  }

  return true;
};

// console.log(canConstruct('a', 'b'));
// console.log(canConstruct('aa', 'ab'));
// console.log(canConstruct('aa', 'aab'));
// console.log(canConstruct('aab', 'baa'));
// console.log(canConstruct('aaaba', 'baaab'));

/*
Time Complexity: O(m+n). n refers to the length of the string ransomNote and m refers to the length of the string magazine.
Space complexity: O(m). m refers to the length of the string magazine.
*/

//Link to problem: https://leetcode.com/problems/3sum/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const threeSome = [];
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    sum = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      sum += nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        sum += nums[k];
        if (sum === 0) {
          console.log('Sum', sum);
          console.log(nums[i], nums[j], nums[k]);
          threeSome.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return threeSome;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4, -1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));

/**
 Time Complexity: O(n^3), n refers to the length of the array. 
 */

const threeSumRefactor = function (nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        triplets.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        k--;
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return triplets;
};

// console.log(threeSumRefactor([-1, 0, 1, 2, -1, -4, -1, 0, 1, 2, -1, -4]));
// console.log(threeSumRefactor([0, 1, 1]));
// console.log(threeSumRefactor([0, 0, 0]));

/**
  Time Complexity: O(N^2), since sorting the array is O(n log n) and the two-pointer approach within each iteration of the main loop is O(n). 
  Space Complexity: O(m)+ O(log n). O(m) for the triplets array and O(log n) for the sort (the sort might also be O(n))
 */
