export function rubricaExcelente(puntaje) {
  if (puntaje > 8) {
    return "Excelente";
  } else if (puntaje >= 5) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}