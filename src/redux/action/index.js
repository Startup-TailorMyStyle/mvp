// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

// For Setting Measurements
export const setMeasurements = (measurements) => {
    return {
        type: "SET_MEASUREMENTS",
        payload: measurements
    }
}

// For Clearing Measurements
export const clearMeasurements = () => {
    return {
        type: "CLEAR_MEASUREMENTS"
    }
}