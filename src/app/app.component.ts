import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { IAPIResponse, User } from './model/model';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-event';
  eventService = inject(EventService)


  constructor()
  {
    const loggedData  = localStorage.getItem("eventUser");
    if(loggedData)
    {
      this.userObj = JSON.parse(loggedData)
    }
  }
  @ViewChild('model') model: ElementRef | undefined;
  isLoginForm: boolean = false;


  userObj: User = new User()
loginObj : any = {
  "Password":"",
  "ContactNo": ""
}

showLogin()
{
  
}

  openPopup() {
    if (this.model) {
      this.model.nativeElement.style.display = "block";
    }
  }


  closePopup() {
    if (this.model) {
      this.model.nativeElement.style.display = "none";
    }
  }


  login(){

this.eventService.loginUser(this.loginObj).subscribe((res:IAPIResponse)=>{

  if(res.result)
  {
    alert("login done with sucess !")
        localStorage.setItem('eventUser',JSON.stringify(res.data))
        this.userObj=res.data;
        this.closePopup()
  }
  else
  {
    console.log(res.message)
  }
})

  }


  onRegister() {

    this.eventService.registerUser(this.userObj).subscribe((res:IAPIResponse) => {
          console.log(this.userObj)
          if(res.result)
          {
            alert("registration is sucess")
          }
          else
          {
            alert(res.message)
          }

    })
  }


  logOff()
  {

localStorage.removeItem("eventUser");
this.userObj = new User()

  }
}

