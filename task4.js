export class EdadAmigo {
  constructor(nombre, anio, mes, dia) {
    this.nombre = nombre;
    this.anio = anio;
    this.mes = mes;
    this.dia = dia;
  }

  retornarEdad() {
    let hoy = new Date();

    let nacimiento = new Date(this.anio, this.mes, this.dia);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    let diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

    if (
      diferenciaMes < 0 ||
      (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }

    return "¡" + this.nombre + " tiene " + edad + " años hoy!";
  }
}