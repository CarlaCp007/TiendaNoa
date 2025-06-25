const productosArray = [
    {
        id:"cepillo01",
        nombre: "Cepillo limpiador",
        imagen: "./img/producto/cepillo9.png",
        precio: 15.99,
        categoria: {
            nombre:"Hogar",
            id:"Hogar"
        },
    },
    {
        id: "secador01",
        nombre: "Secador de ropa",
        imagen: "./img/producto/secadorropa.jpg",
        precio: 34.99,
        categoria: {
            nombre: "Hogar",
            id: "hogar"
        },
    },
    {
        id: "rueda01",
        nombre: "Rueda abdominal ABS",
        imagen: "./img/producto/rodabdominal.webp",
        precio: 21.99,
        categoria: {
            nombre: "Salud",
            id: "salud"
        },
    },
    {
        id: "proyector01",
        nombre: "Proyector parlante Huevo Dinosaurio",
        imagen: "./img/producto/proyectordino+.jpg",
        precio: 44.99,
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
    },
    {
        id: "joyero01",
        nombre: "Joyero 4 compartimentos",
        imagen: "./img/producto/joyero4.jpg",
        precio: 26.99,
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
    },
    {
        id: "irrigador01",
        nombre: "Irrigador dental",
        imagen: "./img/producto/irrigador.png",
        precio: 24.99,
        categoria: {
            nombre: "Salud",
            id: "salud"
        },
    },
    {
        id: "hulahoop01",
        nombre: "Hula Hoop ajustable",
        imagen: "./img/producto/hulahoop.png",
        precio: 19.99,
        categoria: {
            nombre: "Salud",
            id: "salud"
        },
    },
    {
        id: "dispensador01",
        nombre: "Dispensador de papel de cocina",
        imagen: "./img/producto/dispensadorpapel.jpg",
        precio: 16.99,
        categoria: {
            nombre: "Hogar",
            id: "hogar"
        },
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonescategorias = document.querySelectorAll(".boton-categoria");
let botonesagregar = document.querySelectorAll(".botonagregar");

function CargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = ""; // Limpia antes de cargar
    productosElegidos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="prod_img" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="prod_info">
            <h3 class="prod_titu">${producto.nombre}</h3>
            <span>$${producto.precio.toFixed(2)}</span>
            <button class="botonagregar" data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar(); // Actualiza los botones de agregar al carrito
}

CargarProductos(productosArray); // Carga todos los productos al inicio

botonescategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonescategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
        const productosBoton = productosArray.filter(producto => producto.categoria.id === e.currentTarget.id);
        CargarProductos(productosBoton);
        }
        else {
            CargarProductos(productosArray); // Carga todos los productos si se selecciona "todos"
        }
    });
});

function actualizarBotonesAgregar() {
    botonesagregar=document.querySelectorAll(".botonagregar");
}