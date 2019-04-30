import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service';
import {User} from '../class/user';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.sass']
})
export class CrearUsuarioComponent implements OnInit {
  nuevousuario = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.email, Validators.required]),
    telefono: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required])
  });

  constructor(private snackBar: MatSnackBar, private usuarioService: UsuariosService,  ) {  }

  ngOnInit() {
  }

  crear() {
    console.log(this.nuevousuario.value);
    if (this.nuevousuario.valid) {
      const user: User = this.nuevousuario.value;
      this.usuarioService.insertarUsuario(user);
      this.nuevousuario.setValue({
        nombres: '',
        apellidos: '',
        telefono: '',
        correo: '',
        fechaNacimiento: {}
        });
      this.snackBar.open('Guardado con éxito', 'cerrar', {
        duration: 2000,
      });
    } else {
      console.log('error');
    }
  }

}
