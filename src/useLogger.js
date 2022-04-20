import { useEffect } from 'react'

export default function useLogger(value){
    useEffect(() => {
        console.log("cosoling from the custom hook taha: ", value)
    }, [value]);
}