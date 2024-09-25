let productos = [];
let lista = {
    "Camisa": 300,
    "Pantalon": 500,
    "Zapatos": 800,
    "Sombrero": 200
};

// Esta función se ocupa para mostrar nuestro menú
function desplegarMenu() {
    return parseInt(prompt(`
        "Seleccione un producto para agregar al carrito:"
        1.- Camisa - $300
        2.- Pantalon - $500
        3.- Zapatos - $800
        4.- Sombrero - $200
        5.- Ver carrito y Total 
        6.- Salir
    `));
}

// Esta función se encarga de agregar los productos al carrito (nombre y precio)
const añadirProductoAlCarrito = (nombre, precio) => {
    productos.push({ nombre, precio });
    console.log("Producto \"" + nombre + "\" Se ha agregado al carrito." );
};

// Esta función se encarga de mostrarnos el total de productos en el carrito
function mostrarTotalCarrito() {
    if (productos.length === 0) {
        alert("El carrito no tiene productos");
    } else {
        let mensaje = "Carrito: \n";
        productos.forEach((producto, index) => {
            mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
        });
        
        let total = 0;
        for (let i = 0; i < productos.length; i++) {
            total += productos[i].precio;
        }
        
        mensaje += `\nTotal: $${total}`;
        console.log(mensaje);
    }
}

// Función para manejar el flujo del programa
function ejecutarProcesoCompra() {
    let continuar = true;
    while (continuar) {
        let opcion = desplegarMenu();
        switch (opcion) {
            case 1:
                añadirProductoAlCarrito("Camisa", lista.Camisa);
                break;
            case 2:
                añadirProductoAlCarrito("Pantalon", lista.Pantalon);
                break;
            case 3:
                añadirProductoAlCarrito("Zapatos", lista.Zapatos);
                break;
            case 4:
                añadirProductoAlCarrito("Sombrero", lista.Sombrero);
                break;
            case 5:
                mostrarTotalCarrito();
                continuar = false;
                break;
            case 6:
                alert("Programa finalizado ...");
                continuar = false;
                break;
            default:
                alert("Intente nuevamente. Su opcion no es valida");
        }
    }
    alert("Programa Finalizado");
}

// Programa inicia 
ejecutarProcesoCompra();
