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
exports.FabricController = void 0;
class FabricController {
    constructor(fabricService) {
        this.fabricService = fabricService;
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = this.fabricService.getAllFabric();
                res.json({
                    message: 'Fetched successfully',
                    data,
                    error: null,
                }).status(200);
            }
            catch (error) {
                res.status(500).json({
                    message: 'error fetching data',
                    data: null,
                    error: error,
                });
            }
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = this.fabricService.getOneFabric(parseInt(req.params.id));
                res.json({
                    message: 'Fetched successfully',
                    data,
                    error: null
                });
            }
            catch (error) {
                res.json({
                    message: 'Error fetching data',
                    data: null,
                    error: error
                }).status(error.status || 404);
            }
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const data = this.fabricService.createFabric(body);
                res.json({
                    message: 'Created succesfully',
                    data,
                    error: null,
                }).status(201);
            }
            catch (error) {
                res.json({
                    message: 'Failed when create',
                    data: null,
                    error,
                }).status(500);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const body = req.body;
                const data = this.fabricService.updateFabric(id, body);
                res.json({
                    message: 'Updated successfully',
                    data,
                    error: null
                });
            }
            catch (error) {
                res.json({
                    message: 'Failed when udpate',
                    data: null,
                    error
                }).status(error.status || 404);
            }
        });
    }
}
exports.FabricController = FabricController;
