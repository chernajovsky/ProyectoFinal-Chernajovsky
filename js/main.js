import { peticion } from "./peticiones.js"

const productosContenedor = document.getElementById("productosContenedor")

function mostrarProductos(productos) {
    productos.forEach(producto => {
        const div = document.createElement("div")
        div.className = "card"
        div.style = "width: 18rem;"
        div.innerHTML = `
        <img src="${producto.urlImagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <h4 class="card-title">$ ${producto.precio}</h4>
        <p class="card-text">${producto.detalle}</p>
        </div>
        <a href="https://deportivofull.com/compras-por-mayor/?gclid=Cj0KCQiA3eGfBhCeARIsACpJNU_wLnBdMRvDI2krI5tRgGS6xGnIuMDBZlj2OzmvhTIFFBNY2WtYt7IaAqDQEALw_wcB" class="btn btn-primary">Pedir al almacén</a>
        `
        productosContenedor.append(div)
    })
}

mostrarProductos(productos)

document.addEventListener("DOMContentLoaded",e=>{
    peticion()
})