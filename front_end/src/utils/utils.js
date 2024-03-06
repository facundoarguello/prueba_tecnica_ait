export  const isGoodValuesStr = (key, values, setErrors) => {
    const value = values[key];

    if(value == null) {
        setErrors((v) => ({ ...v, [key]: true }));
        return false;
    }

    if(value.trim().length <= 0){
        setErrors((v) => ({ ...v, [key]: true }));
        return false;
    }
    else{
        setErrors((v) => ({ ...v, [key]: false }));
        return true;
    }
   
}
export  const isGoodValuesNum = (key, values, setErrors) => {
    const value = values[key];

    if(value == null) {
        setErrors((v) => ({ ...v, [key]: true }));
        return false;
    }

    if(value <= 0) {
        setErrors((v) => ({ ...v, [key]: true }));
        return false;
    }
    else {
        setErrors((v) => ({ ...v, [key]: false }));
        return true;
    }
        
}