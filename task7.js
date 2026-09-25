export function rubricaPerfecto(puntaje) {
  puntaje = Number(puntaje);

  if (puntaje === 11) {
    return "Perfecto";
  } else if (puntaje > 8) {
    return "Excelente";
  } else if (puntaje >= 5) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}