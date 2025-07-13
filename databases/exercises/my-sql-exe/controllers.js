import { getClassicCarsProductsCount, getEmplooyeesReportTo1143, getFranceCustomersCount } from "./dal.js";

export async function question1(req, res) {
    const answer = await getFranceCustomersCount();
    const jsonStr = JSON.stringify(answer, null, 2);
    res.send(jsonStr);
}

export async function question2(req, res) {
    const answer = await getEmplooyeesReportTo1143();
    const jsonStr = JSON.stringify(answer, null, 2);
    res.send(jsonStr);
}

export async function question3(req, res) {
    const answer = await getClassicCarsProductsCount();
    const jsonStr = JSON.stringify(answer, null, 2);
    res.send(jsonStr);
}