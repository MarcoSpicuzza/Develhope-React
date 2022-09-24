const Sum = ({numbers}) => {
    return ( 
        <h1>Sum: {numbers.reduce((prevNumber, nextNumber) => prevNumber + nextNumber)}</h1>
     );
}
 
export default Sum;