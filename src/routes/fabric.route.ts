// src/routes/fabric.route.ts
import { Router } from "express";
import { FabricController } from "../controllers/fabric.controller";
import { FabricService } from "../services/fabric.service";
import { FabricRepository } from "../repositories/fabric.repository"; 
import { AppDataSource } from "../data-source/data-source";
import { validationMiddleware } from "../middleware/validation.middleware";
import { FabricRequest } from "../validations/fabric.validation";

const fabricRouter = Router();

const fabricRepository = new FabricRepository(AppDataSource);
const fabricService = new FabricService(fabricRepository);
const fabricController = new FabricController(fabricService);

fabricRouter.get("/", (req, res) => fabricController.index(req, res));
fabricRouter.get("/:id", (req, res) => fabricController.detail(req, res));
fabricRouter.post(
  "/",
  validationMiddleware(FabricRequest),
  (req, res) => fabricController.store(req, res)
);
fabricRouter.put(
  "/:id",
  validationMiddleware(FabricRequest, true),
  (req, res) => fabricController.update(req, res)
);

export default fabricRouter;
