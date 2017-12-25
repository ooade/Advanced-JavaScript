# Advanced-JavaScript

This documentation is based on John Resig's website on Advanced JavaScript. If these concepts seem complex to you, i recommend [these resources](https://github.com/micromata/awesome-javascript-learning) and also strongly recommend [FreeCodeCamp - Learn to code and help nonprofits](https://www.freecodecamp.org). If you feel you know most of these concepts, you could just try out the [quizzes](#quizzes) and you're good to go.

## Content

- [Goal](#goal)
- [Helper Methods](#helper-methods)
- [Lessons](#lessons)
  - [Defining Functions](#defining-functions)
    - [Order of function definition](#order-of-function-definition)
    - [Where can assignment be accessed](#where-can-assignments-be-accessed)
    - [Can functions be defined below return statements](#can-functions-be-defined-below-return-statements)
  - [Named Functions](#named-functions)
    - [What is the name of a function](#what-is-the-name-of-a-function)
    - [With anonymous function that's an object property](#with-anonymous-function-thats-an-object-property)
    - [What happens when we remove the original object](#what-happens-when-we-remove-the-original-object)
    - [Let's give the anonymous function a name](#lets-give-the-anonymous-function-a-name)
  - [Functions as Objects](#functions-as-objects)
    - [How similar are functions and objects](#how-similar-are-functions-and-objects)
    - [Is it possible to cache the return results from a function](#is-it-possible-to-cache-the-return-results-from-a-function)
    - [One possible way to cache the results](#one-possible-way-to-cache-the-results)
  - [Context](#context)
    - [What happens if a function is an object property](#what-happens-if-a-function-is-an-object-property)
    - [What exactly does context represent](#what-exactly-does-context-represent)
    - [How can we change the context of a function](#how-can-we-change-the-context-of-a-function)
    - [Different ways of changing the context](#different-ways-of-changing-the-context)
    - [How can we implement looping with a callback](#how-can-we-implement-looping-with-a-callback)
    - [A possible solution for function looping](#a-possible-solution-for-function-looping)
  - [Instantiation](#instantiation)
    - [What does the new operator do](#what-does-the-new-operator-do)
    - [We have a 'this' context that is a Ninja object](#we-have-a-this-context-that-is-a-ninja-object)
    - [Add a new property and method to the object](#add-a-new-property-and-method-to-the-object)
    - [What happens when we forget to use the new operator](#what-happens-when-we-forget-to-use-the-new-operator)
    - [Cont: What happens when we forget to use the new operator](#cont-what-happens-when-we-forget-to-use-the-new-operator)
    - [We need to make sure that the new operator is always used](#we-need-to-make-sure-that-the-new-operator-is-always-used)
    - [A solution using arguments.callee](#a-solution-using-arguments-callee)
  - [Flexible Arguments](#flexible-arguments)
    - [Using a variable number of arguments to our advantage](#using-a-variable-number-of-arguments-to-our-advantage)
    - [How can we find the Min/Max number in an array](#how-can-we-find-the-min-max-number-in-an-array)
    - [Another possible solution](#another-possible-solution)
    - [Uh oh, what's going wrong here](#uh-oh-whats-going-wrong-here)
    - [We can use built-in methods to our advantage](#we-can-use-built-in-methods-to-our-advantage)
    - [We can use call and apply to build a solution](#we-can-use-call-and-apply-to-build-a-solution)
  - [Closures](#closures)
    - [But why doesn't this work](#but-why-doesnt-this-work)
    - [Closures are frequently used for callbacks](#closures-are-frequently-used-for-callbacks)
    - [They're also useful for timers](#theyre-also-useful-for-timers)
    - [And they're also frequently used when attaching event listeners](#and-theyre-also-frequently-used-when-attaching-event-listeners)
    - [Private properties, using closures](#private-properties-using-closures)
    - [The last one is quite tricky, we'll revisit it](#the-last-one-is-quite-tricky-well-revisit-it)
  - [Temporary Scope](#temporary-scope)
    - [Self-executing, temporary, function](#self-executing-temporary-function)
    - [Now we can handle closures and looping](#now-we-can-handle-closures-and-looping)
    - [The anonymous wrapper functions are also useful for wrapping libraries](#the-anonymous-wrapper-functions-are-also-useful-for-wrapping-libraries)
    - [Another way to wrap a library](#another-way-to-wrap-a-library)
    - [A quick wrapper function will do the trick](#a-quick-wrapper-function-will-do-the-trick)
  - [Function Prototypes](#function-prototypes)
    - [Adding a prototyped method to a function](#adding-a-prototyped-method-to-a-function)
    - [Properties added in the constructor (or later) override prototyped properties](#properties-added-in-the-constructor-or-later-override-prototyped-properties)
    - [Prototyped properties affect all objects of the same constructor, simultaneously, even if they already exist](#prototyped-properties-affect-all-objects-of-the-same-constructor-simultaneously-even-if-they-already-exist)
    - [The chainable method must return this](#the-chainable-method-must-return-this)
  - [Instance Type](#instance-type)
    - [Examining the basics of an object](#examining-the-basics-of-an-object)
    - [We can still use the constructor to build other instances](#we-can-still-use-the-constructor-to-build-other-instances)
    - [Use the .constructor property to dig in](#use-the-constructor-property-to-dig-in)
  - [Inheritance](#inheritance)
    - [The basics of how prototypal inheritance works](#the-basics-of-how-prototypal-inheritance-works)
    - [The result is rather straight-forward](#the-result-is-rather-straight-forward)
  - [Built-in Prototypes](#built-in-prototypes)
    - [We can also modify built-in object prototypes](#we-can-also-modify-built-in-object-prototypes)
    - [Beware: Extending prototypes can be dangerous](#beware-extending-prototypes-can-be-dangerous)
  - [Enforcing Function Context](#enforcing-function-context)
    - [What happens when we try to bind an object's method to a click handler](#what-happens-when-we-try-to-bind-an-objects-method-to-a-click-handler)
    - [We need to keep its context as the original object](#we-need-to-keep-its-context-as-the-original-object)
    - [Add a method to all functions to allow context enforcement](#add-a-method-to-all-functions-to-allow-context-enforcement)
    - [Our final target (the .bind method from Prototype.js)](#our-final-target-the-bind-method-from-prototype-js)
  - [Bonus: Function Length](#bonus-function-length)
    - [How does a function's length property work](#how-does-a-functions-length-property-work)
    - [We can use it to implement method overloading](#we-can-use-it-to-implement-method-overloading)
    - [How method overloading might work, using the function length property](#how-method-overloading-might-work-using-the-function-length-property)
- [Quizzes](#quizzes)
  - [QUIZ: Can you cache the results of this function](#quiz-can-you-cache-the-results-of-this-function)
  - [QUIZ: Add a method that gives a name to the ninja](#quiz-add-a-method-that-gives-a-name-to-the-ninja)
  - [QUIZ: Is there another, more generic, way of doing this](#quiz-is-there-another-more-generic-way-of-doing-this)
  - [QUIZ: We must convert array-like objects into actual arrays. Can any built-in methods help](#quiz-we-must-convert-array-like-objects-into-actual-arrays-can-any-built-in-methods-help)
  - [QUIZ: Implement a multiplication function (first argument by largest number)](#quiz-implement-a-multiplication-function-first-argument-by-largest-number-)
  - [QUIZ: What are the values of the variables](#quiz-what-are-the-values-of-the-variables)
  - [QUIZ: Fix the broken closures in this loop](#quiz-fix-the-broken-closures-in-this-loop)
  - [QUIZ: Make a chainable Ninja method](#quiz-make-a-chainable-ninja-method)
  - [QUIZ: Make another instance of a Ninja](#quiz-make-another-instance-of-a-ninja)
  - [QUIZ: Let's try our hand at inheritance](#quiz-lets-try-our-hand-at-inheritance)

### Goal

To be able to understand this function:

```js
// The .bind method from Prototype.js
Function.prototype.bind = function(){
  var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
  return function(){
    return fn.apply(object,
      args.concat(Array.prototype.slice.call(arguments)));
  };
};
```

### Helper Methods

```js
assert( true, "I'll pass." ); //passes
assert( "truey", "So will I." ); //passes
assert( false, "I'll fail." ); //fails
assert( null, "So will I." ); //fails
log( "Just a simple log", "of", "values.", true );
error( "I'm an error!" );
```

## Lessons

### Defining Functions

Functions can be defined like these:

```js
function isNimble(){ return true; }
var canFly = function(){ return true; };
window.isDeadly = function(){ return true; };
log(isNimble, canFly, isDeadly);
```

#### Order of function definition

Order doesn't matter for [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) like `isNimble`.

```js
var canFly = function(){ return true; };
window.isDeadly = function(){ return true; };
assert( isNimble() && canFly() && isDeadly(), "Still works, even though isNimble is moved." );
function isNimble(){ return true; }
```

#### Where can assignments be accessed

The Order does matter for `canFly` and `isDeadly`.

```js
assert( typeof canFly == "undefined", "canFly doesn't get that benefit." );
assert( typeof isDeadly == "undefined", "Nor does isDeadly." );
var canFly = function(){ return true; };
window.isDeadly = function(){ return true; };
```

#### Can functions be defined below return statements

Yes, can be defined but can be called below return statements.

```js
function stealthCheck(){
  assert( stealth(), "We'll never get below the return, but that's OK!" );

  return stealth();

  function stealth(){ return true; }
}

stealthCheck();
```

### Named Functions

We can refer to a function, within itself, by its name.

```js
function yell(n){
  return n > 0  yell(n-1) + "a" : "hiy";
}
assert( yell(4) == "hiyaaaa", "Calling the function by itself comes naturally." );
```

#### What is the name of a function

```js
var ninja = function myNinja(){
  assert( ninja == myNinja, "This function is named two things - at once!" );
};
ninja();
assert( typeof myNinja == "undefined", "But myNinja isn't defined outside of the function." ); // myNinja exist only within the function scope
log( ninja );
```

#### With anonymous function that's an object property

Yeah, we could also have "hiyaaaa" displayed, with an anonymous function that's an Object Property.

```js
var ninja = {
  yell: function(n){
    return n > 0  ninja.yell(n-1) + "a" : "hiy";
  }
};
assert( ninja.yell(4) == "hiyaaaa", "A single object isn't too bad, either." );
```

#### What happens when we remove the original object

```js
var ninja = {
  yell: function(n){
    return n > 0  ninja.yell(n-1) + "a" : "hiy";
  }
};
assert( ninja.yell(4) == "hiyaaaa", "A single object isn't too bad, either." );

var samurai = { yell: ninja.yell };
var ninja = null;

try {
  samurai.yell(4);
} catch(e){
  assert( false, "Uh, this isn't good! Where'd ninja.yell go" );
}
```

#### Let's give the anonymous function a name

```js
var ninja = {
  yell: function yell(n){
    return n > 0  yell(n-1) + "a" : "hiy";
  }
};
assert( ninja.yell(4) == "hiyaaaa", "Works as we would expect it to!" );

var samurai = { yell: ninja.yell };
var ninja = null;
assert( samurai.yell(4) == "hiyaaaa", "The method correctly calls itself." );
```

#### What if we don't want to give the function a name

`arguments.callee` does the trick here :)

```js
var ninja = {
  yell: function(n){
    return n > 0  arguments.callee(n-1) + "a" : "hiy";
  }
};
assert( ninja.yell(4) == "hiyaaaa", "arguments.callee is the function itself." );
```

### Functions as Objects

#### How similar are functions and objects

```js
var obj = {};
var fn = function(){};
assert( obj && fn, "Both the object and function exist." );
```

More similarity:

```js
var obj = {};
var fn = function(){};
obj.prop = "some value";
fn.prop = "some value";
assert( obj.prop == fn.prop, "Both are objects, both have the property." );
```

#### Is it possible to cache the return results from a function

Yes! It is.

```js
function getElements( name ) {
  var results;

  if ( getElements.cache[name] ) {
    results = getElements.cache[name];
  } else {
    results = document.getElementsByTagName(name);
    getElements.cache[name] = results;
  }

  return results;
}
getElements.cache = {};

log( "Elements found: ", getElements("pre").length );
log( "Cache found: ", getElements.cache.pre.length );
```

#### QUIZ: Can you cache the results of this function

```js
function isPrime( num ) {
  var prime = num != 1; // Everything but 1 can be prime
  for ( var i = 2; i < num; i++ ) {
    if ( num % i == 0 ) {
      prime = false;
      break;
    }
  }
  return prime;
}

assert( isPrime(5), "Make sure the function works, 5 is prime." );
assert( isPrime.cache[5], "Is the answer cached" );
```

#### One possible way to cache the results

```js
function isPrime( num ) {
  if ( isPrime.cache[ num ] != null )
    return isPrime.cache[ num ];

  var prime = num != 1; // Everything but 1 can be prime
  for ( var i = 2; i < num; i++ ) {
    if ( num % i == 0 ) {
      prime = false;
      break;
    }
  }

  isPrime.cache[ num ] = prime

  return prime;
}

isPrime.cache = {};

assert( isPrime(5), "Make sure the function works, 5 is prime." );
assert( isPrime.cache[5], "Make sure the answer is cached." );
```

### Context

#### What happens if a function is an object property

```js
var katana = {
  isSharp: true,
  use: function(){
    this.isSharp = !this.isSharp;
  }
};
katana.use();
assert( !katana.isSharp, "Verify the value of isSharp has been changed." );
```

#### What exactly does context represent

```js
function katana(){
  this.isSharp = true;
}
katana();
assert( isSharp === true, "A global object now exists with that name and value." );

var shuriken = {
  toss: function(){
    this.isSharp = true;
  }
};
shuriken.toss();
assert( shuriken.isSharp === true, "When it's an object property, the value is set within the object." );
```

#### How can we change the context of a function

```js
var object = {};
function fn(){
  return this;
}
assert( fn() == this, "The context is the global object." );
assert( fn.call(object) == object, "The context is changed to a specific object." );
```

#### Different ways of changing the context

```js
function add(a, b){
  return a + b;
}
assert( add.call(this, 1, 2) == 3, ".call() takes individual arguments" );
assert( add.apply(this, [1, 2]) == 3, ".apply() takes an array of arguments" );
```

#### QUIZ: How can we implement looping with a callback

```js
function loop(array, fn){
  for ( var i = 0; i < array.length; i++ ) {
    // Implement me!
  }
}
var num = 0;
loop([0, 1, 2], function(value){
  assert(value == num++, "Make sure the contents are as we expect it.");
  assert(this instanceof Array, "The context should be the full array.");
});
```

<!---
  TODO: This needs improvements tho because if we forget to pass the the necessary args, it will still pass. i.e: fn.call(array, i); // oops!
-->

#### A possible solution for function looping

```js
function loop(array, fn){
  for ( var i = 0; i < array.length; i++ )
    fn.call( array, array[i], i );
}
var num = 0;
loop([0, 1, 2], function(value, i){
  assert(value == num++, "Make sure the contents are as we expect it.");
  assert(this instanceof Array, "The context should be the full array.");
});
```

### Instantiation

#### What does the new operator do

```js
function Ninja(){
  this.name = "Ninja";
}

var ninjaA = Ninja();
assert( !ninjaA, "Is undefined, not an instance of Ninja." );

var ninjaB = new Ninja();
assert( ninjaB.name == "Ninja", "Property exists on the ninja instance." );
```

#### We have a 'this' context that is a Ninja object

```js
function Ninja(){
  this.swung = false;

  // Should return true
  this.swingSword = function(){
    this.swung = !this.swung;
    return this.swung;
  };
}

var ninja = new Ninja();
assert( ninja.swingSword(), "Calling the instance method." );
assert( ninja.swung, "The ninja has swung the sword." );

var ninjaB = new Ninja();
assert( !ninjaB.swung, "Make sure that the ninja has not swung his sword." );
```

#### QUIZ: Add a method that gives a name to the ninja

```js
function Ninja(name){
  // Implement!
}

var ninja = new Ninja("John");
assert( ninja.name == "John", "The name has been set on initialization" );

ninja.changeName("Bob");
assert( ninja.name == "Bob", "The name was successfully changed." );
```

#### Add a new property and method to the object

```js
function Ninja(name){
  this.changeName = function(name){
    this.name = name;
  };

  this.changeName( name );
}

var ninja = new Ninja("John");
assert( ninja.name == "John", "The name has been set on initialization" );

ninja.changeName("Bob");
assert( ninja.name == "Bob", "The name was successfully changed." );
```

#### What happens when we forget to use the new operator

```js
function User(first, last){
  this.name = first + " " + last;
}

var user = User("John", "Resig");
assert( typeof user == "undefined", "Since new wasn't used, the instance is undefined." );
```

#### Cont: What happens when we forget to use the new operator

```js
function User(first, last){
  this.name = first + " " + last;
}

window.name = "Resig";
var user = User("John", name);

assert( name == "John Resig", "The name variable is accidentally overridden." );
```

#### We need to make sure that the new operator is always used

```js
function User(first, last){
  if ( !(this instanceof User) )
    return new User(first, last);

  this.name = first + " " + last;
}

var name = "Resig";
var user = User("John", name);

assert( user, "This was defined correctly, even if it was by mistake." );
assert( name == "Resig", "The right name was maintained." );
```

#### QUIZ: Is there another, more generic, way of doing this

```js
function User(first, last){
  // Replace ___ with a value
  if ( !(this instanceof ___) )
    return new User(first, last);

  this.name = first + " " + last;
}

var name = "Resig";
var user = User("John", name);

assert( user, "This was defined correctly, even if it was by mistake." );
assert( name == "Resig", "The right name was maintained." );
```

#### A solution using arguments.callee

```js
function User(first, last){
  if ( !(this instanceof arguments.callee) )
    return new User(first, last);

  this.name = first + " " + last;
}

var name = "Resig";
var user = User("John", name);

assert( user, "This was defined correctly, even if it was by mistake." );
assert( name == "Resig", "The right name was maintained." );
```

### Flexible Arguments

#### Using a variable number of arguments to our advantage

```js
function merge(root){
  for ( var i = 1; i < arguments.length; i++ )
    for ( var key in arguments[i] )
      root[key] = arguments[i][key];
  return root;
}

var merged = merge({name: "John"}, {city: "Boston"});
assert( merged.name == "John", "The original name is intact." );
assert( merged.city == "Boston", "And the city has been copied over." );
```

#### How can we find the Min/Max number in an array

```js
function smallest(array){
  return Math.min.apply( Math, array );
}
function largest(array){
  return Math.max.apply( Math, array );
}
assert(smallest([0, 1, 2, 3]) == 0, "Locate the smallest value.");
assert(largest([0, 1, 2, 3]) == 3, "Locate the largest value.");
```

#### Another possible solution

```js
function smallest(){
  return Math.min.apply( Math, arguments );
}
function largest(){
  return Math.max.apply( Math, arguments );
}
assert(smallest(0, 1, 2, 3) == 0, "Locate the smallest value.");
assert(largest(0, 1, 2, 3) == 3, "Locate the largest value.");
```

#### Uh oh, what's going wrong here

```js
function highest(){
  return arguments.sort(function(a,b){
    return b - a;
  });
}
assert(highest(1, 1, 2, 3)[0] == 3, "Get the highest value.");
assert(highest(3, 1, 2, 3, 4, 5)[1] == 4, "Verify the results.");
```

#### QUIZ: We must convert array-like objects into actual arrays. Can any built-in methods help

<!-- TODO: Remove the slice method on makeArray; Misguided as the first num will chopped off -->

```js
// Hint: Arrays have .slice and .splice methods which return new arrays.
function highest(){
  return makeArray(arguments).slice(1).sort(function(a,b){
    return b - a;
  });
}

function makeArray(array){
  // Implement me!
}

// Expecting: [3,2,1]
assert(highest(1, 1, 2, 3)[0] == 3, "Get the highest value.");
// Expecting: [5,4,3,2,1]
assert(highest(3, 1, 2, 3, 4, 5)[1] == 4, "Verify the results.");
```

#### We can use built-in methods to our advantage

```js
function highest(){
  return makeArray(arguments).sort(function(a,b){
    return b - a;
  });
}

function makeArray(array){
  return Array().slice.call( array );
}

assert(highest(1, 1, 2, 3)[0] == 3, "Get the highest value.");
assert(highest(3, 1, 2, 3, 4, 5)[1] == 4, "Verify the results.");
```

#### QUIZ: Implement a multiplication function (first argument by largest number)

```js
function multiMax(multi){
  // Make an array of all but the first argument
  var allButFirst = ___;

  // Find the largest number in that array of arguments
  var largestAllButFirst = ___;

  // Return the multiplied result
  return multi * largestAllButFirst;
}
assert( multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)" );
```

#### We can use call and apply to build a solution

```js
function multiMax(multi){
  // Make an array of all but the first argument
  var allButFirst = Array().slice.call( arguments, 1 );

  // Find the largest number in that array of arguments
  var largestAllButFirst = Math.max.apply( Math, allButFirst );

  // Return the multiplied result
  return multi * largestAllButFirst;
}
assert( multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)" );
```

### Closures

A basic closure:

```js
var num = 10;

function addNum(myNum){
  return num + myNum;
}

assert( addNum(5) == 15, "Add two numbers together, one from a closure." );
```

#### But why doesn't this work

```js
var num = 10;

function addNum(myNum){
  return num + myNum;
}

num = 15;

assert( addNum(5) == 15, "Add two numbers together, one from a closure." );
```

#### Closures are frequently used for callbacks

```js
var results = jQuery("#results").html("<li>Loading...</li>");

jQuery.get("test.html", function(html){
  results.html( html );
  assert( results, "The element to append to, via a closure." );
});
```

#### They're also useful for timers

```js
var count = 0;

var timer = setInterval(function(){
  if ( count < 5 ) {
    log( "Timer call: ", count );
    count++;
  } else {
    assert( count == 5, "Count came via a closure, accessed each step." );
    assert( timer, "The timer reference is also via a closure." );
    clearInterval( timer );
  }
}, 100);
```

#### And they're also frequently used when attaching event listeners

```js
var count = 1;
var elem = document.createElement("li");
elem.innerHTML = "Click me!";
elem.onclick = function(){
  log( "Click #", count++ );
};
document.getElementById("results").appendChild( elem );
assert( elem.parentNode, "Clickable element appended." );
```

#### Private properties, using closures

```js
function Ninja(){
  var slices = 0;

  this.getSlices = function(){
    return slices;
  };
  this.slice = function(){
    slices++;
  };
}

var ninja = new Ninja();
ninja.slice();
assert( ninja.getSlices() == 1, "We're able to access the internal slice data." );
assert( ninja.slices === undefined, "And the private data is inaccessible to us." );
```

#### QUIZ: What are the values of the variables

```js
var a = 5;
function runMe(a){
 assert( a == ___, "Check the value of a." );

 function innerRun(){
   assert( b == ___, "Check the value of b." );
   assert( c == ___, "Check the value of c." );
 }

 var b = 7;
 innerRun();
 var c = 8;
}
runMe(6);

for ( var d = 0; d < 3; d++ ) {
 setTimeout(function(){
   assert( d == ___, "Check the value of d." );
 }, 100);
}
```

#### The last one is quite tricky, we'll revisit it

```js
var a = 5;
function runMe(a){
 assert( a == 6, "Check the value of a." );

 function innerRun(){
   assert( b == 7, "Check the value of b." );
   assert( c == undefined, "Check the value of c." );
 }

 var b = 7;
 innerRun();
 var c = 8;
}
runMe(6);

for ( var d = 0; d < 3; d++ ) {
 setTimeout(function(){
   assert( d == 3, "Check the value of d." );
 }, 100);
}
```

### Temporary Scope

#### Self-executing, temporary, function

```js
(function(){
  var count = 0;

  var timer = setInterval(function(){
    if ( count < 5 ) {
      log( "Timer call: ", count );
      count++;
    } else {
      assert( count == 5, "Count came via a closure, accessed each step." );
      assert( timer, "The timer reference is also via a closure." );
      clearInterval( timer );
    }
  }, 100);
})();

assert( typeof count == "undefined", "count doesn't exist outside the wrapper" );
assert( typeof timer == "undefined", "neither does timer" );
```

#### Now we can handle closures and looping

```js
for ( var d = 0; d < 3; d++ ) (function(d){
 setTimeout(function(){
   log( "Value of d: ", d );
   assert( d == d, "Check the value of d." );
 }, d * 200);
})(d);
```

#### The anonymous wrapper functions are also useful for wrapping libraries

```js
(function(){
  var myLib = window.myLib = function(){
    // Initialize
  };

  // ...
})();
```

#### Another way to wrap a library

```js
var myLib = (function(){
  function myLib(){
    // Initialize
  }

  // ...

  return myLib;
})();
```

#### QUIZ: Fix the broken closures in this loop

```js
var count = 0;
for ( var i = 0; i < 4; i++ ) {
  setTimeout(function(){
    assert( i == count++, "Check the value of i." );
  }, i * 200);
}
```

#### A quick wrapper function will do the trick

```js
var count = 0;
for ( var i = 0; i < 4; i++ ) (function(i){
  setTimeout(function(){
    assert( i == count++, "Check the value of i." );
  }, i * 200);
})(i);
```

### Function Prototypes

#### Adding a prototyped method to a function

```js
function Ninja(){}

Ninja.prototype.swingSword = function(){
  return true;
};

var ninjaA = Ninja();
assert( !ninjaA, "Is undefined, not an instance of Ninja." );

var ninjaB = new Ninja();
assert( ninjaB.swingSword(), "Method exists and is callable." );
```

#### Properties added in the constructor (or later) override prototyped properties

```js
function Ninja(){
  this.swingSword = function(){
    return true;
  };
}

// Should return false, but will be overridden
Ninja.prototype.swingSword = function(){
  return false;
};

var ninja = new Ninja();
assert( ninja.swingSword(), "Calling the instance method, not the prototype method." );
```

#### Prototyped properties affect all objects of the same constructor, simultaneously, even if they already exist

```js
function Ninja(){
  this.swung = true;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

Ninja.prototype.swingSword = function(){
  return this.swung;
};

assert( ninjaA.swingSword(), "Method exists, even out of order." );
assert( ninjaB.swingSword(), "and on all instantiated objects." );
```

#### QUIZ: Make a chainable Ninja method

```js
function Ninja(){
  this.swung = true;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a method to the Ninja prototype which
// returns itself and modifies swung

assert( !ninjaA.swing().swung, "Verify that the swing method exists and returns an instance." );
assert( !ninjaB.swing().swung, "and that it works on all Ninja instances." );
```

#### The chainable method must return this

```js
function Ninja(){
  this.swung = true;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

Ninja.prototype.swing = function(){
  this.swung = false;
  return this;
};

assert( !ninjaA.swing().swung, "Verify that the swing method exists and returns an instance." );
assert( !ninjaB.swing().swung, "and that it works on all Ninja instances." );
```

### Instance Type

#### Examining the basics of an object

```js
function Ninja(){}

var ninja = new Ninja();

assert( typeof ninja == "object", "However the type of the instance is still an object." );
assert( ninja instanceof Ninja, "The object was instantiated properly." );
assert( ninja.constructor == Ninja, "The ninja object was created by the Ninja function." );
```

#### We can still use the constructor to build other instances

```js
function Ninja(){}
var ninja = new Ninja();
var ninjaB = new ninja.constructor();

assert( ninjaB instanceof Ninja, "Still a ninja object." );
```

#### QUIZ: Make another instance of a Ninja

```js
var ninja = (function(){
 function Ninja(){}
 return new Ninja();
})();

// Make another instance of Ninja
var ninjaB = ___;

assert( ninja.constructor == ninjaB.constructor, "The ninjas come from the same source." );
```

#### Use the .constructor property to dig in

```js
var ninja = (function(){
 function Ninja(){}
 return new Ninja();
})();

// Make another instance of Ninja
var ninjaB = new ninja.constructor();

assert( ninja.constructor == ninjaB.constructor, "The ninjas come from the same source." );
```

### Inheritance

#### The basics of how prototypal inheritance works

```js
function Person(){}
Person.prototype.dance = function(){};

function Ninja(){}

// Achieve similar, but non-inheritable, results
Ninja.prototype = Person.prototype;
Ninja.prototype = { dance: Person.prototype.dance };

assert( (new Ninja()) instanceof Person, "Will fail with bad prototype chain." );

// Only this maintains the prototype chain
Ninja.prototype = new Person();

var ninja = new Ninja();
assert( ninja instanceof Ninja, "ninja receives functionality from the Ninja prototype" );
assert( ninja instanceof Person, "... and the Person prototype" );
assert( ninja instanceof Object, "... and the Object prototype" );
```

#### QUIZ: Let's try our hand at inheritance

```js
function Person(){}
Person.prototype.getName = function(){
  return this.name;
};

// Implement a function that inherits from Person
// and sets a name in the constructor

var me = new Me();
assert( me.getName(), "A name was set." );
```

#### The result is rather straight-forward

```js
function Person(){}
Person.prototype.getName = function(){
  return this.name;
};

function Me(){
  this.name = "John Resig";
}
Me.prototype = new Person();

var me = new Me();
assert( me.getName(), "A name was set." );
```

### Built-in Prototypes

#### We can also modify built-in object prototypes

```js
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fn){
    for ( var i = 0; i < this.length; i++ ) {
      fn( this[i], i, this );
    }
  };
}

["a", "b", "c"].forEach(function(value, index, array){
  assert( value, "Is in position " + index + " out of " + (array.length - 1) );
});
```

#### Beware: Extending prototypes can be dangerous

```js
Object.prototype.keys = function(){
  var keys = [];
  for ( var i in this )
    keys.push( i );
  return keys;
};

var obj = { a: 1, b: 2, c: 3 };

assert( obj.keys().length == 3, "We should only have 3 properties." );

delete Object.prototype.keys;
```

### Enforcing Function Context

#### What happens when we try to bind an object's method to a click handler

```js
var Button = {
  click: function(){
    this.clicked = true;
  }
};

var elem = document.createElement("li");
elem.innerHTML = "Click me!";
elem.onclick = Button.click;
document.getElementById("results").appendChild(elem);

elem.onclick();
assert( elem.clicked, "The clicked property was accidentally set on the element" );
```

#### We need to keep its context as the original object

```js
function bind(context, name){
  return function(){
    return context[name].apply(context, arguments);
  };
}

var Button = {
  click: function(){
    this.clicked = true;
  }
};

var elem = document.createElement("li");
elem.innerHTML = "Click me!";
elem.onclick = bind(Button, "click");
document.getElementById("results").appendChild(elem);

elem.onclick();
assert( Button.clicked, "The clicked property was correctly set on the object" );
```

#### Add a method to all functions to allow context enforcement

```js
Function.prototype.bind = function(object){
  var fn = this;
  return function(){
    return fn.apply(object, arguments);
  };
};

var Button = {
  click: function(){
    this.clicked = true;
  }
};

var elem = document.createElement("li");
elem.innerHTML = "Click me!";
elem.onclick = Button.click.bind(Button);
document.getElementById("results").appendChild(elem);

elem.onclick();
assert( Button.clicked, "The clicked property was correctly set on the object" );
```

#### Our final target (the .bind method from Prototype.js)

<!-- Let John Resig check this out -->

```js
Function.prototype.bind = function(){
  var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
  return function(){
    return fn.apply(object,
      args.concat(Array.prototype.slice.call(arguments)));
  };
};

var Button = {
  click: function(value){
    this.clicked = value;
  }
};

var elem = document.createElement("li");
elem.innerHTML = "Click me!";
elem.onclick = Button.click.bind(Button, false);
document.getElementById("results").appendChild(elem);

elem.onclick();
assert( Button.clicked === false, "The clicked property was correctly set on the object" );
```

### Bonus: Function Length

#### How does a function's length property work

```js
function makeNinja(name){}
function makeSamurai(name, rank){}
assert( makeNinja.length == 1, "Only expecting a single argument" );
assert( makeSamurai.length == 2, "Multiple arguments expected" );
```

#### We can use it to implement method overloading

```js
function addMethod(object, name, fn){
  // Save a reference to the old method
  var old = object[ name ];

  // Overwrite the method with our new one
  object[ name ] = function(){
    // Check the number of incoming arguments,
    // compared to our overloaded function
    if ( fn.length == arguments.length )
      // If there was a match, run the function
      return fn.apply( this, arguments );

    // Otherwise, fallback to the old method
    else if ( typeof old === "function" )
      return old.apply( this, arguments );
  };
}
```

#### How method overloading might work, using the function length property

```js
function addMethod(object, name, fn){
  // Save a reference to the old method
  var old = object[ name ];

  // Overwrite the method with our new one
  object[ name ] = function(){
    // Check the number of incoming arguments,
    // compared to our overloaded function
    if ( fn.length == arguments.length )
      // If there was a match, run the function
      return fn.apply( this, arguments );

    // Otherwise, fallback to the old method
    else if ( typeof old === "function" )
      return old.apply( this, arguments );
  };
}

function Ninjas(){
  var ninjas = [ "Dean Edwards", "Sam Stephenson", "Alex Russell" ];
  addMethod(this, "find", function(){
    return ninjas;
  });
  addMethod(this, "find", function(name){
    var ret = [];
    for ( var i = 0; i < ninjas.length; i++ )
      if ( ninjas[i].indexOf(name) == 0 )
        ret.push( ninjas[i] );
    return ret;
  });
  addMethod(this, "find", function(first, last){
    var ret = [];
    for ( var i = 0; i < ninjas.length; i++ )
      if ( ninjas[i] == (first + " " + last) )
        ret.push( ninjas[i] );
    return ret;
  });
}

var ninjas = new Ninjas();
assert( ninjas.find().length == 3, "Finds all ninjas" );
assert( ninjas.find("Sam").length == 1, "Finds ninjas by first name" );
assert( ninjas.find("Dean", "Edwards").length == 1, "Finds ninjas by first and last name" );
assert( ninjas.find("Alex", "X", "Russell") == null, "Does nothing" );
```

## Contribution

Contributions are highly welcome

## License

ISC