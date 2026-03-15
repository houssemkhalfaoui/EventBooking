import { Component, inject, OnInit } from '@angular/core';
import { IAPIResponse } from 'src/app/model/model';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {



eventService = inject(EventService);
bookeditems:any;
userObj :any ;

  ngOnInit(): void {
  }

  constructor()
  {

      const loggedData = localStorage.getItem('eventUser')
        if (loggedData != null)
         { this.userObj = JSON.parse(loggedData)
           this.getBookinsBYUserId()
         }

      

  }

getBookinsBYUserId()
{
  this.eventService.getBookingByCustomer(this.userObj.userId).subscribe((res:IAPIResponse)=>{

 if (res.result) {
        console.log("sucess")
        this.bookeditems = res.data;
      }
      else {
        alert(res.message)
      }


  })


}


}
