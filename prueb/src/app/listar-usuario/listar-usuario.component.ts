import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service';
import {User} from '../class/user';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.sass']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: User[] = [];
  displayedColumns: string[] = ['nombres', 'apellidos', 'correo', 'telefono', 'fechaNacimiento', 'acciones'];
  dataSource = new MatTableDataSource([]);
  constructor(private usuarioService: UsuariosService ) {  }

  ngOnInit() {
    this.usuarios = this.usuarioService.mostrarUsuario();

    this.usuarioService.obtenerUsuario().subscribe(usuario => {
      console.log(usuario);
      this.usuarios = usuario;
      this.dataSource.data = this.usuarios;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminar(id: string) {
    this.usuarioService.borrarUsuario(id);
    // this.dataSource.data = this.usuarioService.eliminarUsuario(id);
  }
}
