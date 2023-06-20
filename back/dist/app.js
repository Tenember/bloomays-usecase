"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
    res.send("Healthcheck OK");
});
// Sample missions data
const missions = [
    {
        id: "1",
        label: "Mission 1",
        beginDate: "2022-01-01",
        endDate: "2022-01-15",
        missionType: "Type 1",
        freelance: {
            id: "1",
            firstname: "John",
            lastname: "Doe",
            email: "john.doe@example.com",
        },
    },
    {
        id: "2",
        label: "Mission 2",
        beginDate: "2022-02-01",
        endDate: "2022-02-15",
        missionType: "Type 2",
        freelance: {
            id: "2",
            firstname: "Jane",
            lastname: "Smith",
            email: "jane.smith@example.com",
        },
    },
    // ... other missions
];
/**
 * Route handler for getting the missions.
 * Returns the list of missions as JSON.
 */
app.get("/api/missions", (err, req, res) => {
    try {
        res.json(missions);
    }
    catch (error) {
        console.error("Error retrieving missions:", error);
        res.status(500).json({ error: "Failed to retrieve missions" });
    }
});
app.listen(port, () => {
    console.log(`Bloomays app listening on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map