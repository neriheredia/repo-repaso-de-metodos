const customers = [
    { name: "Leane Graham", age: 36, occupation: "Finance", end: 1999 },
    { name: "Ervin Hough", age: 29, occupation: "Technology", end: 2000 },
    { name: "Victor Plains", age: 20, occupation: "Sport", end: 2015 },
    { name: "John Bauch", age: 61, occupation: "Technology", end: 1987 },
    { name: "Patricia Lebsack", age: 89, occupation: "Sport", end: 1999 },
    { name: "Chelsey Dietrich", age: 90, occupation: "Retail", end: 2008 },
    { name: "Mrs. Dennis Schilist", age: 39, occupation: "Retail", end: 2006 },
    { name: "Karina Villagra", age: 43, occupation: "Ventas", end: 2019 },
    { name: "Francisco Urbano", age: 38, occupation: "Panadero", end: 2022 },
    { name: "Sandra Noemi Urbano", age: 36, occupation: "Ventas", end: 1990 },
];

//  Obtener un arreglo con la edad de cada uno de los clientes

const result = customers.map((customer) => {
    return customer.end;
});

console.log(result);
//  Obtener un arreglo con los clientes y su edad sumada en 5



//  Traer el apellido de cada cliente

