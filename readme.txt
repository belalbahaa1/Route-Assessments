# Assignment 1 

 1. What is the difference between `forEach` and `for...of`? When would you use each?
	for of is used to iterate over iterable values such as arrays and strings.
	for in is used to iterate over the enumerable keys of an object.


///////////////////////////////////
 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with example.
	Hoisting: JavaScript's behavior of moving variable and function declarations to the top of their scope during the compilation phase before code execution
	Temporal Dead Zone (TDZ): The period between entering a block scope and the actual declaration/initialization of a let or const variable accessing the variable inside the TDZ throws a ReferenceError


	 var hoisting
	console.log(a) => undefined (hoisted and initialized as undefined)
	var a = 10;

	 TDZ with let/const
	console.log(b) => ReferenceError: Cannot access 'b' before initialization (inside TDZ)
	let b = 20;


////////////////////////////

 3. What are the main differences between `==` and `===`?
	(==) (Loose Equality): Compares two values for equality 
  
	(===) (Strict Equality): Compares both value and data type without performing type coercion If the types are different it immediately returns false
  
//////////////////////

4. Explain how `try-catch` works and why it is important in async operations.
	How it works =>  Code that might throw an error is wrapped inside the (try) block. If an error occurs, execution stops immediately and control jumps to the catch (error) block to handle the exception gracefully without crashing the entire application.
	Importance in async operations =>  When using (async/await) a rejected Promise throws an exception just like synchronous code  without (try-catch) a failed network request or database query in node results in an unhandled promise rejection which can crash the server or leave client requests hanging without a response


//////////////////////////////
5. What's the difference between type conversion and coercion? Provide examples of each.
	Type Conversion (Explicit): Manually converting a value from one data type to another using builtin functions or constructors
   		Example: Number("123") converts the string"123" into the number 123
	Type Coercion (Implicit): Automatic conversion of values from one data type to another by javascript behind the scenes when operating on mismatched types
   		Example: "5" + 2 results in "52" (number `2` is coerced to a string), whereas "5" - 2 results in "3" (string "5" is coerced to a number)