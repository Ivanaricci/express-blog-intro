// importazione di express
const express = require('express');

// inizializzazione di express nella variabile app
const app = express();

// definizione del numero di porta
const port = 3000;

// definizione della rotta base
app.get('/', (req, res) => {
    res.send('hello world')
})

// inserimento del metodo che lascia in ascolto il server
app.listen(port, () => {
    console.log(`server in ascolto`)
})