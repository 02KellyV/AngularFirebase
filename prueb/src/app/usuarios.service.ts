import { Injectable } from '@angular/core';

import {User} from './class/user';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: User [] = [];

  usuariolist: AngularFireList<any> = null;
  constructor( private firebase: AngularFireDatabase) {
  }

  obtenerUsuario() {
    return this.usuariolist = this.firebase.list('usuarios');
  }

  insertarUsuario( usuario: User) {
    console.log(this.usuariolist);
    this.usuariolist.push({

      nombre: usuario.nombres,
      apellido: usuario.apellidos,
      correo: usuario.correo,
      telefono: usuario.telefono,
      fechaNacimiento: usuario.fechaNacimiento
    });
    console.log(this.usuariolist);
  }


  nuevoUsuario(usuario: User) {
    this.usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    this.usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  mostrarUsuario() {
    const user: User [] = JSON.parse(localStorage.getItem('usuarios'));
    for (let i = 0; i < user.length; i++) {
      user[i].id = i.toString();
    }
    return user;
  }

  eliminarUsuario(id: string) {
    const user: User[] = JSON.parse(localStorage.getItem('usuarios'));
    user.splice(Number(id), 1);
    localStorage.setItem('usuarios', JSON.stringify(user));
    return user;
  }

  traerUsuarioPorId(id: string) {
    const user: User[] = JSON.parse(localStorage.getItem('usuarios'));
    return user[Number(id)];

  }

  editarUsuario(usuario: User) {
    const user: User [] = JSON.parse(localStorage.getItem('usuarios'));
    user[Number(usuario.id)] = usuario;
    localStorage.setItem('usuarios', JSON.stringify(user));
  }
}

