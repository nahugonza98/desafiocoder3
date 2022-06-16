
/* Llamados require */
const express = require("express")
const app = express();
const port = 8080;
const routes = require("./routes/index");


/* Configuraciones express */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/* __dirname = direccion de la carpeta completa */
app.use("/", express.static(__dirname + "/public"))
app.use("/api/productos", routes)



app.use((req, res) => {
    res.status(404).send("No pudimos encontrar la dirección")
})

app.use((err, req, res) => {
    console.error(err)
    res.status(500).send("Ocurrió un error")
})

app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})