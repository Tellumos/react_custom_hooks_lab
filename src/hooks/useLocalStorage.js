import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {

    const [storedData, changeData] = useState(() => {
        return localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, storedData)
    }, [key, storedData])

    return [ storedData, changeData ]
}
