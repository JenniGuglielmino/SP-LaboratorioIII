export const validarCampoVacio = (e) => {
    const input = e.target;
    input.value.trim() ? clearError(input) : setError(input, "Campo requerido");
  };

  export const validarNumeros = (e) => {
    const input = e.target;
    const number = input.value;

    if(number != 2 || number != 4 || number != 5)
    {
        setError( input, "Debe ser un valor igual a 2, 4 o 5");
    }
    else
    {
        clearError(input);
    }
  };

  const clearError = (input, mensaje) => {
    const $small = input.nextElementSibling;
    $small.textContent = "";
    input.classList.remove("inputError");
    $small.classList.remove("danger");
  };
