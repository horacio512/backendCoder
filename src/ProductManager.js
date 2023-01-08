import fs from "fs"

class ProductManager {

    constructor(path) {
        this.path = path
    }

    getProducts = async () => {

        if (fs.existsSync(`${this.path}data.json`)) {
            let contenido = await JSON.parse(fs.readFileSync(`${this.path}data.json`, "utf-8"))
            return contenido
        }
        else {
            console.log("No hay información.")
        }

    }

    getProductById = async (id) => {
        if (fs.existsSync(`${this.path}data.json`)) {
            const data = await JSON.parse(fs.readFileSync(`${this.path}data.json`))
            let isTrue = data.some(e => e.id === id)
            if (isTrue === true) {
                let find = data.find(e => e.id === id)
                return find
            }
            else {
                return "Error Producto no existe"
            }
        }
    }

}

//let producto = new ProductManager();

//producto.getProducts();

export default ProductManager

