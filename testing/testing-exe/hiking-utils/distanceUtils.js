
export function kmToMeters(km){
    if (typeof km !== "number") {
        throw new TypeError("input must be a number");
    }  
    if (km <= 0) {
        throw new RangeError("input must be a positive number");
    }
    return km * 1000;
}