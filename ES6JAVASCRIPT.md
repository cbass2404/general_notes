# ES6 Javascript Helpers and syntax

---

## Table of Contents:

-   [ForEach](##forEach)

-   [Map](##map)

-   [Filter](##filter)

-   [Find](##find)

-   ['Ever' and 'Some'](##'every'-and-'some')

-   [Reduce](##reduce)

-   [Const/Let](##const/let)

-   [Template Strings](##template-strings)

-   [Arrow Functions](##arrow-functions)

-   [Enhanced Object Literals](##enhanced-object-literals)

-   [Default Function Arguments](##default-function-arguments)

-   [Rest and Spread Operator](##rest-and-spread-operator)

-   [Destructuring](##destructuring)

-   [Classes](##classes)

-   [Generators](##generators)

-   [Promises and Fetch](##promises-and-fetch)

## forEach

---

```javascript
colors.forEach((color) => console.log(color));
```

-   forEach works on arrays
-   calls a function once for each element in an array, in order
-   returns no value

```javascript
array.forEach(function(currentValue, index, arr), thisValue)
```

-   currentValue
    -   Required. The value of the current element
-   index
    -   Optional. The array index of the current element
-   arr
    -   Optional. The array object the current element belongs to
-   thisValue
    -   Optional. A value to be passed to the function to be used as its "this" value.
    -   If this parameter is empty, the value "undefined" will be passed as its "this" value

## map

---

```javascript
numbers.map((number) => {
    return number * 2;
});
```

-   forEach works on arrays
-   calls a function once for each element in an array, in order
-   returns value

```javascript
array.map(function(currentValue, index, arr), thisValue)
```

-   currentValue
    -   Required. The value of the current element
-   index
    -   Optional. The array index of the current element
-   arr

    -   Optional. The array object the current element belongs to

-   thisValue
    -   Optional. A value to be passed to the function to be used as its "this" value.
    -   If this parameter is empty, the value "undefined" will be passed as its "this" value

## filter

---

```javascript
array.filter((item) => item === value);
```

-   The filter() method creates an array filled with all array elements that pass a test (provided as a function).

_filter() does not execute the function for array elements without values_

_filter() does not change the original array_

```javascript
array.filter(function(currentValue, index, arr), thisValue)
```

-   currentValue
    -   Required. The value of the current element
-   index
    -   Optional. The array index of the current element
-   arr
    -   Optional. The array object the current element belongs to
-   thisValue
    -   Optional. A value to be passed to the function to be used as its "this" value.
    -   If this parameter is empty, the value "undefined" will be passed as its "this" value

## find

---

```javascript
users.find((user) => {
    return user.name === 'Alex';
});
```

-   The find() method returns the value of the first element in an array that pass a test (provided as a function).

-   The find() method executes the function once for each element present in the array:

    -   If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
    -   Otherwise it returns undefined

-   Only returns the first find not a second

-   Does not work on empty arrays

-   Does not change original array

```javascript
array.find(function(currentValue, index, arr),thisValue)
```

-   currentValue
    -   Required. The value of the current element
-   index
    -   Optional. The array index of the current element
-   arr
    -   Optional. The array object the current element belongs to
-   thisValue

    -   Optional. A value to be passed to the function to be used as its "this" value.

    -   If this parameter is empty, the value "undefined" will be passed as its "this" value

## 'every' and 'some'

---

```javascript
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 },
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

// with every
// returns false because one of them is not greater than 16
computers.every(function (computer) {
    return computer.ram > 16;
});

// with some
// returns true because at least one of the computers is greater than 16
computers.some(function (computer) {
    return computer.ram > 16;
});
```

### Every

-   The every() method checks if all elements in an array pass a test (provided as a function).

-   The every() method executes the function once for each element present in the array:

    -   If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
    -   If no false occur, every() returns true

-   every() does not execute the function for array elements without values.

-   every() does not change the original array

```javascript
array.every(function(currentValue, index, arr), thisValue)
```

-   Required. A function to be run for each element in the array.
    -   Function arguments:
        -   currentValue
            -   Required. The value of the current element
        -   index
            -   Optional. The array index of the current element
        -   arr
            -   Optional. The array object the current element belongs to
        -   thisValue
            -   Optional. A value to be passed to the function to be used as its "this" value.
            -   If this parameter is empty, the value "undefined" will be passed as its "this" value

### Some

-   The some() method checks if any of the elements in an array pass a test (provided as a function).

-   The some() method executes the function once for each element present in the array:

    -   If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
    -   Otherwise it returns false

-   some() does not execute the function for array elements without values.

-   some() does not change the original array

```javascript
array.some(function(currentValue, index, arr), thisValue)
```

-   Required. A function to be run for each element in the array.
    -   Function arguments:
        -   currentValue
            -   Required. The value of the current element
        -   index
            -   Optional. The array index of the current element
        -   arr
            -   Optional. The array object the current element belongs to

## reduce

---

```javascript
var numbers = [10, 20, 30];
var sum = 0;

// for loop version
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// reduce function version
numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

var primaryColors = [
    {color: 'red'},
    {color: 'yellow},
    {color: 'blue'}
]

primaryColors.reduce(function(prev, primaryColor){
    prev.push(primaryColor.color);

    return prev
}, [])

// great practical way to use reduce to check for opening closing balance
function balancedParens(string){
    return !string.split('').reduce(function(prev, char){
        if(prev < 0){return prev}
        if(char === "("){return ++prev}
        if(char === ")"){return --prev}
        return prev
    }, 0)
}

balancedParens("((()))")
```

-   The reduce() method reduces the array to a single value.

-   The reduce() method executes a provided function for each value of the array (from left-to-right).

-   The return value of the function is stored in an accumulator (result/total).

-   reduce() does not execute the function for array elements without values.

-   This method does not change the original array.

```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

-   Required. A function to be run for each element in the array.
    -   Function arguments:
        -   total
            -   Required. The initialValue, or the previously returned value of the function
        -   currentValue
            -   Required. The value of the current element
        -   currentIndex
            -   Optional. The array index of the current element
        -   arr
            -   Optional. The array object the current element belongs to

## const/let

---

## template strings

---

## arrow functions

---

## enhanced object literals

---

## default function arguments

---

## rest and spread operator

---

## destructuring

---

## classes

---

## generators

---

## promises and fetch

---
