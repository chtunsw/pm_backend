# APIs

## Single APIs

### Employee

- GET

/employee/:id

- POST

/employee

Body:
{
  id: "",
  name: "",
  title: ""
}

- PUT

/employee/:id

Body:
{
  id: "",
  name: "",
  title: ""
}

- DELETE

/employee/:id

## Bulk APIs

### Employee

GET /bulk/employee/:ids
    ids = "id1,id2,..."

POST /bulk/employee
  request body [
    {
        id: "",
        name: "",
        title: ""
    },
    ...
  ]

PUT /bulk/employee
  request body [
    {
        id: "",
        name: "",
        title: ""
    },
    ...
  ]

DELETE /bulk/employee/:ids
    ids = "id1,id2,..."