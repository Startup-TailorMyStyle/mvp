const measurements = null;

const handleMeasurements = (state = measurements, action) => {
    switch(action.type) {
        case "SET_MEASUREMENTS":
            return action.payload;
        case "CLEAR_MEASUREMENTS":
            return null;
        default:
            return state;
    }
}

export default handleMeasurements;