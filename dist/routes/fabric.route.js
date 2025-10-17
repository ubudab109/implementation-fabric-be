"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/fabric.route.ts
const express_1 = require("express");
const fabric_controller_1 = require("../controllers/fabric.controller");
const fabric_service_1 = require("../services/fabric.service");
const fabric_repository_1 = require("../repositories/fabric.repository");
const data_source_1 = require("../data-source/data-source");
const fabricRouter = (0, express_1.Router)();
const fabricRepository = new fabric_repository_1.FabricRepository(data_source_1.AppDataSource);
const fabricService = new fabric_service_1.FabricService(fabricRepository);
const fabricController = new fabric_controller_1.FabricController(fabricService);
fabricRouter.get("/", (req, res) => fabricController.index(req, res));
fabricRouter.get("/:id", (req, res) => fabricController.detail(req, res));
fabricRouter.post("/", (req, res) => fabricController.store(req, res));
fabricRouter.put("/:id", (req, res) => fabricController.update(req, res));
exports.default = fabricRouter;
