import { Component, inject, OnInit } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';
import { IAPIResponse, IEvent } from 'src/app/model/model';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  eventList: IEvent[] = []
  eventService = inject(EventService);

  ngOnInit(): void {
    this.getAllEvents();
    console.log(this.eventList)
  }

  getAllEvents() {
    let res = this.eventService.getAllEvents().subscribe((res: IAPIResponse) => {
      this.eventList= res.data;
           console.log(this.eventList)

     })

     return res 

  }

}
