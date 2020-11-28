# func

func allows you to declare and decorate js functions

```js
// Create decorator to say hello everytime a function is called
const $sayHello = func(fn => (...args) => {
  console.log("Hello")
  return fn(...args)
});

// Create a sum function decorated with $sayHello
const sum = func(
  $sayHello, // decorator
  (a, b) => {
    return a + b; 
  }
);

console.log(sum(3, 2));
// Hello
// 5
```
----------------------------------------------------------------------------------------

You can implement as many decorators as you need

```js
const $sayHello = func(fn => (...args) => {
  console.log("Hello")
  return fn(...args)
});

const $sayBye = func(fn => (...args) => {
  console.log("Bye")
  return fn(...args)
});

const sum = func(
  $sayHello,
  $sayBye,
  (a, b)=>{
    return a + b;
  }
);

console.log(sum(3, 2));
// Hello
// Bye
// 5
```


----------------------------------------------------------------------------------------

Create a decorator factory to pass configuration params to your decorators

```js
const $deprecated = func((reason) => fn => (...args) => {
  console.warn("This is deprecated and you shouldn't use it: " + reason);
  return fn(...args);
});

const log = func(
  $deprecated("Use console.log directly"),
  message => {
    console.log(message);
  }
)

log("Some message");
// ⚠️ This is deprecated and you shouldn't use it: Use console.log directly
// Some message
```
