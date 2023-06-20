import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Healthcheck OK");
});

interface Freelance {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface Mission {
  id: string;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: string;
  freelance: Freelance;
}

interface Error {
  status?: number;
}

// Sample missions data
const missions: Mission[] = [
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
app.get("/api/missions", (req: Request, res: Response) => {
  try {
    res.json(missions);
  } catch (error) {
    console.error("Error retrieving missions:", error);
    // res.status(500).json({ error: "Failed to retrieve missions" });
  }
});

app.listen(port, () => {
  console.log(`Bloomays app listening on port ${port}`);
});
