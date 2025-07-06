
export function logUsers(users){
    for (let user of users){
        console.log(`User: ${user.username}`);
    }
}

export function getUserIndex(users, username){
    for (let user of users){
        if(user.username === username){
            return users.indexOf(user);
        }
    }
    return -1;
}