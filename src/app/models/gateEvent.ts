export interface GateEvent {
    _id: string;
    userId: string;
    vehicleId: string;
    type: string;
    timestamp: number;
    authorized: boolean;
    operatorId: string;
    reason: string;
    active: boolean;
}