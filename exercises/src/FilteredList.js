import { useMemo } from "react"

const FiltedList = ({list}) => {

    function renderList(list) {
        return list.map(li => li.age>18 && <li key={li.id}>NAME: {li.name}, AGE: {li.age}</li>)
    }

    const cachedList = useMemo(() => renderList(list), [list])

    return ( 
        <div>
            {cachedList}
        </div>
     );
}
 
export default FiltedList;