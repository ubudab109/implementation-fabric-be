import express from "express";
import { AppDataSource } from "./data-source/data-source";
import 'dotenv/config';
import fabricRouter from "./routes/fabric.route";
import cors from 'cors';


const app = express();
const port: number | null | undefined | string = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.use("/api/fabrics", fabricRouter);
    app.get("/", (req, res) => {
      res.send("Hello from Express with TypeORM!");
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Error during Data Source initialization:", error));