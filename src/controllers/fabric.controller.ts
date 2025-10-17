import { Request, Response } from "express";
import { FabricService } from "../services/fabric.service";
import { FabricRequest } from "../validations/fabric.validation";

export class FabricController {
  constructor(private fabricService: FabricService) {}

  async index(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.fabricService.getAllFabric();
      res.json({
        message: 'Fetched successfully',
        data,
        error: null,
      }).status(200);
    } catch (error) {
      res.status(500).json({
        message: 'error fetching data',
        data: null,
        error: error,
      })
    }
  }

  async detail(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.fabricService.getOneFabric(parseInt(req.params.id));
      res.json({
        message: 'Fetched successfully',
        data,
        error: null
      });
    } catch (error: any) {
      res.json({
        message: 'Error fetching data',
        data: null,
        error: error
      }).status(error.status || 404);
    }
  }

  async store(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as FabricRequest;
      const data = await this.fabricService.createFabric(body);
      res.json({
        message: 'Created succesfully',
        data,
        error: null,
      }).status(201);
    } catch (error: any) {
      res.json({
        message: 'Failed when create',
        data: null,
        error,
      }).status(500);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const body = req.body as FabricRequest;
      const data = await this.fabricService.updateFabric(id, body);
      res.json({
        message: 'Updated successfully',
        data,
        error: null
      });
    } catch(error: any) {
      res.json({
        message: 'Failed when udpate',
        data: null,
        error
      }).status(error.status || 404);
    }
  }
}