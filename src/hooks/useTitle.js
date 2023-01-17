import { useEffect } from "react";

const useTitle=title=>{
    useEffect(()=>{
        document.title=`Resale Cars - ${title}`;
    },[title])
}

export default useTitle;