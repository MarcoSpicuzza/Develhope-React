const Sum = ({numbers=[5, 5, 3]}) => {
    return ( 
        <h1>Sum: {numbers.reduce((prevNumber, nextNumber) => prevNumber + nextNumber)}</h1>
     );
}
 
export default Sum;

// IF NUMBERS PROP IS NOT PASSED TO THIS SUM COMPONENT... THE SUM COMPONENT IS NOT ABLE TO ACCESS THE ARRAY OF NUMBERS THAT WE WANT TO PASS