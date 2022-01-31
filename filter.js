const customers = [
    { name: "Leane Graham", age: 31, occupation: "Finance", end: 1999 },
    { name: "Ervin Hough", age: 29, occupation: "Technology", end: 2000 },
    { name: "Victor Plains", age: 20, occupation: "Sport", end: 2015 },
    { name: "John Bauch", age: 31, occupation: "Technology", end: 1987 },
    { name: "Patricia Lebsack", age: 89, occupation: "Sport", end: 1999 },
    { name: "Chelsey Dietrich", age: 90, occupation: "Retail", end: 2008 },
    { name: "Mrs. Dennis Schilist", age: 39, occupation: "Retail", end: 2006 },
    { name: "Karina Villagra", age: 43, occupation: "Ventas", end: 2019 },
    { name: "Francisco Urbano", age: 38, occupation: "Panadero", end: 2022 },
    { name: "Pablo Neri Heredia", age: 31, occupation: "Technology", end: 3000 },
    { name: "Sandra Noemi Urbano", age: 36, occupation: "Ventas", end: 1990 },
];

//Filtrar por nombre Pablo Neri Heredia

const result = customers.filter(n => n.name == 'Pablo Neri Heredia')

console.log(result);


//  Devuelva los clientes que trabajan en Technology



//  Devuelva los clientes que tienen 31 años



//  Devuelva los clientes que murieron en 1999
