
const personDetails = [
    {
    "name": "Juan Dela Cruz",
    "age": 21,
    "gender": "male",
    "contact": "09129205827"
    },
    {
    "name": "Juana Dela Cruz",
    "age": 23,
    "gender": "female",
    "contact": "09282018594"
    },
    {
    "name": "Alejandro Castro",
    "age": 25,
    "gender": "male",
    "contact": "09219548102"
    },
    {
    "name": "Amalia Gomez",
    "age": 19,
    "gender": "female",
    "contact": "09472064921"
    },
    {
    "name": "Chester Gregorio",
    "age": 21,
    "gender": "male",
    "contact": "09582950371"
    },
    {
    "name": "Cherry De Ocampo",
    "age": 30,
    "gender": "female",
    "contact": "099402749201"
    },
    {
    "name": "Gilbert Moreno",
    "age": 38,
    "gender": "male",
    "contact": "09248301736"
    },
    {
    "name": "Gina Ayala",
    "age": 22,
    "gender": "female",
    "contact": "09274028492"
    },
    {
    "name": "Herman Montano",
    "age": 27,
    "gender": "male",
    "contact": "09592840193"
    },
    {
    "name": "Camille Tan",
    "age": 32,
    "gender": "female",
    "contact": "09281048295"
    }
]

let sampleObj = {
    "name": "Juan Dela Cruz",
    "age": "21",
    "gender": "male",
    "contact": "09129205827"
    }

//For-in/of loop
for(let x in sampleObj){
    console.log(sampleObj[x]);
}

//For loop
for (let x = 0; x < personDetails.length; x++) {
    console.log(personDetails[x]);
}

//While loop
let x = 0;
while(x < personDetails.length) {
    console.log(personDetails[x]);
    x++;
}

//For-Each Loop
personDetails.forEach(function(val, index) {
    console.log(`${index}: ${val.name}`);

})

//Filter
let personBelow25 = personDetails.filter(function(data) { return data.age < 25 });
console.log(personBelow25);

let personMale = personDetails.filter(function(data) { return data.gender == "male"});
console.log(personMale);

//Map
let contactMapped = personDetails.map(function(data) {return data.contact});
console.log(contactMapped);

let nameMapped = personDetails.map(function(data) {return data.name});
console.log(nameMapped);

//Reduce
let sumAge = personDetails.reduce(function(accumulator, data) { return accumulator + data.age}, 0);
console.log(sumAge);