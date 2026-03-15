import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAPIResponse, IEvent, User } from 'src/app/model/model';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  eventService = inject(EventService);
  eventData$: Observable<IEvent> = new Observable<IEvent>
  events$: Observable<IEvent[]> = new Observable<IEvent[]>
  eventid?: string;

  activatedRoute = inject(ActivatedRoute);
  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.eventData$ = this.eventService.getEventById(res.id)
      this.eventid = res.id;
      this.eventData$.subscribe((res: IEvent) => {
        this.events$ = this.eventService.getEventByOrganizor(res.organizerId)


        const loggedData = localStorage.getItem('eventUser')
        if (loggedData != null)
          this.userObj = JSON.parse(loggedData)

      })


    })
  }
  userObj: User = new User();
  members: any =
    {
      "Name": "",
      "Age": 0,
      "IdentityCard": "",
      "CardNo": "",
      "ContactNo": ""
    }
  bookingOBj: any =
    {
      "BookingId": 0,
      "UserId": 0,
      "EventId": 0,
      "NoOfTickets": 0,
      "EventBookingMembers": [

      ]
    }




  @ViewChild("model") model: ElementRef | undefined

  getEventDetail(id: number) {




  }
  showLogin() {

  }

  AddMember() {

    const newobj = JSON.stringify(this.members)
    const obj = JSON.parse(newobj)
    this.bookingOBj.EventBookingMembers.push(obj);

  }


  openModel() {
    this.model!.nativeElement.style.display = "block"


  }
  closeModel() {
    this.model!.nativeElement.style.display = "none"


  }
  onBooking() {
    this.bookingOBj.UserId = this.userObj.userId;

    this.bookingOBj.EventId = this.eventid;
    this.bookingOBj.NoOfTickets = this.bookingOBj.EventBookingMembers.length

    this.eventService.book(this.bookingOBj).subscribe((res: IAPIResponse) => {
      if (res.result) {
        alert("booking sucess")
        this.closeModel()
      }
      else {
        alert(res.message)
      }


    })
  }


}
