
export function caloriesBurned(weightInKg, distanceInKm){
    if (typeof weightInKg !== "number"){
        throw new TypeError("weight must be number");
    }
    if (typeof distanceInKm !== "number"){
        throw new TypeError("distance must be number");
    }
    if (weightInKg <= 0 ) {
        throw new RangeError("weight must be a positive number");
    }
    if (distanceInKm <= 0){
        throw new RangeError("weight must be a positive number");
    }
    return weightInKg * distanceInKm * 1.036;
}