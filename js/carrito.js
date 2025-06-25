let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) ;
/*productosEnCarrito= JSON.parse(productosEnCarrito) ;*/

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".boton-eliminar");
const botonVaciar = document.querySelector("#boton-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#boton-comprar");

function CargarProductosCarrito(){
    if (productosEnCarrito && productosEnCarrito.length > 0) {


        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = ""; // Limpia el contenedor antes de agregar los productos

    productosEnCarrito.forEach(producto => {

        const div =document.createElement("div");
        div.classList.add("carprod");
        div.innerHTML = `
        <img class="carprodimg" src="${producto.imagen}" alt="${producto.nombre}">
                        <div class="carprodtitulo">
                            <small>Producto</small>
                            <h3>${producto.nombre}</h3>
                        </div>
                        <div class="carprodprecio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carprodcantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carprodsubtotal">
                            <small>Subtotal</small>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="boton-eliminar" id=${producto.id}><i class="bi bi-trash"></i></button>
                    </div>
        `;
        contenedorCarritoProductos.append(div);

    })


    } else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    actualizarBotonesEliminar(); // Actualiza los botones de eliminar del carrito
    actualizartotal(); // Actualiza el total al cargar los productos en el carrito
}

CargarProductosCarrito();



function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".boton-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    if (index !== -1) {
        if (productosEnCarrito[index].cantidad > 1) {
            productosEnCarrito[index].cantidad--; // Reduce en uno
        } else {
            productosEnCarrito.splice(index, 1); // Elimina si solo quedaba una unidad
        }

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        CargarProductosCarrito(); // Refresca la vista
    }
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0; // Vacía el array
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); // Actualiza el localStorage
    CargarProductosCarrito(); // Refresca la vista
}

function actualizartotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    total.innerText= `$${totalCalculado.toFixed(2)}`; // Muestra el total con dos decimales
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    productosEnCarrito.length = 0; // Vacía el array
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}