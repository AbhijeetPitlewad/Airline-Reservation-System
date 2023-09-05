export class Ticket{
    // ticketNumber:number=0;
    flight: { flightNumber: number; } | undefined;
    user: {userEmail:String;} | undefined;
    classType:string ="";
    seatNumber:number=0;
    status: string="";
    flightDate:string="";
    payment:{ paymentId: number}| undefined;



}