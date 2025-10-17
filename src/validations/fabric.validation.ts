import { IsJSON, IsNotEmpty, IsString } from "class-validator";

export class FabricRequest {
  @IsNotEmpty()
  designName: string;

  @IsJSON()
  @IsNotEmpty()
  canvaJson: string;

  @IsString()
  @IsNotEmpty()
  previewImage: string;
}