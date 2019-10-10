"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
//: if input is true return true
const isTrue = inp => inp === true;

//: should return true if value is false
const isFalse = value => value === false

console.log(isFalse())


//: returns a boolean opposite of what it is
const not = inp => !inp

//: I did not check input type
const addOne = inp => Number(inp) + 1

//: is an even
const isEven = inp => inp % 2 == 0

//: exact data and type
const isIdentical = (a,b) => a === b

//: equal only in value
const isEqual = (a,b) => a == b;

//:the OR of both values boolean
const or = (a,b) => a || b

//:the AND of both values booleans
const and = (a,b) => a && b;

//:make both variables strings and concat them
const concat = (a,b) => a.toString() + b.toString()
