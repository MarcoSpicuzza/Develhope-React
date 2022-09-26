import { useState } from "react";

const UseForm = () => {
    const [data, setData] = useState()

    function handleChange(e) {
        setData(data => ({
            ...data, [e.target.name]: e.target.value
        }))
    }

    return ( 
        {data, handleChange}
    );
}
 
export default UseForm;