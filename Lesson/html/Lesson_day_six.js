const Greatings = (user) => {
  const result = "Welcome " + user + ", welcome to Church today!";
  return result;
};

console.log(Greatings("John"));




// build a simple App Grade Checker


// components

// 1 functional
// 2 className components ( Obsolete no longer much )
// return out
// Characteristics of functional components
// 1. Funtion Name (Capitalized)
// 2. Return JSX
// 3. Export the function
// 4. it can have an argument which is called props (properties) which is an object that can be passed to the component from the parent component

// why we 'class' is not used in react? because 'class' is a reserved keyword in javascript, so we use 'className' instead of 'class' to define the class of an element in react.
