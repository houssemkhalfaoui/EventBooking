# Event Booking Angular App

A simple **Event Booking Web Application** built with **Angular 15**.  
Users can browse events, register/login, book tickets, and view their bookings.

---


## ScreenShots

![Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/266693260/563835650-ea15827b-90a5-4dd9-89c3-0ae70b477be8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260315T232018Z&X-Amz-Expires=300&X-Amz-Signature=c270cad1b04d1e58737ab44cfdbec2ea8644afcaec29c79a07bc91ede74f0a1c&X-Amz-SignedHeaders=host)





![Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/266693260/563835822-1accfded-0077-42d8-b945-44179115cc00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260315T232143Z&X-Amz-Expires=300&X-Amz-Signature=acd86618666d4d1b1fe5613a88df954717abe8d7b2f9f98a6a0e099464d45511&X-Amz-SignedHeaders=host)




![Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/266693260/563835868-9da02a2c-656a-40df-9e6e-01edca639a31.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260315T232221Z&X-Amz-Expires=300&X-Amz-Signature=f003ec909aefd62d14469452b866518f1801d779fad3a6c460cf5d5484e4fa93&X-Amz-SignedHeaders=host)



## Tech Stack

- Angular **15.2**
- Bootstrap **5.3**
- FontAwesome **7**
- TypeScript
- RxJS

### Main Dependencies


@angular/core 15.2
@angular/router 15.2
@angular/forms 15.2
bootstrap 5.3
@fortawesome/fontawesome-free 7.2


---

## Project Architecture

The project follows a **feature-based Angular architecture**.


src
├── app

│ ├── model

│ │ └── model.ts
│ │
│ ├── pages

│ │ ├── home

│ │ │ ├── home.component.ts

│ │ │ ├── home.component.html

│ │ │ └── home.component.css

│ │ │
│ │ ├── event

│ │ │ ├── event.component.ts

│ │ │ ├── event.component.html

│ │ │ └── event.component.css

│ │ │
│ │ └── my-booking

│ │ ├── my-booking.component.ts

│ │ ├── my-booking.component.html

│ │ └── my-booking.component.css

│ │

│ ├── service

│ │ └── event.service.ts

│ │

│ ├── app-routing.module.ts

│ ├── app.module.ts

│ └── app.component.

│
├── assets

└── index.html



---

## Architecture Explanation

### Pages

- **Home** → Displays available events  
- **Event** → Event details and ticket booking  
- **My Booking** → Shows bookings for the logged-in user  

### Service Layer

`event.service.ts`

Handles **API communication using Angular HttpClient**.

### Models

`model.ts`

Contains interfaces and classes used across the application.

### Routing

`app-routing.module.ts`

Manages navigation between pages using **Angular Router**.

---

## Features

- User Registration
- User Login
- View Events
- Book Event Tickets
- View My Bookings
- LocalStorage based authentication
- Angular Routing
- Bootstrap UI

---

## Installation

### 1 Clone the repository


git clone https://github.com/yourusername/event-booking-app.git


### 2 Navigate into the project


cd booking-event


### 3 Install dependencies


npm install


### 4 Run the application


ng serve


### 5 Open in browser


http://localhost:4200


---

## Author

**Houssem**
