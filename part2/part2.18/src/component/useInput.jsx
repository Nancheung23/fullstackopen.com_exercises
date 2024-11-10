import { useState } from 'react'

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value.toLowerCase())
    }

    return [value, handleChange, setValue]
};

export default useInput
