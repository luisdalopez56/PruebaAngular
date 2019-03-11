import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';

const appRoutes: Routes = [
  {
    path: 'clientes',
    component: ClienteComponent,
    data: { title: 'Lista de productos' }
  },
  {
    path: 'cliente-details/:id',
    component: ClienteDetailComponent,
    data: { title: 'Detalles del cliente' }
  },
  {
    path: 'cliente-add',
    component: ClienteAddComponent,
    data: { title: 'Añadir Cliente' }
  },
  {
    path: 'cliente-edit/:id',
    component: ClienteEditComponent,
    data: { title: 'Editar cliente' }
  },
  { path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteAddComponent,
    ClienteDetailComponent,
    ClienteEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

