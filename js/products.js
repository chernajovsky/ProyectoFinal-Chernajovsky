class Producto {
    constructor(id, titulo, detalle, precio, urlImagen) {
        this.id = id
        this.titulo = titulo
        this.detalle = detalle
        this.precio = precio
        this.urlImagen = urlImagen
    }
}

const product1 = new Producto(1, "Pantalón", "Línea running", 15000, "./images/NI_CI2911-091-1.jpg")
const product2 = new Producto(1, "Medias", "Línea home", 1000, "./images/everyday-lightweight-training-crew-socks.jpg")
const product3 = new Producto(1, "Buzo", "Línea workout", 18000, "./images/buzo.jpg")
const product4 = new Producto(1, "Reloj", "Línea digital", 80000, "./images/D_NQ_NP_824853-MLA48574792751_122021-O.jpg")

const productos = [product1, product2, product3, product4]
