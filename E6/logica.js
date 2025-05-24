function validar() {
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let edad = parseInt(document.getElementById("edad").value);
            let altura = parseInt(document.getElementById("altura").value);
            let correo = document.getElementById("correo").value;
            let mensaje = document.getElementById("mensaje");
            let errores = [];
            if (!nombre || nombre.length > 50) errores.push("El nombre es inválido.");
            if (!apellido || apellido.length > 50) errores.push("El apellido es inválido.");
            if (isNaN(edad) || edad < 18) errores.push("La edad debe ser mayor o igual a 18.");
            if (isNaN(altura) || altura < 0 || altura > 230) errores.push("La altura debe estar entre 0 y 230 cm.");
            if (!correo.includes("@")) errores.push("El correo electrónico debe contener '@'.");

            if (errores.length > 0) {
                mensaje.textContent = errores.join(" ");
                mensaje.className = "error";
            } else {
                mensaje.textContent = "¡Todos los datos son válidos!";
                mensaje.className = "correcto";
            }
        }