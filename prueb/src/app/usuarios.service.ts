import { Injectable } from '@angular/core';

import {User} from './class/user';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: User [] = [];
  user: Observable<User[]>;

  usuarioCollection: AngularFirestoreCollection<User>;
  constructor( private afs: AngularFirestore) {
    this.usuarioCollection = afs.collection<User>('usuario');
    this.user = this.usuarioCollection.valueChanges();
  }

  obtenerUsuario() {
    return this.user;
  }

  obtenerUsuarioPorId(id: string) {
    return this.afs.collection('usuario',
      ref => ref.where('id', '==', id)).valueChanges();
  }


  insertarUsuario( usuario: User) {
    usuario.id = this.afs.createId();
    this.usuarioCollection.doc(usuario.id).set(usuario);
}
  borrarUsuario( id: string) {
    this.usuarioCollection.doc(id).delete();
    console.log(id);
  }

  actualizarUsuario(usuario: User) {
    this.usuarioCollection.doc(usuario.id).update(usuario);
  }

  mostrarUsuario() {
    const user: User [] = JSON.parse(localStorage.getItem('usuarios'));
    for (let i = 0; i < user.length; i++) {
      user[i].id = i.toString();
    }
    return user;
  }
  /*

    nuevoUsuario(usuario: User) {
      this.usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      this.usuarios.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
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
    }*/
}

