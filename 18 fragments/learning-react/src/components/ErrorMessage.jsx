const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <h1>I am still hungry</h1> : null}</>;
};
export default ErrorMessage;

//using if else condition
// if (foodItems.length === 0) {
//   return <h1>I am still hungry</h1>;
// }

//using ternary operator
// return <>{foodItems.length === 0 ? <h1>I am still hungry</h1> : null};</>;

//using logical operator
// return <>{foodItems.length === 0 && <h1>I am still hungry</h1>};</>;
