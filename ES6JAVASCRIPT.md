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
    -   thisValue
        -   Optional. A value to be passed to the function to be used as its "this" value.

_If this parameter is empty, the value "undefined" will be passed as its "this" value_

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
    -   thisValue
        -   Optional. A value to be passed to the function to be used as its "this" value.

_If this parameter is empty, the value "undefined" will be passed as its "this" value_

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

var primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];

primaryColors.reduce(function (prev, primaryColor) {
    prev.push(primaryColor.color);

    return prev;
}, []);

// great practical way to use reduce to check for opening closing balance
function balancedParens(string) {
    return !string.split('').reduce(function (prev, char) {
        if (prev < 0) {
            return prev;
        }
        if (char === '(') {
            return ++prev;
        }
        if (char === ')') {
            return --prev;
        }
        return prev;
    }, 0);
}

balancedParens('((()))');
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
    -   initialValue
        -   Optional. A value to be passed to the function as the initial value

## const/let

---

```javascript
// antiquated and un-needed
var color = red;

// used when you expect the value to change over time
let color = red;

// used when you expect the value to never change
const color = red;

// ES5
var name = 'Jane';
var title = 'Software Engineer';
var hourlyWage = 40;

// ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourly = 40;

// some time later
title = 'Sr Software Engineer';
hourly = 45;
```

## template strings

---

```javascript
// es5
function getMessage() {
    const year = new Date().getFullYear();

    return 'the year is ' + year;
}

// es6
function getMesage() {
    const year = new Date().getFullYear();

    return `the year is ${year}`;
}
```

## arrow functions

---

```javascript
// standard
const add = function (a, b) {
    return a + b;
};

// ES6 fat arrow function
const add = (a, b) => {
    return a + b;
};

// ES6 fat arrow implicit return
const add = (a, b) => a + b;

// ES6 fat arrow with single argument
// With a single argument you don't need parenthesis on the argument
// However prettier doesn't care and adds it anyways
const doublt = (number) => number * 2;

// Example with helper function
const numbers = [1, 2, 3];

numbers.map((number) => 2 * number);
```

When to use fat arrow functions:

```javascript
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    },
};
```

-   Fat arrow functions make use of lexical this
    -   Lexical means the placement of 'this' determines how it is interpreted or evaluated
-   Fat arrow functions make 'this' work the way we always expected it to

## enhanced object literals

---

```javascript
// ES5
function createBookShip(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function () {
            return this.inventory.reduce(
                (total, book) => total + book.price,
                0
            );
        },
        priceForTitle: function (title) {
            return this.inventory.find((book) => book.title === title).price;
        },
    };
}

// ES6
function createBookShip(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce(
                (total, book) => total + book.price,
                0
            );
        },
        priceForTitle(title) {
            return this.inventory.find((book) => book.title === title).price;
        },
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 },
];

const bookShop = createBookShip(inventory);

// Another Example

// ES5
function saveFile() {
    $.ajax({ method: 'POST', url: url, data: data });
}

// ES6
function saveFile() {
    $.ajax({
        url,
        data,
        method: 'POST',
    });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };
```

## default function arguments

---

```javascript
// ES5
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }

    // logic to make the request
}

// ES6
function makeAjaxRequest(url, method = 'GET') {
    //logic to make the request
}

// If you want to force a default argument to be null do the following:
makeAjaxRequest('lkasdjf.com', null);

// User management
function createAdminUser(user = new User(generateId())) {
    user.admin = true;

    return user;
}
```

_null does not reassign the default argument, it nullifies its existance_

## rest and spread operator

---

```javascript
// ES5
function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

// Rest Operator is used to capture a list of an unknown amount of arguments
// Spread Operator is used to spread the list into a usable spot
// ES6
function addNumbers(...numbers) {
    const numArray = [...numbers];
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

addNumbers(1, 2, 3, 4, 5);

// To spread into an array
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// ES5
defaultColors.concat(userFavoriteColors);

// ES6
const concat = ['blue', ...fallColors, ...defaultColors, userFavoriteColors];

function validateShoppingList() {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
}

validateShoppingList('oranges', 'bread', 'eggs');

// A real use example to rename a function without breaking code
const MathLibrary = {
    calculateProduct(a, b) {
        return a * b;
    },
    multiply(a, b) {
        return a * b;
    },
};

// with spread
const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    },
};
```

## destructuring

---

Destructuring Objects:

```javascript
// ES5
var expense = {
    type: 'Business',
    amount: '$45 USD',
};

var type = expense.type;
var amount = expense.amount;

// ES6
const { type, amount } = expense;
```

_if you destructure a key that doesn't exist it returns as undefined_

Destructuring Argument Objects:

```javascript
var savedFile = {
    extension: '.jpg',
    name: 'repost',
    size: 14040,
};

// ES5
function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

// ES6
function fileSummary({ name, extension, size }) {
    return `The file ${name}.${extension} is of size ${size}`;
}
```

Destructuring Arrays

```javascript
const companies = ['Google', 'Facebook', 'Uber'];

// ES5
const firstCompany = companies[0];

// ES6
const [name1, name2, name3, name4, ...rest] = companies;

// To destructure off properties of an array you use curly brackets
const { length } = companies;
```

Destructuring Arrays and Objects _at the same time_

```javascript
const companies = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Francisco'},
]

const [{location}, ...rest]

// Another example
const Google = {
    locations: ['Mountain View', 'New York', 'London']
}

const {locations: [location]} = Google;
```

When to Use

```javascript
// When you have a very long arg list for a function, especially when it is stored in a seperate file
// Destructuring the arguments into and from objects removes the need to have them in a specific order when
function signup({ username, password, email, dateOfBirth, city }) {
    // create new user
}
const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/1990',
    city: 'New York',
};
signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');

// Another example of when to use
const points = [
    [4, 5],
    [10, 1],
    [0, 40],
];

// the program may need another format
points.map(([x, y]) => {
    return { x, y };
});
```

## classes

---

```javascript
// notes and code
```

## generators

---

```javascript
// notes and code
```

## promises and fetch

---

```javascript
// notes and code
```
