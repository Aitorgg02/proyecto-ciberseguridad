import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVulnerabilidadComponent } from './componentes/add-vulnerabilidad/add-vulnerabilidad.component';
import { AterrizajeComponent } from './componentes/aterrizaje/aterrizaje.component';
import { DetalleVulnerabilidadComponent } from './componentes/detalle-vulnerabilidad/detalle-vulnerabilidad.component';
import { EditarVulnerabilidadComponent } from './componentes/editar-vulnerabilidad/editar-vulnerabilidad.component';
import { LabXSSComponent } from './componentes/lab-xss/lab-xss.component';
import { VulnerabilidadesComponent } from './componentes/vulnerabilidades/vulnerabilidades.component';

const routes: Routes = [
    {path: '',pathMatch:'full', redirectTo:'/aterrizaje'},
    {path:'aterrizaje', component:AterrizajeComponent},
    {path:'vulnerabilidades', component:VulnerabilidadesComponent},
    {path: 'vulnerabilidad/:id',component:DetalleVulnerabilidadComponent},
    {path:'app-add-vulnerabilidad', component:AddVulnerabilidadComponent},
    {path:'app-editar-vulnerabilidad/:id', component:EditarVulnerabilidadComponent},
    {path:'lab-xss',component:LabXSSComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
