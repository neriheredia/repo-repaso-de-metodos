const customers = [
    { name: "Leane Graham", age: 36, occupation: "Finance", end: 1999 },
    { name: "Ervin Hough", age: 29, occupation: "Technology", end: 2000 },
    { name: "Victor Plains", age: 20, occupation: "Sport", end: 2015 },
    { name: "John Bauch", age: 61, occupation: "Technology", end: 1987 },
    { name: "Patricia Lebsack", age: 89, occupation: "Auto", end: 1999 },
    { name: "Chelsey Dietrich", age: 90, occupation: "Retail", end: 2008 },
    { name: "Mrs. Dennis Schilist", age: 39, occupation: "Retail", end: 2006 },
    { name: "Karina Villagra", age: 43, occupation: "Ventas", end: 2019 },
    { name: "Francisco Urbano", age: 38, occupation: "Panadero", end: 2022 },
    { name: "Pablo Neri Heredia", age: 31, occupation: "Technology", end: 2021 },
    { name: "Sandra Noemi Urbano", age: 36, occupation: "Ventas", end: 1990 },
];


// Sumar la edad de cada uno en uno

customers.forEach((customer) => {
    customer.age++;
});

console.log(customers);

//Traer los nombres que ayan muerto despues del 2000


// Traer los nombres de todos que tienen edad mayor a 30

