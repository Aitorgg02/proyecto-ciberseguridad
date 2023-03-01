import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVulnerabilidadComponent } from './componentes/add-vulnerabilidad/add-vulnerabilidad.component';
import { AterrizajeComponent } from './componentes/aterrizaje/aterrizaje.component';
import { DetalleVulnerabilidadComponent } from './componentes/detalle-vulnerabilidad/detalle-vulnerabilidad.component';
import { EditarVulnerabilidadComponent } from './componentes/editar-vulnerabilidad/editar-vulnerabilidad.component';
import { LabXSSComponent } from './componentes/lab-xss/lab-xss.component';
import { VulnerabilidadesComponent } from './componentes/vulnerabilidades/vulnerabilidades.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {path: '',pathMatch:'full', redirectTo:'/login'},
    {path:'aterrizaje', component:AterrizajeComponent,canActivate: [AuthGuard]},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegisterComponent},
    {path:'vulnerabilidades', component:VulnerabilidadesComponent,canActivate: [AuthGuard]},
    {path: 'vulnerabilidad/:id',component:DetalleVulnerabilidadComponent,canActivate: [AuthGuard]},
    {path:'app-add-vulnerabilidad', component:AddVulnerabilidadComponent,canActivate: [AuthGuard]},
    {path:'app-editar-vulnerabilidad/:id', component:EditarVulnerabilidadComponent,canActivate: [AuthGuard]},
    {path:'lab-xss',component:LabXSSComponent,canActivate: [AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
