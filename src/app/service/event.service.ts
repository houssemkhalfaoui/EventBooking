import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponse, IEvent, User } from '../model/model';
import { map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl: string = "/api/EventBooking/"

  constructor(private http: HttpClient) {



   }


  getAllEvents() {

    let res = this.http.get<IAPIResponse>(`${this.apiUrl}GetAllEvents`)
    console.log(res)
    return res
  }
  getEventById(id: number) {

    return this.http.get<IEvent>(`${this.apiUrl}GetEventById?id=${id}`).pipe(map((item: any) => {

      return item.data
    })
    )

  }
  getEventByOrganizor(id:number)
  {
    return this.http.get(`${this.apiUrl}GetEventsByOrganizer?organizerId=${id}`).pipe(map((item: any) => {

      return item.data
    })
    )
  }



 registerUser(obj:User)
 {

  return this.http.post<IAPIResponse>(`${this.apiUrl}CreateUser`,obj)


 }
 loginUser(obj:any)
 {

  return this.http.post<IAPIResponse>(`${this.apiUrl}login`,obj)
 }
book(obj:any)
{
return this.http.post<IAPIResponse>(`${this.apiUrl}bookevent`,obj)

}



getBookingByCustomer(customerId:number)
{

  return this.http.get<IAPIResponse>(`${this.apiUrl}GetBookingsByCustomer?customerId=${customerId}`);
}

}
