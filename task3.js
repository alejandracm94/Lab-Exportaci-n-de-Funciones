export function calculadoraEdad(anio, mes, dia) {
  let hoy = new Date();

  let nacimiento = new Date(anio, mes, dia);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  let diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

  if (
    diferenciaMes < 0 ||
    (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  return edad;
}