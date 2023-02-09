import { VehicleBody } from "./vehicle-body";
import { VehicleEngine } from "./vehicle-engine";
import { VehicleEquipment } from "./vehicle-equipment";
import { VehicleLine } from "./vehicle-line";
import { VehicleModel } from "./vehicle-model";
import { VehiclePaint } from "./vehicle-paint";

export class VehicleRequest {
    public requestId: number = 0;
    public vehicleModel: VehicleModel = new VehicleModel;
    public vehicleLine: VehicleLine = new VehicleLine;
    public vehicleBody: VehicleBody = new VehicleBody;
    public vehicleEngine: VehicleEngine = new VehicleEngine;
    public interiorPaint: VehiclePaint = new VehiclePaint;
    public exteriorPaint: VehiclePaint = new VehiclePaint;
    public vehicleEquipment: VehicleEquipment = new VehicleEquipment;
    public totalPrice: number = 0;
    public discount: number = 0;
}
