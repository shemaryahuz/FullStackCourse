
export function validateReport(req, res, next) {

    const { report } = req.body;
    
    if (!report){
        res.status(400).send({ error: "Report format is invalid" });
        return;
    }

    if (
        !report.fieldCode || !typeof report.fieldCode === "string" ||
        !report.location || !typeof report.location === "string" ||
        !report.threatLevel ||  !typeof report.threatLevel === "number" || report.threatLevel > 5 || report.threatLevel < 0 ||
        !report.description || !typeof report.description === "string" 
    ){
        res.status(400).send({ error: "Some properties missed" });
    }
    else{
        next();
    }
}

