export function findObjectByValue(objArr, value) {
    objArr.forEach(obj => {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                if (element === value) {
                    return obj;
                }
            }
        }
    })
    return "not found";
}
