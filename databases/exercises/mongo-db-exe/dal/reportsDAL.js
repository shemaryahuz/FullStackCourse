import { ObjectId } from "mongodb";
import db from "../database/db.js";

const reports_collection = db.collection("intel_reports");

export async function addReport(report) {
    try {
        const reportWhithId = await reports_collection.insertOne(report);
        return reportWhithId;
    } catch (error) {
        console.error(`Error adding report to database: ${error}`);
    }
}

export async function getReports() {
    try {
        const reports = await reports_collection.find().toArray();
        return reports;
    } catch (error) {
        console.error(`Error fetching reports from database: ${error}`);
    }
}

export async function getReport(reportId) {
    try {
        const query = { _id: new ObjectId(reportId) };
        const report = await reports_collection.findOne(query);
        return report;
    } catch (error) {
        console.error(`Error fetching report from database: ${error}`);
    }
}

export async function getDangerousReport() {
    try {
        const query = { thretLevel: { $gte: 4 } };
        const dangerousReport = await reports_collection.findOne(query);
        return dangerousReport;
    } catch (error) {
        console.error(`Error fetching dangerous report from database: ${error}`);
    }
}

export async function confirmReport(reportId){
    try {
        const query = { _id: new ObjectId(reportId) };
        const update = { $set: { confirmed: true } };
        const confirmedReport = await reports_collection.updateOne(query, update);
        return confirmedReport;
    } catch (error) {
        console.error(`Error to confirm report in database: ${error}`);
    }
}

export async function deleteReport(reportId) {
    try {
        const query = { _id: new ObjectId(reportId) };
        const deletedReport = await reports_collection.deleteOne(query);
        return deletedReport;
    } catch (error) {
        console.error(`Error deleting report from database: ${error}`);
    }
}