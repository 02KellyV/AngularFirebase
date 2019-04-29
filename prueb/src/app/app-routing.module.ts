import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import {ListarUsuarioComponent} from './listar-usuario/listar-usuario.component';
import {EditarUduarioComponent} from './editar-uduario/editar-uduario.component';


const routes: Routes = [
  {
    path: 'crearusuario', component: CrearUsuarioComponent},
  {
    path: 'listarusuario', component: ListarUsuarioComponent},
  {
    path: 'editarusuario/:id', component: EditarUduarioComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
