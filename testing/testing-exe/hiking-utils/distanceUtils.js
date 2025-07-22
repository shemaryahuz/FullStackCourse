
export function kmToMeters(km){
    if (typeof km !== 'number') {
        throw new TypeError('Input must be a number');
    }  
    if (km < 0) {
        throw new RangeError('Input must be a non-negative number');
    }
    return km * 1000;
}