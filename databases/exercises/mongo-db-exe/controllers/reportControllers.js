import { addReport, getReports } from "../dal/reportsDAL.js";

export async function getAllReports(req, res) {
    const allReports = await getReports();
    if (!allReports){
        res.status(404).send({ error: "Error fetching reports from database." });
    }
    if (!allReports.length){
        res.status(404).send({ error: "Reports collection is empty." });
    }
    const jsonResponse = JSON.stringify(allReports, null, 2);
    res.send( jsonResponse );
}

export async function addNewReport(req, res) {
    const { report } = req.body;
    const reportWhithId = await addReport(report);
    if (!reportWhithId){
        res.status(404).send({ error: "Error creating new report" });
    }
    const response = { messsage: "Report created successfully", createdReport: reportWhithId };
    const jsonResponse = JSON.stringify(response, null, 2);
    res.send( jsonResponse );
}