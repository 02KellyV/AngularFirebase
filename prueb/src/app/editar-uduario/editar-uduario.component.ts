import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../class/user';

@Component({
  selector: 'app-editar-uduario',
  templateUrl: './editar-uduario.component.html',
  styleUrls: ['./editar-uduario.component.sass']
})
export class EditarUduarioComponent implements OnInit {
  id: string;
  nuevousuario = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.email, Validators.required]),
    telefono: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required])
  });
  usuario: User;

  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.traerUsuario(this.id);
    });
  }

  traerUsuario(id) {
    this.usuarioService.obtenerUsuarioPorId(id).subscribe((usuario: User[]) => {
      this.usuario = usuario [0];
      this.nuevousuario.setValue({
        nombres: this.usuario.nombres,
        apellidos: this.usuario.apellidos,
        correo: this.usuario.correo,
        telefono: this.usuario.telefono,
        fechaNacimiento: this.usuario.fechaNacimiento
      });
    });
  }

  editar() {
    if (this.nuevousuario.valid) {
      const user: User = this.nuevousuario.value;
      user.id = this.id;
      this.usuarioService.actualizarUsuario(user);
      this.router.navigate(['/listarusuario']);
    } else {
      console.log('error');
    }
  }
}
