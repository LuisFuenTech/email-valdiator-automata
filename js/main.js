document.getElementById('year').innerHTML = new Date().getFullYear();

try {
  document
    .getElementById('validarInstitucional')
    .addEventListener('click', handleValidarCorreo);
} catch (error) {}

try {
  document
    .getElementById('validarComercial')
    .addEventListener('click', handleValidarCorreo);
} catch (error) {}

function handleValidarCorreo(event) {
  event.preventDefault();
  const tipo = event.target.id;

  if (tipo === 'validarInstitucional') {
    const regex = new RegExp(
      /^(([a-z]+)\.([a-z]+)\.(20(19|20)))@(([a-z]+)(\.edu)(\.[a-z]{2})?)$/
    );
    const correo = document.getElementById('correoInstitucional').value;

    if (regex.test(correo)) {
      document.getElementById('resultadoInstitucional').innerHTML = `
        <div
            style="display: block;"
            class="alert alert-success mt-2"
            role="alert"
            id="resultadoInstitucional"
          >El correo es válido</div>
        `;
    } else {
      document.getElementById('resultadoInstitucional').innerHTML = `
        <div
            style="display: block;"
            class="alert alert-danger mt-2"
            role="alert"
            id="resultadoInstitucional"
          >El correo no es válido</div>
        `;
    }
  }

  if (tipo === 'validarComercial') {
    const regex = new RegExp(
      /^((2019|20[2-9][0-9]|2[1-9][0-9]{2}|[3-9][0-9]{3})\.([a-z]+)\.([a-z]+))@(([a-z]+)\.(com)\.(co))$/
    );

    const correo = document.getElementById('correoComercial').value;

    if (regex.test(correo)) {
      document.getElementById('resultadoComercial').innerHTML = `
          <div
              style="display: block;"
              class="alert alert-success mt-4"
              role="alert"
              id="resultadoComercial"
            >El correo es válido</div>
          `;
    } else {
      document.getElementById('resultadoComercial').innerHTML = `
          <div
              style="display: block;"
              class="alert alert-danger mt-4"
              role="alert"
              id="resultadoComercial"
            >El correo no es válido</div>
          `;
    }
  }
}
