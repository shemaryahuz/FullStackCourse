
const URL = "http://localhost:3000";

export async function signupUser(username, password) {
    try {
        const req = {
            method: "POST",
            headers: {
                "Content-Type": "appliciation/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password
            })
        };
        const res = await fetch(URL + "/signup", req);
        const data = await res.json();
        if (!res.ok){
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        console.log(`Error signup user: ${error.message}`);
    }
}

export async function loginUser(username, password) {
    try {
        const req = {
            method: "POST",
            headers: {
                "Content-Type": "appliciation/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password
            })
        };
        const res = await fetch(URL + "/login", req);
        const data = await res.json();
        if (!res.ok){
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        console.log(`Error login user: ${error.message}`);
    }
}