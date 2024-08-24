document.getElementById('formulario').addEventListener('submit', function(event) {
    let isValid = true;

    const cedula = document.getElementById('cedula');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');

    const nombrePattern = /^[a-zA-Z\s]+$/;

    //* Validar la cédula
    const cedulaValue = cedula.value.trim();
    if (cedulaValue === '') {
        document.getElementById('error-cedula').textContent = '*Campo requerido';
        document.getElementById('error-cedula').style.display = 'inline';
        isValid = false;
    } else if (!/^\d+$/.test(cedulaValue) || cedulaValue.length > 10) {
        document.getElementById('error-cedula').textContent = '*Debe ser un número entero positivo con hasta 10 cifras';//aqui vaido que primero no se coloquen solo digitos y que solo valide hasta 10 cifras
        document.getElementById('error-cedula').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('error-cedula').style.display = 'none';
    }

    //* Validar el nombre
    if (nombre.value.trim() === '') {
        document.getElementById('error-nombre').textContent = '*Campo requerido';
        document.getElementById('error-nombre').style.display = 'inline';
        isValid = false;
    } else if (!nombrePattern.test(nombre.value)) { //aseguro que el campo de nombre contenga solo letras y espacios
        document.getElementById('error-nombre').textContent = '*Solo se permiten letras y espacios';
        document.getElementById('error-nombre').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('error-nombre').style.display = 'none';
    }

    // Validar el correo electrónico
    const emailValue = email.value.trim();
    if (emailValue === '') {
        document.getElementById('error-email').textContent = '*Campo requerido';
        document.getElementById('error-email').style.display = 'inline';
        isValid = false;
    } else if (!email.validity.valid) {
        document.getElementById('error-email').textContent = '*Correo electrónico inválido';
        document.getElementById('error-email').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('error-email').style.display = 'none';
    }

    //? Si hay errores, evita que el formulario se envíe. solo por si acaso
    if (!isValid) {
        event.preventDefault();
    }

});
