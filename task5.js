export function rubricaAprobadoReprobado(puntaje) {
  if (puntaje >= 5) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}