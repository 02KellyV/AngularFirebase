import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import {MatTableModule} from '@angular/material';
import { EditarUduarioComponent } from './editar-uduario/editar-uduario.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    NavbarComponent,
    ListarUsuarioComponent,
    EditarUduarioComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
