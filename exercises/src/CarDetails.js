import { useEffect, useRef } from "react";

const CarDetails = ({initialData}) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.elements.model.value = initialData.model;
        inputRef.current.elements.year.value = initialData.year;
        inputRef.current.elements.color.value = initialData.color;
    }, [initialData]);
    return ( 
        <div>
            <h1>CAR</h1>
            <form ref={inputRef}>
                <input type="text" name="model" />
                <input type="date" name="year"/>
                <input type="color" name="color"/>
            </form>
        </div>
     );
}
 
export default CarDetails;