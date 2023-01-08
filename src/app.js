import ProductManager from "./ProductManager.js"
import express from "express"
const app = express()
const pm = new ProductManager("./")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/products", async (req, res) => {
    let consulta = req.query

    let data = await pm.getProducts()

    if (!consulta.limit) {
        res.send(data)
    }else{
        let limitData = data.slice(0, consulta.limit)
        res.send(limitData)
    }
})

app.get("/products/:id", async (req, res) => {
    let id = req.params.id
    id = parseInt(id)

    let producto = await pm.getProductById(id)

    res.send(producto)
})


app.listen(8080, () => {
    console.log("Funcionando puerto 8080.")
})