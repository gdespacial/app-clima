function probarValidarCity() {
    console.assert(
        validarCity('') === 'Este campo debe tener al menos 1 caracter',
        'Validar city no validó que el nombre no sea vacío'
    );
  
    console.assert(
        validarCity(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'debes ingresar un nombre más corto',
        'Validar city no validó que el nombre sea menor a 50 caracteres'
    )
console.assert(
    validarCity(1) === 'El campo nombre solo acepta letras',
    'Validar City no validó que el campo no contenga letras'
)

};

    probarValidarCity();