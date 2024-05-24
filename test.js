const names = ["John","Mercy", "Ann", "Gladys","Peter","Anthony"]

names.forEach((currentElements) => {
    console.log(`Trainees @ teach2give ${currentElements}`)
})

// Map high order function
const members = ["John","Mercy", "Ann", "Gladys","Peter","Anthony"]

const trainees = members.map((newMembers)=> {
    return `${newMembers.toLowerCase()}@teach2give.com`
})
console.log(trainees)

// Filter functions
const filterNames = names.filter((currentElements) =>{
    return currentElements[0] === "J"
})
console.log(filterNames);

// Using filter order method to grade students

const studentPerformance = [{names:"James", grades:"A"}, {names:"Alice", grades:"B"}, {names:"Joseph", grades:"B"}, {names:"Christine", grades:"A"}]

const gradeFilter = studentPerformance.filter((currentElements) => {
    return currentElements.grades === "B"
})
console.log(gradeFilter)

// Using reduce array method
const numbers = [1,2,3,4,5]

const reduceNumbers = numbers.reduce((accumulator, currentValue) => {
    console.log(`current value of the accumulator: ${accumulator}`)
    return accumulator - currentValue;
})

