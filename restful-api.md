# APIs



## Employee

### Single Apis

- GET

/employee/:id

- POST

/employee

Body: 

{
  "name":"",
  "title":"",
  "potrait":"",
  "password":"",
  "email":"",
  "role":"",
  "salary":"",
  "schedules":[],
  "leaveRequests":[]
}

- PUT

/employee

Body:

{
  "name":"",
  "title":"",
  "potrait":"",
  "password":"",
  "email":"",
  "role":"",
  "salary":"",
  "schedules":[],
  "leaveRequests":[]
}

- DELETE

/employee/:id

### Paginate Apis

- GET

/employees/:pageIndex/:pageSize



## LeaveRequest

### Single Apis

- GET

/leaveRequest/:id

- POST

/leaveRequest

Body:

{
  "startDate": "",
  "endDate": "",
  "leaveReason": "",
  "approvalStatus": "",
  "employeeID":""
}

- PUT

/leaveRequest

Body: 

{
  "_id": "",
  "startDate": "",
  "endDate": "",
  "leaveReason": "",
  "approvalStatus": "",
  "employeeID":""
}

- DELETE

/leaveRequest/:id

### Paginate Apis

- GET

/leaveRequests/:pageIndex/:pageSize

### Batch Apis

- GET

/employee/:id/leaveRequests/:pageIndex/:pageSize



## Schedule

### Single Apis

- GET

/schedule/:id

- POST

/schedule

Body: 

{
	"date": "",
	"detail": "",
  "employeeID":""
}

- PUT

/schedule

Body: 

{   
  "_id": "",
	"date": "",
	"detail": "",
  "employeeID":""
}

- DELETE

/schedule/:id

### Batch Apis

- GET

/employee/:id/schedules/:pageIndex/:pageSize