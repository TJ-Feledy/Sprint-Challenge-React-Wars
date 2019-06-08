# Answers

1.  What is React JS and what problems does it try and solve?

  - React is a javascript library for building U.I.'s.  It tries to solve the issues in the reusability of our code. By creating functional and class components we can import sections of our code into any page without the need to copy and paste everything. Also, 're-painting' the DOM or updating the state changes of multiple components could cause the DOM to bog down or lack in performance. React JS fixes this problem through the use of a 'Virtual DOM' that updates only the objects that have changed.

2.  What does it mean to _think_ in react?

  - To me, it means to visualize your finished app and be able to see how it can be broken down into separate reusable components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  - A Class component can hold and use it's own data through the use of State. Any changes made through the use of a class component have to be returned using the render method within that component.  -  A Functional component cannot hold State, but can be passed data to use through the use of 'props' or properties. Any changes made in a functional component can then be returned directly through it's function.

4.  Describe state.

  - State is like the 'heart' of a react app.  It is data that the component can hold and pass around.  When state updates, so does the component. It is mutable/can be mutated.

5.  Describe props.

  - Props are like the 'blood' of a react app. They are data that is passed into a component much the same way as an argument in a function.  Props are immutable/cannot be mutated.
