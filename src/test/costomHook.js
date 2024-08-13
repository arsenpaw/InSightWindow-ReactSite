 import {useEffect, useState} from "react";

export  default  function useCustom(hookValue)
{
    const [value, setValue] = useState(hookValue || 'initial');
    useEffect(() => {
        setValue('updated')
    },[]);
    return value;


}
