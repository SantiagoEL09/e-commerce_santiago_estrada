
const productId = Number(window.location.search.split("=")[1]);
const productFilter = data.find((product) => product.id === productId);
const section = document.querySelector("section")
const message = document.querySelector(".message")
  
if (productFilter){
    let etiquetas = `
        <div class="cardProduct">
            <img src="${productFilter.img}" class="card-img-top" alt="logoPrincipal ${productFilter.title}">
            <div class="detailProduct">
                <h4 class="card-title">${productFilter.title}</h4>  
                <p class="card-text">${productFilter.detail}</p>
                <h5>USD $${productFilter.price}</h5>
                <p>Stock disponible: ${productFilter.stock}</p>
                <p>Categoría: ${productFilter.category}</p>
                ${productFilter.category === "Juegos" ? ` ` : `<p>Marca: ${productFilter.brand}</p>`}
                <div>
                    ${localStorage.getItem("email") ? `
                        <div class="input-group">
                            <button class="btn btn-dark" type="button" onclick="decreaseItems()" >-</button>
                            <input type="number" class="form-control" value="1" id="counter" />
                            <button class="btn btn-dark" type="button" onclick="increaseItems()">+</button>
                        </div>
                        <p class="message"></p>
                        <button class="btn btn-primary" onclick="addItems()">Agregar al Carrito</button>` : `
                        <button class="login" onclick="location.href='./login.html'">Iniciar sesión para comprar</button>`
                    }
                </div>
            </div>           
        </div>`;
        section.innerHTML = etiquetas;
    };

const counter = document.querySelector("#counter")

    function increaseItems() {

        /* const productId = Number(window.location.search.split("=")[1]);
        const productFilter = data.find((product) => product.id === productId); */
    
        if (counter.value < productFilter.stock){
            counter.value = Number(counter.value) + 1;
        } 
        /* Falta condiciones */
    }  
    
    function decreaseItems() {

        if (counter.value > 1){
            counter.value = Number(counter.value) - 1;
        } 
    /* Falta condiciones */
    }
    
function addItems() {
    let cart = JSON.parse(localStorage.getItem("cart"))

const idProduct = Number(window.location.search.split("=")[1])
const product = data.find(item => item.id === idProduct)
const existedId = cart.some(item => item.product.id === idProduct)

if (existedId) {
    cart = cart.map(item => {
        if (item.product.id === idProduct) {
            return { ...item, quantity: item.quantity + Number(counter.value)}
          }  else {
            return item
            }
    })
} else {
    cart.push({ product: product, quantity: Number(counter.value)})
}
    localStorage.setItem("cart", JSON.stringify(cart))
    let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
    localStorage.setItem("quantity", quantity)
    const quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = quantity
    counter.value = "1"
}

    /* let cart = JSON.parse(localStorage.getItem("cart"));
    const productId = Number(window.location.search.split("=")[1]);
    const productFilter = data.find((product) => product.id === productId);
    const existingId = data.some((productFilter) => productFilter.id === productId)

    if (existingId){
        cart = cart.map((product) => {
            if (product.id === productId){
                return { ...product, quantity: product.quantity + Number(counter.value)}
            } else {
                return product
            }
        })

    } else {
        cart.push({id: productFilter, quantity: Number(counter.value) });
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", quantity)
    const quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = quantity
    counter.value = "1"
    
    console.log(cart)
    console.log(productFilter)
  
    console.log(productFilter.id) */

    
    /* let cart = JSON.parse(localStorage.getItem("cart"))

    let idExisted = data.some((product) => product.id === productId);
 
    cart.push({id: productFilter, quantity: Number(counter.value)});
    
    localStorage.setItem("cart", JSON.stringify(cart));

    let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);

    localStorage.setItem("quantity", quantity);

    document.querySelector("#quantity").innerHTML = `<i class='bx bx-cart'></i>${quantity}`

    console.log(cart)

    console.log(idExisted)

    console.log(productFilter)

    console.log(productId)

    console.log(productFilter.id)
 */
    

/* class productos {
    constructor (titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

let moto = new productos ("Husqvarna Svartpilen 200", "Pequeña en cilindraje pero llena de carácter de moto grande. Motor monocilíndrico 4 tiempos de 199.5 cc, diseño futurista y robusto.", "$17.990.000", "Disponible bajo pedido", {src:"https://motoeuropa.com.co/wp-content/uploads/2022/09/ME-web-svartpilen200.jpg"})

moto

let etiquetas = `
    <h1>  ${moto.titulo}</h1>
    <h2>  ${moto.detalle}</h2>
    <h3>  ${moto.precio}</h3>
    <p>  ${moto.stock}</p>  
    <img src="${moto.imagen.src}">`

const main = document.querySelector("main")
main.innerHTML = etiquetas; */