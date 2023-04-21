import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { Articulo1Component } from './articulo1/articulo1.component';
import { Articulo2Component } from './articulo2/articulo2.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"habilidades", component:HabilidadesComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"blog",component:BlogComponent},
  {path:'articulo1',component:Articulo1Component},
  {path:'articulo2', component:Articulo2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
