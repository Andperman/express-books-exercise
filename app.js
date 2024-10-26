
const books = require('./data/books.json');
const express = require("express"); 
const app = express(); 
const port = 3000; 

app.use(express.json()); // Middleware para parsear el body de las peticiones

//EJERCICIO 1
// Ruta para obtener todos los libros  http://localhost:3000/all
app.get('/all', (req, res) => {
    res.send(books); // Enviar la lista completa de libros como respuesta
});


//EJERCICIO 2
//Crea una ruta  http://localhost:3000/first para obtener el primer libro

app.get('/first', (req, res) => {
    res.send(books[0]); 
});


//EJERCICIO 3
//Crea una ruta  http://localhost:3000/last para obtener el último libro

app.get('/last', (req, res) => {
    res.send(books[books.length -1]); 
});

//EJERCICIO 4
//Crea una ruta  http://localhost:3000/middle para obtener el libro en la mitad (número 50 en el array)

app.get('/middle', (req, res) => {
    res.send(books[middle.length]); 
});



//EJERCICIO 5
//Crea una ruta  http://localhost:3000/author/dante-alighieri para obtener SÓLO EL TÍTULO del libro de Dante Alighieri



app.get('/author/dante-alighieri', (req, res) => {
const book = books.find(b => b.author === "Dante Alighieri");
    res.send(book.title); 
});


//EJERCICIO 6
//Crea una ruta  http://localhost:3000/country/charles-dickens para obtener SÓLO EL PAÍS del libro de Charles Dickens

app.get('/country/charles-dickens', (req, res) => {
    const book = books.find(b => b.author === "Charles Dickens");
        res.send(book.country); 
    });
    
//EJERCICIO 7   http://localhost:3000/year&pages/cervantes
// Crea una ruta /year&pages/cervantes para obtener LAS PÁGINAS 
// Y EL AÑO del libro de Miguel de Cervantes, Ejemplo de respuesta: { pages: ..., year: ... }

app.get('/year&pages/cervantes', (req, res) => {
    const book = books.find(b => b.author === "Miguel de Cervantes");
        res.send({ pages: book.pages, year: book.year }); 
    });

 //EJERCICIO 8     http://localhost:3000/country/count/spain
 //Crea una ruta /country/count/spain para obtener EL NÚMERO DE LIBROS de España

 app.get('/country/count/spain', (req, res) => {
    const count = books.filter(b => b.country === "Spain").length;
    res.send({ count: count });
});


//EJERCICIO 9     http://localhost:3000/country/at-least/germany
//Crea una ruta /country/at-least/germany para obtener VERDADERO O FALSO dependiendo de si hay o no un libro de Alemania
app.get('/country/at-least/germany', (req, res) => {
    const count = books.filter(b => b.country === "Alemania").length;
    res.send({ count: count });
    if (count > 0) {
        res.send({ exists: true });
    } else  {
        res.send({ exists: false });
 

    }
}
);

 //EJERCICIO 10     http://localhost:3000/pages/all-greater/200
//  Crea una ruta /pages/all-greater/200 para obtener 
//  VERDADERO O FALSO dependiendo de si todos los libros tienen más de 200 páginas

app.get('/pages/all-greater/200', (req, res) => {
    const pages = books.every(b => b.pages > 200);
    
    if (pages) {
        res.send({ exists: true });
    } else {
        res.send({ exists: false });
    }
});

app.use("*",(req, res) => {
    res.status(404).send("Ruta no encontrada");
  });

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
