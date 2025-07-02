// Get data from website

import https from "https";

const URL = "";

function fetchData(url){
    return new Promise((resolve, reject) => {
        https.get(url, resolve);
    })
}