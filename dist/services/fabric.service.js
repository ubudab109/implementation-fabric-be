"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricService = void 0;
class FabricService {
    constructor(fabricRepository) {
        this.fabricRepository = fabricRepository;
    }
    getAllFabric() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fabricRepository.findAll();
        });
    }
    getOneFabric(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fabricRepository.findOne(id);
        });
    }
    createFabric(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = data;
            payload.canvaJson = JSON.stringify(data.canvaJson);
            return this.fabricRepository.create(payload);
        });
    }
    updateFabric(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = data;
            payload.canvaJson = JSON.stringify(data.canvaJson);
            return this.fabricRepository.update(id, payload);
        });
    }
}
exports.FabricService = FabricService;
