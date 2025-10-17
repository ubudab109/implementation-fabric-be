import { Fabric } from "../data-source/entities/fabric";
import { FabricRepository } from "../repositories/fabric.repository";
import { FabricRequest } from "../validations/fabric.validation";

export class FabricService {
  constructor(private fabricRepository: FabricRepository) {}

  async getAllFabric(): Promise<Fabric[]> {
    return this.fabricRepository.findAll();
  }

  async getOneFabric(
    id: number,
  ): Promise<Fabric> {
    return this.fabricRepository.findOne(id);
  }

  async createFabric(
    data: FabricRequest,
  ): Promise<Fabric> {
    const payload = {
      designName: data.designName,
      previewImage: data.previewImage,
      canvaJson: JSON.parse(data.canvaJson),
    };
    return this.fabricRepository.create(payload);
  }

  async updateFabric(
    id: number,
    data: FabricRequest
  ): Promise<Fabric> {
    const payload = data;
    return this.fabricRepository.update(id, payload);
  }
}