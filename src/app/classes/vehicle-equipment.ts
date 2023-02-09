import { VehicleEngine } from "./vehicle-engine";
import { VehicleModel } from "./vehicle-model";

export class VehicleEquipment {
    public equipmentId: number = 0;
    public equipmentName: string = "";
    public vehicleModel: VehicleModel = new VehicleModel;
    public vehicleEngine: VehicleEngine = new VehicleEngine;
    public equipmentPrice: number = 0;
}
