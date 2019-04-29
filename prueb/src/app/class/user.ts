export class User {
  id: string;
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  fechaNacimiento: CalendarDate;
}

class CalendarDate {
  year: number;
  month: number;
  day: number;

}
