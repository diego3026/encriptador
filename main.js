// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function desencriptar() {
    let texto = document.querySelector('.encriptador__texto').value;
    const palabras = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };

    if (texto !== "") {
        let contador = 0;
        let desencriptado = "";
        while (contador < texto.length) {
            let encontrado = false;

            for (let palabra in palabras) {
                if (texto.startsWith(palabra, contador)) {
                    desencriptado += palabras[palabra];
                    contador += palabra.length;
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                desencriptado += texto[contador];
                contador++;
            }
        }

        colocarMensaje(desencriptado);
    }
}

function encriptar() {
    let texto = document.querySelector('.encriptador__texto').value;
    if (texto !== "") {
        let encriptado = '';
        for (const caracter of texto) {
            if (caracter === 'e') {
                encriptado += 'enter';
            } else if (caracter === 'i') {
                encriptado += 'imes';
            } else if (caracter === 'a') {
                encriptado += 'ai';
            } else if (caracter === 'o') {
                encriptado += 'ober';
            } else if (caracter === 'u') {
                encriptado += 'ufat';
            } else {
                encriptado += caracter;
            }
        }
        colocarMensaje(encriptado);
    }
}

function cargarEstilos() {
    let boton_copiar = document.querySelector('.contenedor__boton');
    let mensaje_imagen = document.querySelector('.mensajes__imagen');
    let mensaje_info = document.querySelector('.mensajes__info');
    let contenedor = document.querySelector('.mensajes');
    let mensaje = document.querySelector('.mensaje');

    if (mensaje !== null) {
        mensaje.style.display = "block";
    }

    if (mensaje_imagen !== null && mensaje_info !== null) {
        mensaje_imagen.style.display = "none";
        mensaje_info.style.display = "none";
    }

    if (contenedor !== null) {
        contenedor.style.justifyContent = "normal";
        contenedor.style.alignItems = "start";
        contenedor.style.padding = "15px";
    }

    if (boton_copiar !== null) {
        boton_copiar.style.display = 'block';
    }
}

function colocarMensaje(mensajeEncriptado) {
    cargarEstilos();

    let mensaje = document.querySelector('.mensaje');
    mensaje.innerHTML = mensajeEncriptado
}

async function copiar() {
    let mensaje = document.querySelector('.mensaje');

    if (mensaje !== null) {
        try {
            await navigator.clipboard.writeText(mensaje.innerHTML);
            alert('Contenido copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }
}