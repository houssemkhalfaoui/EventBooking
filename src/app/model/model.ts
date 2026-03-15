export interface IAPIResponse {

    message: string;
    result: boolean;
    data: any;



}

export interface IEvent {
  eventId: number
  eventName: string
  startDate: string
  startTime: string
  endDate: string
  organizerName: string
  userId: number
  price: number
  location: string
  imageUrl: string
  organizerId:number
}
export class User {
  userId: number;
  name: string;
  email: string;
  password: string;
  contactNo?: string;
  role: string;

  constructor(){
    this.contactNo="";
    this.email="";
    this.name="";
    this.password="";
    this.role="Customer";
    this.userId=0;
  }
}

