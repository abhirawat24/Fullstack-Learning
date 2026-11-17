const people = [
    {firstName: "Abhishek", lastName: "Rawat",gender: "male",age: 21},
    {firstName: "Ashish", lastName: "Karakoti",gender: "male",age: 20},
    {firstName: "Geeta", lastName: "Rawat",gender: "female",age: 52},
    {firstName: "Mansi", lastName: "Rawat",gender: "female",age: 22},
];
function printMaleFirstNames(people){
    people.forEach(people=>{
        if(people.gender === "male"){
            console.log(people.firstName);
        }}
    );
}

printMaleFirstNames(people);