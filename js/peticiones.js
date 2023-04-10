export function peticion(){
    fetch("/assets/productos.json")
    .then((res)=> res.ok ? res.json() : Promise.reject("Error en la peticion"))
    .then(res => res.forEach(el => console.log(el)))
    .catch(err => console.log(err))
} 