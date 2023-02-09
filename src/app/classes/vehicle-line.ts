import { VehicleEngine } from "./vehicle-engine";
import { VehicleModel } from "./vehicle-model";

export class VehicleLine {
    public lineId: number = 0;
    public lineName: string = "";
    public vehicleModel: VehicleModel = new VehicleModel;
    public vehicleEngine: VehicleEngine = new VehicleEngine;
    public linePrice: number = 0;
}
