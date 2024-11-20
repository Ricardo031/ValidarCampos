document.getElementById('formulario').addEventListener('submit', function(event) {
    let isValid = true;

    //* Obtener los campos del formulario
    const contra = document.getElementById('contra');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const edad = document.getElementById('edad');
    const email = document.getElementById('email');
    const edadValue = edad.value.trim();

    const nombrePattern = /^[a-zA-Z\s]+$/;

    //* Validar la Contraseña
    const contraValue = contra.value.trim();
    if (contraValue === '') {
        showError('error-contra', '*Campo requerido');
        isValid = false;
    } else if (contraValue.length < 8) {
        showError('error-contra', '*Debe tener al menos 8 caracteres');
        isValid = false;
    } else {
        hideError('error-contra');
    }

    //* Validar el nombre
    if (nombre.value.trim() === '') {
        showError('error-nombre', '*Campo requerido');
        isValid = false;
    } else if (!nombrePattern.test(nombre.value)) {
        showError('error-nombre', '*Solo se permiten letras y espacios');
        isValid = false;
    } else {
        hideError('error-nombre');
    }

    //* Validar el apellido
    if (apellido.value.trim() === '') {
        showError('error-apellido', '*Campo requerido');
        isValid = false;
    } else if (!nombrePattern.test(apellido.value)) {
        showError('error-apellido', '*Solo se permiten letras y espacios');
        isValid = false;
    } else {
        hideError('error-apellido');
    }

    //* Validar el correo electrónico
    const emailValue = email.value.trim();
    if (emailValue === '') {
        showError('error-email', '*Campo requerido');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        showError('error-email', '*Correo electrónico inválido');
        isValid = false;
    } else {
        hideError('error-email');
    }

    //* Validar la Edad
    if (edadValue === '') {
        showError('error-edad', '*Campo requerido');
        isValid = false;
    } else if (!/^\d+$/.test(edadValue) || parseInt(edadValue) < 18) {
        showError('error-edad', '*Debe ser mayor a 18 años');
        isValid = false;
    } else {
        hideError('error-edad');
    }

    //* Validar la selección de sexo
    const selectedSex = document.querySelector('.button-sex.selected-masculino, .button-sex.selected-femenino, .button-sex.selected-binario');
    const errorSexo = document.getElementById('error-sexo');
    if (!selectedSex) {
        showError('error-sexo', '*Campo requerido');
        isValid = false;
    } else {
        hideError('error-sexo');
    }

    //* Evitar el envío del formulario si hay errores solo por si acaso xd
    if (!isValid) {
        event.preventDefault();
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.classList.add('active'); 
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.classList.remove('active'); 
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('contra');
    const passwordToggle = document.querySelector('.password-toggle img');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.src = 'icons/View.svg'; 
    } else {
        passwordInput.type = 'password';
        passwordToggle.src = 'icons/View.svg'; 
    }
}

function selectSex(selectedButton) {
    // Obtener todos los botones
    const buttons = document.querySelectorAll('.button-sex');

    // Quitar clases seleccionadas de todos los botones
    buttons.forEach(button => {
        button.classList.remove('selected-masculino', 'selected-femenino', 'selected-binario');
    });

    // aqui hago un ciclado cuando voy seleccionando cada uno de las opcines
    if (selectedButton.classList.contains('masculino')) {
        selectedButton.classList.add('selected-masculino');
    } else if (selectedButton.classList.contains('femenino')) {
        selectedButton.classList.add('selected-femenino');
    } else if (selectedButton.classList.contains('binario')) {
        selectedButton.classList.add('selected-binario');
    }
    validateSex();
}

function validateSex() {
    const errorSexo = document.getElementById('error-sexo');
    const selectedButton = document.querySelector('.button-sex.selected-masculino, .button-sex.selected-femenino, .button-sex.selected-binario');

    // Si ya lo tengo seleccionado pues se quita el mensaje
    if (selectedButton) {
        hideError('error-sexo');
    } else {
        showError('error-sexo', '*Campo requerido');
    }
}
