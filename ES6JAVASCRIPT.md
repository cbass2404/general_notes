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
    return user.name === "Alex";
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

## reduce

---

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
