import { DataSource, Repository } from "typeorm";
import { Fabric } from "../data-source/entities/fabric";
import { FabricRequest } from "../validations/fabric.validation";

export class FabricRepository {
  private repository: Repository<Fabric>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(Fabric);
  }

  async findAll(): Promise<Fabric[]> {
    return this.repository.find();
  }

  async findOne(
    id: number
  ): Promise<Fabric> {
    return this.repository.findOneOrFail({
      where: {
        id
      }
    });
  }

  async create(data: FabricRequest): Promise<Fabric> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async update(
    id: number,
    data: FabricRequest
  ): Promise<Fabric> {
    this.repository.update(
      {
        id: id,
      },
      data
    );

    return this.repository.findOneOrFail({
      where: {
        id
      }
    });
  }
}