import { VehicleTransaction } from "./vehicle-transaction";

export class Order {
    public vehicleTransaction: VehicleTransaction = new VehicleTransaction;
    public orderId: number = 0;
    public orderDate: Date = new Date()
    public estDeliveryDate: Date = new Date()
    public orderStatus: string = "PRODUCTION"
    public tranportCost: number = 0
    public totalPrice: number = 0
}
