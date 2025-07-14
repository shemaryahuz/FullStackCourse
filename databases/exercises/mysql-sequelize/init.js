// init.js
import { sequelize, UserActivity } from "./db.js";
try {
    await sequelize.sync({ force: true }); // Drops & recreates the table
    console.log(" Table created.");
    const initialData = [
        { 
            name: "Alice",
            activity: "Login" 
        },
        { 
            name: "Bob",
            activity: "Upload Photo"
        },
    ];
    await UserActivity.bulkCreate(initialData);
    console.log("Initial data inserted.");

} catch (error) {
    console.error("Error inserting data:", error);
} finally {
    await sequelize.close();
}
