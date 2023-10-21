const modo = document.querySelector('.toggle-mode')



function mostarAlerta() {
    alert("Este articulo se añadira proximamente")
}

function saludarAlPete() {
    alert("Hola gato")
}
modo.addEventListener('click', function () {

    document.body.classList.toggle('dark-mod')

    const pDarck = document.querySelector('p');

    pDarck.forEach(function (pDarck) {
        pDarck.classList.toggle('dark-mod')
    });

    const h1 = document.querySelector('h1')

    h1.forEach(function (h1) {
        h1 = document.toggle('dark-mod')
    })

})

modo.addEventListener('click', function () {
    alert("Usted a cambiado de modo")
})



const form = document.querySelector('.myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let todoCorrecto = false;


    const numerotarjeta = document.querySelector('.credit-card');
    const tarjetanum = numerotarjeta.value;

    const numerotarjetaclav = document.querySelector('.credit-card-password');
    const tarjetanumclav = numerotarjetaclav.value;

    if (tarjetanumclav.length != 3) {
        todoCorrecto = true;
    }

    if (tarjetanum.length != 16) {
        todoCorrecto = true;
    }


    if (todoCorrecto) {
        alert("datos incorrectos");
    } else {
        alert("Gracias sus datos se utilizaran para comprar una tv ")
    }

}
function validateFormEmail() {
    let todoCorrecto = false;

    const emailInput = document.querySelector('.email');
    const email = emailInput.value;


    if (!validateEmail(email)) {
        todoCorrecto = true;
    }

    if (todoCorrecto) {
        alert("datos incorrectos");
    } else {
        alert("Gracias sus datos se le llenara de spam su email tasbitalia camarrada")
    }

}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").      
           classList.toggle("nav-links-responsive")
                    
                    })


          //Esto era antes de conocer el grid

/*

                     // Obtener el contenedor
    var contenedor = document.getElementById("articulos-container");

    // Obtener todos los elementos dentro del contenedor
    var elementos = contenedor.children;

    // Dividir los elementos en grupos de tres
    var grupos = [];
    var grupoActual = [];
    var contador = 0;

    for (var i = 0; i < elementos.length; i++) {
        grupoActual.push(elementos[i]);
        contador++;
        if (contador === 4) {
            grupos.push(grupoActual);
            grupoActual = [];
            contador = 0;
        }
    }

    if (grupoActual.length > 0) {
        grupos.push(grupoActual);
    }
    

    // Vaciar el contenedor original
    contenedor.innerHTML = "";

    // Agregar los grupos de elementos al contenedor en líneas separadas
    for (var j = 0; j < grupos.length; j++) {
        var linea = document.createElement("div");
        linea.classList.add("linea");

        for (var k = 0; k < grupos[j].length; k++) {
            linea.appendChild(grupos[j][k]);
        }

        contenedor.appendChild(linea);
    }
    */