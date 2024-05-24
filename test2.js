const people = [{names: "Joseph", age: "23", course:"SE"}, {names: "Mary", age: "20", course: "CS"}, {names:"Anthony", age: "22", course: "CS"},{names: "Adan", age: "25", course:"SE"},{names: "Gilbert", age: "23", course:"SE"}]

// Using a map array method
 const employeeEmails = people.map((currentVariables) =>{
    return currentVariables.names.toLowerCase
 } )
 console.log(employeeEmails())
